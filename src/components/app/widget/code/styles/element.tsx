import { ElementType } from '@/typings/editor';

type Props = {
  style?: ElementType;
};
const ElementStyle: React.FC<Props> = ({ style }) => {
  const CSS = style?.style;
  const PROPERTIES = style?.properties;

  return (
    <style>
      {`
        
        .layer {
          z-index: 0;
          display: grid;
          overflow: hidden;
          align-items: center;
          position: relative;
          backdrop-filter: blur(16px);
          border-radius: ${CSS?.borderRadius}px;
        }
        .cm-editor {
          width: 100%;
          height: auto;
          max-width: 100%;
          min-width: unset;
          min-height: unset;
          max-height: unset;
          padding:  .5rem 1rem;
        }
        .cm-line {
          background: unset !important;
          font-size: ${CSS?.fontSize}px;
          font-family: ${CSS?.fontFamily};
          line-height: ${CSS?.lineHeight};
          font-weight: ${CSS?.fontWeight};
          letter-spacing: ${CSS?.letterSpacing}px;
        }
        .ͼ1 .cm-content {
          margin: 0;
          flex-grow: 2;
          outline: none;
          display: block;
          padding: 4px 0;
          word-wrap: normal;
          min-height: 100%;
          flex-shrink: initial;
          white-space: initial;
          box-sizing: border-box;
        }
        .codemirror {
          z-index: 11;
          position: relative;
          background: ${CSS?.background};

        }
        .file-name-input{
        font-family: ${CSS?.fontFamily};
        }
      `}
    </style>
  );
};

export default ElementStyle;

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
