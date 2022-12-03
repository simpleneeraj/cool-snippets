import cssRatio from "lib/ratio";
import useCode from "store/hooks/use-code";
import backgroundFilter from "utils/background-filter";

const InlineStyle = () => {
  const aspectWidth = 450;
  const {
    codeState: { canvas, code, text },
  } = useCode();
  const realRatio = cssRatio(canvas["aspect-ratio"]);
  const background = backgroundFilter(canvas.source);
  return (
    <style>
      {`
        .cm-editor {
          padding: 1rem;
          height: auto;
          min-height: unset;
          max-height: unset;
          width: 100%;
          min-width: unset;
          max-width: 100%;
          padding-top: 0px;
        }
        .cm-line {
          font-size: ${text["font-size"]}px;
          font-family: ${text["font-face"]};
          line-height: ${text["line-height"]};
          font-weight: ${text["font-weight"]};
          letter-spacing: ${text["letter-spacing"]}px;
          background: unset !important;
        }
        .ͼ1 .cm-content {
          margin: 0;
          flex-grow: 2;
          min-height: 100%;
          display: block;
          word-wrap: normal;
          box-sizing: border-box;
          padding: 4px 0;
          outline: none;
          flex-shrink: initial;
          white-space: initial;
        }
        .watermark {
          left: 50%;
          bottom: 15px;
          z-index: 30;
          position: absolute;
          transform: translate(-50%, 0);
        }
        .watermark p {
          font-size: 0.9rem;
          font-weight: 400;
          font-family: ${text["font-face"]};
          text-shadow: 0px 0px 30px var(--ui-color-primary);
        }
        .codemirror {
          z-index: 11;
          position: relative;
          border-radius: inherit;
          // background: rgba(0, 0, 0, ${code.alpha});
        }

        .layer {
          z-index: 0;
          display: grid;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-radius: ${code["corner-radius"]}px;
        }
        .blur,
        .center {
          background: ${background};
          width: ${aspectWidth}px;
          background-size: cover;
          aspect-ratio: ${realRatio};
          background-position: center;
          background-repeat: no-repeat;
          transition: all 100ms ease-in;
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
          filter: blur(${code["blur-radius"]}px);
          transform: translate(-50%, -50%);
        }
      `}
    </style>
  );
};

export default InlineStyle;
