import { create } from 'zustand';
import { pauseHistory, resumeHistory } from '../hooks/use-history';

/**
 * What the editor currently has selected. The artboard itself is a selectable
 * object — not just "an element or nothing" — so the right panel can show slide
 * properties the same way it shows element properties.
 */
export type SelectionTarget =
  | { kind: 'slide' }
  | { kind: 'element'; id: string };

type State = {
  selection: SelectionTarget | null;
  /** True while Moveable is actively dragging/resizing — prevents deselection */
  interacting: boolean;
  /**
   * The element currently in *edit* mode (text being typed, code being edited),
   * as opposed to merely selected. Only text/code elements ever enter this.
   * Drives which toolbar shows and whether Moveable steps aside.
   */
  editingId: string | null;
};

type Action = {
  /**
   * Select an element by id, or clear the selection with `null`. Kept as the
   * primary entry point because most callers only ever deal in element ids.
   */
  updateElement: (value: string | null) => void;
  selectSlide: () => void;
  clearSelection: () => void;
  setInteracting: (value: boolean) => void;
  /** Enter edit mode for an element (also selects it). */
  beginEditing: (id: string) => void;
  /** Leave edit mode; the element stays selected. */
  endEditing: () => void;
};

export const useActiveElement = create<State & Action>((set) => ({
  selection: null,
  interacting: false,
  editingId: null,
  updateElement: (value: string | null) =>
    set((state) => ({
      selection: value ? { kind: 'element', id: value } : null,
      // Selecting is not editing. Re-selecting the element already being
      // edited (e.g. clicking inside its text to move the caret) preserves
      // edit mode; selecting anything else — or nothing — leaves it.
      editingId: value && value === state.editingId ? state.editingId : null,
    })),
  selectSlide: () => set(() => ({ selection: { kind: 'slide' }, editingId: null })),
  clearSelection: () => set(() => ({ selection: null, editingId: null })),
  // History is paused for the duration of a drag/resize so the gesture records
  // a single undo step rather than one per pointer move.
  setInteracting: (value: boolean) => {
    if (value) pauseHistory();
    else resumeHistory();
    set(() => ({ interacting: value }));
  },
  beginEditing: (id: string) =>
    set(() => ({ selection: { kind: 'element', id }, editingId: id })),
  endEditing: () => set(() => ({ editingId: null })),
}));

/** Narrow subscription: only re-renders when the selected *element* changes. */
export const useSelectedElementId = () =>
  useActiveElement((s) => (s.selection?.kind === 'element' ? s.selection.id : null));

/** Narrow subscription: true while the artboard itself is selected. */
export const useIsSlideSelected = () =>
  useActiveElement((s) => s.selection?.kind === 'slide');

/** Narrow subscription: the element currently in edit mode, or null. */
export const useEditingElementId = () =>
  useActiveElement((s) => s.editingId);

/** Non-reactive read, for event handlers. */
export const getSelectedElementId = () => {
  const { selection } = useActiveElement.getState();
  return selection?.kind === 'element' ? selection.id : null;
};
