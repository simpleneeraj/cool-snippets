import React from 'react';
import { ElementType } from '@/typings/editor';

type Props = {
  style?: ElementType;
};
const ElementStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  const neon = PROPERTIES?.neon;
  const glassmorphism = PROPERTIES?.glassmorphism;

  const textShadowStyle = neon?.enabled
    ? `${neon.offsetX}px ${neon.offsetY}px ${neon.blurRadius}px`
    : 'none';

  return (
    <style>
      {`
        .cm-editor {
          padding: 0.5rem 1rem;
        }
        .cm-line {
          background: unset !important;
          font-size: ${CSS?.fontSize}px;
          font-family: ${CSS?.fontFamily};
          line-height: ${CSS?.lineHeight};
          font-weight: ${CSS?.fontWeight};
          text-shadow: ${textShadowStyle};
          letter-spacing: ${CSS?.letterSpacing}px;
        }
        .codemirror {
          z-index: 11;
          position: relative;
          font-family: monospace;
          background: ${glassmorphism?.enabled ? CSS?.background : 'unset'};
        }
        .glass-layer {
          filter: blur(${glassmorphism?.blur}px);
          z-index: 1;
        }
      `}
    </style>
  );
};

export default React.memo(ElementStyle);

/**
 *   .codemirror {
          z-index: 11;
          position: relative;
          // background: ${code.alpha > 0 ? 'unset' : code.background};
        }

        .layer {
          z-index: 0;
          display: grid;
          overflow: hidden;
          align-items: center;
          position: relative;
          // border-radius: ${code['corner-radius']}px;
          // backdrop-filter: blur(16px);
        }
 */

// .cm-editor {
//   // width: 100%;
//   // height: auto;
//   // max-width: 100%;
//   // min-width: unset;
//   // min-height: unset;
//   // max-height: unset;
//   // white-space: pre-wrap;
//   padding:  .5rem 1rem;

// .ͼ1 .cm-content {
//   margin: 0;
//   grow: 2;
//   outline: none;
//   display: block;
//   padding: 4px 0;
//   word-wrap: normal;
//   min-height: 100%;
//   shrink: initial;
//   white-space: initial;
//   box-sizing: border-box;
// }
