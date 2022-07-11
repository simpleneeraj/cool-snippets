import cssRatio from "lib/ratio";
import usePost from "store/hooks/usepost";
import useText from "store/hooks/usetext";
import useBackground from "store/hooks/usebackground";

const backgroundFilter = (value: string) => {
  const REGEX_URL =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const REGEX_COLOR = /gradient|#|rgb|hsl/g;
  if (RegExp(REGEX_URL).test(value)) {
    return `url(${value})`;
  }
  if (RegExp(REGEX_COLOR).test(value)) {
    return value;
  } else {
    return `url(${value})`;
  }
};

const InlineStyle = () => {
  const aspectWidth = 512;
  const { padding } = useBackground();
  const { letterSpacing, lineHeight } = useText();
  const { source, aspectRatio } = useBackground();
  const { fontFace, fontWeight, fontSize } = useText();
  const { alpha, blurRadius, cornerRadius } = usePost();
  const realRatio = cssRatio(aspectRatio);
  const background = backgroundFilter(source);

  return (
    <style>
      {`
          .cm-editor {
            padding: 1rem;
            height:auto ;
            min-height:unset ;
            max-height:unset ;
            width: 100%;
            min-width: unset;
            max-width: 100%;
          }
          .cm-line {
            font-size: ${fontSize}px;
            font-family: ${fontFace};
            line-height: ${lineHeight};
            font-weight: ${fontWeight};
            letter-spacing: ${letterSpacing}px;
            background: unset !important;
          }
          .ͼ1 .cm-content{
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
            font-family: ${fontFace};
            text-shadow: 0px 0px 30px var(--ui-color);
          }
          .codemirror {
            z-index: 11;
            position: relative;
            border-radius: inherit;
            // background: rgba(0, 0, 0, ${alpha});
          }
  
          .layer {
            z-index: 0;
            display: grid;
            align-items: center;
            position: relative;
            overflow: hidden;
            border-radius: ${cornerRadius}px;
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
            padding: 0 ${padding}px;
          }
          .blur {
            top: 50%;
            left: 50%;
            z-index: 6;
            position: absolute;
            filter: blur(${blurRadius}px);
            transform: translate(-50%, -50%);
          }
        `}
    </style>
  );
};

export default InlineStyle;
