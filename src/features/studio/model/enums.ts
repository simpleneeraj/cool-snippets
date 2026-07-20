export enum SEGMENT_FEATURE {
  LAYERS = 'SEGMENT::LAYERS',
  TEMPLATES = 'SEGMENT::TEMPLATES',
}
export enum SEGMENT_SCREEN {
  EDIT = 'SEGMENT::EDIT',
  BACKGROUNDS = 'SEGMENT::BACKGROUNDS',
  ICONS = 'SEGMENT::ICONS',
  // Panels exist and are wired in the secondary aside switch, but neither has a
  // tab in the header segment yet — reachable only programmatically.
  SETTINGS = 'SEGMENT::SETTINGS',
  AI = 'SEGMENT::AI',
  SHORCUTS = 'SEGMENT::SHORCUTS',
}

export enum ASIDE_SCREEN {
  EMPTY_SCREEN = '',
  ASPECT_RATIO_SCREEN = 'SCREEN::ASPECT_RATIO_SCREEN',
  PROGRAMMING_LANGUAGE_SCREEN = 'SCREEN::PROGRAMMING_LANGUAGE_SCREEN',
}

export enum BACKGROUND_SCREEN {
  SOLID = 'SCREEN::SOLID',
  GRADIENTS = 'SCREEN::GRADIENTS',
  IMAGES = 'SCREEN::IMAGES',
  MESH = 'SCREEN::MESH',
  PATTERNS = 'SCREEN::PATTERNS',
}
export enum ELEMENTS {
  CODE = 'ELEMENT::CODE',
  TEXT = 'ELEMENT::TEXT',
  IMAGE = 'ELEMENT::IMAGE',
  ICON = 'ELEMENT::ICON',
  QRCODE = 'ELEMENT::QRCODE',
  WATERMARK = 'ELEMENT::WATERMARK',
  USERINFO = 'ELEMENT::USERINFO',
}

export enum WATERMARK_MODE {
  TEXT = 'text',
  IMAGE = 'image',
}

export enum ASSET_SOURCE {
  URL = 'url',
  IDB = 'idb',
}

export enum QR_ERROR_LEVEL {
  LOW = 'L',
  MEDIUM = 'M',
  QUARTILE = 'Q',
  HIGH = 'H',
}

export enum LAYER_DIRECTION {
  UP = 'up',
  DOWN = 'down',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum TEXT_ALIGN {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export enum BACKGROUND_TYPE {
  COLOR = 'color',
  GRADIENT = 'gradient',
  IMAGE = 'image',
  VIDEO = 'video',
  PATTERN = 'pattern',
}
export enum Terminal {
  iOS = 'ios::terminal',
  Unix = 'unix::terminal',
  Windows = 'windows::terminal',
}

export enum APP_PLAN_TYPE {
  FREE = 'FREE',
  PRO = 'PRO',
  PREMIUM = 'PREMIUM',
}
