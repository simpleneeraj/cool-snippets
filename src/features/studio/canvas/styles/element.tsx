import React from 'react';
import { ElementType } from '@features/studio/model/editor';
import { resolveCodeFontFamily } from '@shared/fonts/client';

type Props = {
  style?: ElementType;
};

/**
 * Emits `prop: value;` only when the value is usable.
 *
 * Interpolating an absent value straight into the template produced tokens like
 * `undefinedpx`, which CSS drops silently — the declaration disappeared with no
 * error and the element fell back to an inherited value.
 */
const decl = (property: string, value?: string | number | null) =>
  value === undefined || value === null || value === ''
    ? ''
    : `${property}: ${value};`;

/** `12` -> `'12px'`; absent stays absent so `decl` can skip the declaration. */
const px = (value?: string | number | null) =>
  value === undefined || value === null || value === ''
    ? undefined
    : `${value}px`;

const ElementStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  const neon = PROPERTIES?.neon;
  const glassmorphism = PROPERTIES?.glassmorphism;

  // A text-shadow with no color component resolves each layer against
  // `currentColor`, so the glow could only ever match the text it sat behind.
  const textShadow = neon?.enabled
    ? `${neon.offsetX ?? 0}px ${neon.offsetY ?? 0}px ${neon.blurRadius ?? 0}px ${
        neon.color ?? 'currentColor'
      }`
    : 'none';

  // The store holds a stable id ('JetBrainsMono'); next/font generates the real
  // family name at build time, so it has to be looked up rather than persisted.
  const fontFamily = resolveCodeFontFamily(CSS?.fontFamily);

  const scope = `#element-${style?.id}`;

  return (
    <style>
      {`
        ${scope} .cm-editor {
          padding: 0.5rem 1rem;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
        ${scope} .cm-line {
          background: unset !important;
          ${decl('font-size', px(CSS?.fontSize))}
          ${decl('font-family', fontFamily)}
          ${decl('line-height', CSS?.lineHeight)}
          ${decl('font-weight', CSS?.fontWeight)}
          ${decl('text-shadow', textShadow)}
          ${decl('letter-spacing', px(CSS?.letterSpacing))}
        }
        ${scope} .code-header-filename {
          ${decl('font-family', fontFamily)}
        }
        ${scope} .codemirror {
          z-index: 11;
          position: relative;
          font-family: monospace;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: ${glassmorphism?.enabled ? (CSS?.background ?? 'unset') : 'unset'};
        }
        ${scope} .glass-layer {
          z-index: 1;
          ${
            // Blurring while the effect is off cost a compositor layer for a
            // result nobody could see.
            glassmorphism?.enabled
              ? decl('filter', `blur(${glassmorphism.blur ?? 0}px)`)
              : ''
          }
        }
        ${scope} .cm-editor .cm-scroller {
          overflow: auto;
        }
      `}
    </style>
  );
};

export default ElementStyle;
