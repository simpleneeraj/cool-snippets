import { QR_ERROR_LEVEL } from '@features/studio/model/enums';
import { DEFAULT_CODE_FONT } from '@shared/fonts/code';
import { DEFAULT_EDITOR_OPTIONS } from '@features/studio/store/slides/editor-options';
import { DEFAULT_SLIDE_PADDING } from '@features/studio/canvas/styles/slide';
import { MIN_SLIDE_WIDTH } from '@features/studio/store/slides/state';
import { LanguagesEnum } from '@vendor/codemirror/languages';
import { ThemesEnum } from '@vendor/codemirror/themes';

/**
 * Canonical per-field defaults powering the inspector's inline "reset to
 * default" buttons. They mirror the element templates in
 * `aside/primary/values.ts`; this is the single place to change what a field
 * snaps back to.
 */
export const FIELD_DEFAULTS = {
  typography: {
    fontFamily: DEFAULT_CODE_FONT,
    fontSize: 14,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  appearance: {
    borderRadius: 15,
    padding: DEFAULT_EDITOR_OPTIONS.padding,
    background: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    borderRadius: 12,
    opacity: 1,
  },
  qrCode: {
    size: 128,
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: QR_ERROR_LEVEL.MEDIUM,
    marginSize: 2,
  },
  slide: {
    width: MIN_SLIDE_WIDTH,
    padding: DEFAULT_SLIDE_PADDING,
  },
  userInfo: {
    color: '#ffffff',
    fontSize: 14,
  },
  watermark: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.6,
  },
  codeBasics: {
    language: LanguagesEnum.TYPESCRIPT,
    theme: ThemesEnum.DRACULA,
  },
  neon: {
    offsetX: -2,
    offsetY: 4,
    blurRadius: 10,
    color: '#ffffff',
  },
  glassmorphism: {
    opacity: 0,
    blur: 16,
  },
} as const;
