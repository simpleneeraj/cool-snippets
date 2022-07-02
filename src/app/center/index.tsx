import React from "react";
import { Capture as Layer } from "capture-dom";
import useText from "store/hooks/usetext";
import css from "styles/center.module.scss";
import useBackground from "store/hooks/usebackground";
import BlurLayer from "./shadow";
import Skeleton from "element/skeleton";
import delay from "lib/delay";
import usePost from "store/hooks/usepost";
import cssRatio from "lib/ratio";
import useCode from "store/hooks/usecode";
import usePreference from "store/hooks/usepreference";

const CodeLoader = () => (
  <Skeleton
    height="209.90px"
    width="100%"
    reactHeight="100%"
    reactWidth="100%"
    primaryColor="rgba(0,0,0,.3)"
    secondryColor="rgba(0,0,0,.4)"
    dur="1s"
    style={{
      borderRadius: "15px",
      zIndex: "20",
      position: "relative",
    }}
  />
);

const CodeEditor = React.lazy(async () => {
  await delay(3000);
  return await import("./editor");
});

const Center = () => {
  const { codeValue, writeCode } = useCode();
  const { lineNumbers, theme, mode } = usePreference();
  return (
    <>
      <Style />
      <div className={css.container}>
        <div className={css.smooth}>
          <Layer className="center">
            <div className="watermark">
              <p>code.icanpost.app</p>
            </div>
            <div className="layer">
              <React.Suspense fallback={<CodeLoader />}>
                <CodeEditor
                  mode={mode}
                  theme={theme}
                  value={codeValue}
                  lineNumbers={lineNumbers}
                  onCodeHandler={(v) => writeCode(v)}
                />
              </React.Suspense>
              <BlurLayer />
            </div>
          </Layer>
        </div>
      </div>
    </>
  );
};
export default Center;

const Style = () => {
  const aspectWidth = 400;
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
      .watermark{
        left: 50%;
        bottom: 15px;
        z-index: 30;
        position: absolute;
        transform: translate(-50%, 0);
      }
      .watermark p{
        font-size: .9rem;
        font-weight: 400;
        font-family: ${fontFace};
        text-shadow: 0px 0px 30px var(--ui-color);
      }
      .react-code {
        z-index: 11;
        position: relative;
        border-radius: inherit;
        background: rgba(0,0,0, ${alpha});
      }
        .CodeMirror {
          padding: .8rem ;
          font-size: ${fontSize}px;
          font-family: ${fontFace};
          line-height: ${lineHeight};
          font-weight: ${fontWeight};
          letter-spacing: ${letterSpacing}px;
          background:unset !important;
        }
        .layer {
          z-index: 0;
          display: grid;          
          align-items: center;
          position: relative;
          overflow: hidden;
          border-radius: ${cornerRadius}px;
        }
        .blur , .center{
          background: ${background};
          width: ${aspectWidth}px;
          background-size: cover;
          aspect-ratio: ${realRatio};
          background-position: center;
          background-repeat: no-repeat;
          transition: all 100ms ease-in ;
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

const backgroundFilter = (value: string) => {
  const check = RegExp(/gradient|#|rgb|hsl/i).test(value);
  let background;
  check ? (background = value) : (background = `url(${value})`);
  return background;
};
