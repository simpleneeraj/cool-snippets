import { ElementType } from '@features/studio/model/editor';
import { ASSET_SOURCE } from '@features/studio/model/enums';
import { PickerIconType } from '@shared/types/icon-picker';

export const ICON_SIZE = 96;

/**
 * The element overrides for a picked icon.
 *
 * Single source of truth for both entry points — click-to-add and drag-to-drop
 * — so the two paths cannot drift into producing different elements.
 */
export const buildIconElement = (
  icon: PickerIconType,
): Pick<ElementType, 'style' | 'properties'> => ({
  style: { width: ICON_SIZE, height: ICON_SIZE },
  properties: {
    source: ASSET_SOURCE.URL,
    src: icon.source,
    alt: icon.name,
  },
});
