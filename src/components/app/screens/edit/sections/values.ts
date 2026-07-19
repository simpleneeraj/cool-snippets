import { EditorOptionsType } from '@/typings/editor';
import { QR_ERROR_LEVEL, WATERMARK_MODE } from '@/typings/enums';

export enum EditSection {
  CODE_BASICS = 'code-basics',
  TYPOGRAPHY = 'typography',
  APPEARANCE = 'appearance',
  EFFECTS = 'effects',
  EDITOR_OPTIONS = 'editor-options',
  TEXT = 'text',
  IMAGE = 'image',
  QR_CODE = 'qr-code',
  USER_INFO = 'user-info',
  WATERMARK = 'watermark',
}

export const EDIT_SECTION_LABELS: Record<EditSection, string> = {
  [EditSection.CODE_BASICS]: 'Code basics',
  [EditSection.TYPOGRAPHY]: 'Typography',
  [EditSection.APPEARANCE]: 'Appearance',
  [EditSection.EFFECTS]: 'Visual effects',
  [EditSection.EDITOR_OPTIONS]: 'Editor options',
  [EditSection.TEXT]: 'Text',
  [EditSection.IMAGE]: 'Image',
  [EditSection.QR_CODE]: 'QR code',
  [EditSection.USER_INFO]: 'User info',
  [EditSection.WATERMARK]: 'Watermark',
};

export const QR_ERROR_LEVELS = [
  { value: QR_ERROR_LEVEL.LOW, label: 'Low — 7% recoverable' },
  { value: QR_ERROR_LEVEL.MEDIUM, label: 'Medium — 15% recoverable' },
  { value: QR_ERROR_LEVEL.QUARTILE, label: 'Quartile — 25% recoverable' },
  { value: QR_ERROR_LEVEL.HIGH, label: 'High — 30% recoverable' },
];

export const WATERMARK_MODES = [
  { value: WATERMARK_MODE.TEXT, label: 'Text' },
  { value: WATERMARK_MODE.IMAGE, label: 'Logo' },
];

type ToggleKey = Exclude<keyof EditorOptionsType, 'padding'>;

export const EDITOR_TOGGLES: {
  key: ToggleKey;
  label: string;
  description: string;
}[] = [
  {
    key: 'lineNumbers',
    label: 'Line numbers',
    description: 'Show a gutter numbering each line.',
  },
  {
    key: 'wrapLongLines',
    label: 'Wrap long lines',
    description: 'Fold long lines instead of scrolling sideways.',
  },
  {
    key: 'syntaxHighlighting',
    label: 'Syntax highlighting',
    description: 'Colour tokens using the selected language.',
  },
  {
    key: 'indentationGuides',
    label: 'Indentation guides',
    description: 'Draw a vertical rule at each indent level.',
  },
  {
    key: 'matchBrackets',
    label: 'Matching brackets',
    description: 'Highlight the partner of the bracket at the cursor.',
  },
  {
    key: 'highlightActiveLine',
    label: 'Highlight active line',
    description: 'Tint the line the cursor sits on.',
  },
  {
    key: 'monospaceFont',
    label: 'Monospace font',
    description: 'Turn off to render the code in the UI typeface.',
  },
];

export const CORNER_RADIUS_RANGE = { min: 0, max: 32, step: 1 };
export const OPACITY_RANGE = { min: 0, max: 1, step: 0.05 };
export const QR_SIZE_RANGE = { min: 64, max: 512, step: 8 };
export const QR_MARGIN_RANGE = { min: 0, max: 8, step: 1 };
export const PADDING_RANGE = { min: 0, max: 64, step: 2 };
export const FONT_SIZE_RANGE = { min: 8, max: 32, step: 1 };
export const LINE_HEIGHT_RANGE = { min: 1, max: 3, step: 0.1 };
export const LETTER_SPACING_RANGE = { min: -2, max: 8, step: 0.1 };

export const resolveSelected = <T extends { value: unknown }>(
  items: T[],
  value: unknown,
) => items.find((item) => item.value === value);
