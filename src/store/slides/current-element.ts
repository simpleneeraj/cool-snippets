import { create } from 'zustand';
import { pauseHistory, resumeHistory } from '../hooks/use-history';

type State = {
  element: string | null;
  /** True while Moveable is actively dragging/resizing — prevents deselection */
  interacting: boolean;
};

type Action = {
  updateElement: (value: string | null) => void;
  setInteracting: (value: boolean) => void;
};

export const useActiveElement = create<State & Action>((set) => ({
  element: null,
  interacting: false,
  updateElement: (value: string | null) =>
    set(() => ({
      element: value,
    })),
  // History is paused for the duration of a drag/resize so the gesture records
  // a single undo step rather than one per pointer move.
  setInteracting: (value: boolean) => {
    if (value) pauseHistory();
    else resumeHistory();
    set(() => ({ interacting: value }));
  },
}));
