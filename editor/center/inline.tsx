import cssRatio from 'lib/ratio';
import useCode from 'store/hooks/use-code';
import backgroundFilter from 'utils/b-filter';

const InlineStyle = () => {
  const {
    codeState: { canvas, code, text },
  } = useCode();
  const realRatio = cssRatio(canvas['aspect-ratio']);
  const background = backgroundFilter(canvas.source);
  // "Lucida Console", "Courier New", monospace, Monaco
  const fontFace = `${text['font-face']}`;
  return (
    <style>
      {`
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
          font-size: ${text['font-size']}px;
          font-family: ${fontFace};
          line-height: ${text['line-height']};
          font-weight: ${text['font-weight']};
          letter-spacing: ${text['letter-spacing']}px;
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
        .watermark {
          left: 50%;
          z-index: 30;
          bottom: 15px;
          position: absolute;
          transform: translate(-50%, 0);
        }
        .watermark p {
          font-weight: 400;
          font-size: 0.9rem;
          font-family: ${fontFace};
          text-shadow: 0px 0px 30px var(--ui-color-primary);
        }
        .codemirror {
          z-index: 11;
          position: relative;
          // border-radius: inherit;
          background: ${code.alpha > 0 ? 'unset' : code.background};
        }

        .layer {
          z-index: 0;
          display: grid;
          overflow: hidden;
          align-items: center;
          position: relative;
          border-radius: ${code['corner-radius']}px;
           
        }
        .blur,
        .center {
          background: ${background};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 100ms ease-in;
          width: ${canvas.width}px;
          height: ${!canvas['aspect-ratio'] ? `${canvas.height}px` : 'unset'};
          aspect-ratio: ${canvas['aspect-ratio'] ? realRatio : 'unset'};
        }
        .center {
          flex: 1;
          z-index: 5;
          gap: 0.3rem;
          display: grid;
          overflow: hidden;
          max-width: 1024px;
          position: relative;
          align-items: center;
          padding: 0 ${code.padding}px;
        }
        .blur {
          top: 50%;
          left: 50%;
          z-index: 6;
          position: absolute;
          filter: blur(${code['blur-radius']}px);
          transform: translate(-50%, -50%);
        }
        .file-name-input{
          font-family: ${fontFace};
        }
      `}
    </style>
  );
};

export default InlineStyle;
