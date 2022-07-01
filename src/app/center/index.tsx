import React from "react";
import { Capture } from "capture-dom";
import useText from "store/hooks/usetext";
import css from "styles/center.module.scss";
import useBackground from "store/hooks/usebackground";
import AR from "./ratiobuilder";
import BlurLayer from "./shadow";

// import ShadowLayer from "./shadow";

const CodeEditor = React.lazy(() => import("./editor"));

const Center = () => {
  return (
    <>
      <Style />
      <div className={css.container}>
        <div className={css.smooth}>
          <Capture className="center">
            <div className="layer">
              <React.Suspense fallback={null}>
                <CodeEditor />
                <BlurLayer />
              </React.Suspense>
            </div>
          </Capture>
        </div>
      </div>
    </>
  );
};
export default Center;

const Style = () => {
  const { fontFace, fontWeight, fontSize, letterSpacing, lineHeight } =
    useText();
  const { source, aspectRatio } = useBackground();
  const { padding } = useBackground();

  const { aspectHeight, aspectWidth } = AR(aspectRatio);

  return (
    <style>
      {`
      .react-code {
        z-index: 11;
        position: relative;
        background: rgba(0, 0, 0, 0.5);
        border-radius: inherit;
      }
        .CodeMirror {
          padding: 1rem;
          font-size: ${fontSize};
          font-family: ${fontFace};
          line-height: ${lineHeight};
          font-weight: ${fontWeight};
          letter-spacing: ${letterSpacing};
        }

        .center {
          background: ${source};
          background: url(${source});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 0 ${padding};
          width: ${aspectWidth};
          height: ${aspectHeight};
          max-width: 920px;
          position: relative;
          flex: 1;
          gap: 0.3rem;
          z-index: 5;
          overflow: hidden;
          display: grid;
          align-items: center; 
          transition: all 100ms ease-in 0s;

        }
        .layer {
          z-index: 0;
          display: grid;
          border-radius: 15px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .blur {
          top: 50%;
          left: 50%;
          z-index: 6;
          position: absolute;
          transform: translate(-50%, -50%);
          background: ${source};
          background: url(${source});
          width: ${aspectWidth};
          height: ${aspectHeight};
          transition: all 100ms ease-in 0s;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-color: hotpink;
          filter: blur(10px);
          -webkit-filter: blur(10px);
          opacity: 1;
        }
      `}
    </style>
  );
};
