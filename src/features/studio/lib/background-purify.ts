import { PropertiesType } from '@features/studio/model/editor';
import { BACKGROUND_TYPE } from '@features/studio/model/enums';

/**
 * Utility function for purify css background
 * @param value
 * @returns
 */
const backgroundPurify = (
  type: BACKGROUND_TYPE,
  PROPERTIES?: PropertiesType
) => {
  switch (type) {
    case BACKGROUND_TYPE.IMAGE:
      return `url(${PROPERTIES?.image})`;
    case BACKGROUND_TYPE.VIDEO:
      return `url(${PROPERTIES?.video})`;
    case BACKGROUND_TYPE.COLOR:
      return `${PROPERTIES?.color}`;
    case BACKGROUND_TYPE.PATTERN:
      return `${PROPERTIES?.pattern}`;
    case BACKGROUND_TYPE.GRADIENT:
      return `${PROPERTIES?.gradient}`;
    default:
      return '';
  }
};

export default backgroundPurify;
