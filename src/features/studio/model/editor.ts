/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ASSET_SOURCE,
  BACKGROUND_TYPE,
  ELEMENTS,
  LAYER_DIRECTION,
  QR_ERROR_LEVEL,
  WATERMARK_MODE,
} from './enums';
import { HeaderInputType, HeaderPositions, HeaderVariants } from './templates';

export type Pairs = Record<string, any>;

export enum StorageEnum {
  NAME = 'COOL_SNIPPETS_STORE',
}

export const STORE_VERSION = 2;
export enum InitialValues {
  SLIDE_ID = 'initial_slide_id',
  ELEMENT_ID = 'initial_element_id',
}

/**
 * Editor toggles for a CODE element. Every field is optional — absent means
 * "use the default", and the defaults in `resolveEditorOptions` reproduce the
 * behaviour that used to be hardcoded in the CodeMirror setup, so stores saved
 * before this schema existed keep rendering identically.
 */
export type EditorOptionsType = {
  lineNumbers?: boolean;
  wrapLongLines?: boolean;
  highlightActiveLine?: boolean;
  matchBrackets?: boolean;
  syntaxHighlighting?: boolean;
  indentationGuides?: boolean;
  monospaceFont?: boolean;
  padding?: number;
};

/** Points at either a remote URL or a blob held in IndexedDB. */
export type AssetRefType = {
  source?: ASSET_SOURCE;
  assetId?: string;
  src?: string;
  naturalWidth?: number;
  naturalHeight?: number;
  alt?: string;
};

export type QrCodePropertiesType = {
  value?: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  level?: QR_ERROR_LEVEL;
  marginSize?: number;
};

export type UserInfoPropertiesType = {
  name?: string;
  handle?: string;
  avatar?: AssetRefType;
  showAvatar?: boolean;
};

export type WatermarkPropertiesType = {
  mode?: WATERMARK_MODE;
  text?: string;
  image?: AssetRefType;
  opacity?: number;
};

/**
 * The shared property bag. Element-specific shapes (`QrCodePropertiesType`,
 * `AssetRefType`, …) are kept separate and narrowed by each renderer rather
 * than intersected here — they carry conflicting keys (`source`, `image`) and
 * merging them would make every element pay for every other element's fields.
 */
export type PropertiesType = {
  language?: string;
  theme?: string;
  editor?: EditorOptionsType;
} & Pairs;

export type ElementType = {
  id?: string | undefined;
  type?: ELEMENTS;
  content?: any;
  hidden?: boolean;
  style?: React.CSSProperties & Pairs;
  properties?: PropertiesType & Pairs;
  header?: SlideHeaderType;
};

export type SlideBackgroundTypes = {
  type?: BACKGROUND_TYPE;
  style?: {
    width?: number;
    height?: number;
    size?: string;
    position?: string;
    repeat?: string;
  } & Pairs;
  properties?: {
    watermark?: boolean;
    aspectRatio?: string;
    source?: string;
  } & Pairs;
};

export type SlideHeaderType = {
  variant?: HeaderVariants;
  type?: string;
  theme?: string;
  input?: HeaderInputType;
  position?: HeaderPositions;
  style?: {
    background?: string;
  } & Pairs;
  properties?: {
    colors?: {
      name: string;
      hex: string;
    }[];
    title?: {
      text?: string;
      icon?: string;
    };
  } & Pairs;
};

export type SlideWatermarkType = {
  text?: string;
  image?: string;
  style?: {
    opacity?: number;
    fontSize?: string;
    color?: string;
    position?: string;
  } & Pairs;
};

export type SlideTypes = {
  id: string;
  name: string;
  background?: SlideBackgroundTypes;
  watermark?: SlideWatermarkType;
  elements: ElementType[];
};

export type SlideStateType = {
  slides: SlideTypes[];
} & Pairs;

export type SlideActionType = {
  createSlide: (slide: SlideTypes) => void;
  updateSlide: (
    id: string,
    slide: Partial<Omit<SlideTypes, 'id' | 'elements'>>,
  ) => void;
  deleteSlide: (id: string) => void;
  duplicateSlide: (id: string) => void;
  createSlideElement: (slideId: string, element: ElementType) => void;
  updateSlideElement: (
    slideId: string,
    elementId: string,
    element: ElementType,
  ) => void;
  deleteSlideElement: (slideId: string, elementId: string) => void;
  duplicateSlideElement: (slideId: string, elementId: string) => void;
  moveSlideElement: (
    slideId: string,
    elementId: string,
    direction: LAYER_DIRECTION,
  ) => void;
  reorderSlideElement: (
    slideId: string,
    elementId: string,
    toIndex: number,
  ) => void;
  /** Replaces every slide at once — the entry point for a JSON design import. */
  replaceSlides: (slides: SlideTypes[]) => void;
  reset: () => void;
};
