import { ELEMENTS } from '@/typings/enums';

/** react-dnd item type key for element panel cards */
export const DRAG_ITEM_TYPE = 'XRYSTAL_ELEMENT' as const;

/** Payload carried while an element card is being dragged */
export interface DragItem {
  type: typeof DRAG_ITEM_TYPE;
  elementType: ELEMENTS;
  /** Label shown in the drag overlay (optional) */
  label: string;
}
