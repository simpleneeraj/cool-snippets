import { ELEMENTS } from '@features/studio/model/enums';
import { ElementType } from '@features/studio/model/editor';

/** react-dnd item type key for element panel cards */
export const DRAG_ITEM_TYPE = 'XRYSTAL_ELEMENT' as const;

/** Payload carried while an element card is being dragged */
export interface DragItem {
  type: typeof DRAG_ITEM_TYPE;
  elementType: ELEMENTS;
  /** Label shown in the drag overlay (optional) */
  label: string;
  /**
   * Overrides layered over the element template on drop. Panels that drag a
   * *specific* instance — a chosen icon, a picked image — carry the instance
   * data here; the plain element palette omits both.
   */
  style?: Partial<ElementType['style']>;
  properties?: ElementType['properties'];
}
