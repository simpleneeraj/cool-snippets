import React from "react";
import { Capture } from "capture-dom";
import useText from "store/hooks/usetext";
import css from "styles/center.module.scss";
import useBackground from "store/hooks/usebackground";
import AR from "./ratiobuilder";
import BlurLayer from "./shadow";
import Skeleton from "element/skeleton";
import delay from "lib/delay";
import usePost from "store/hooks/usepost";

const CodeLoader = () => (
  <Skeleton
    height={200}
    width="100%"
    reactHeight={200}
    reactWidth="100%"
    primaryColor="#00000070"
    secondryColor="#00000090"
    dur="2s"
    style={{
      borderRadius: "15px",
      zIndex: "20",
      position: "relative",
    }}
  />
);
// import ShadowLayer from "./shadow";

const CodeEditor = React.lazy(async () => {
  await delay(3000);
  return await import("./editor");
});

const Center = () => {
  return (
    <>
      <Style />
      <div className={css.container}>
        <div className={css.smooth}>
          <Capture className="center">
            <div className="layer">
              <React.Suspense fallback={<CodeLoader />}>
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
  const { alpha, blurRadius, cornerRadius } = usePost();

  return (
    <style>
      {`
      .react-code {
        z-index: 11;
        position: relative;
        background: rgba(0, 0, 0, ${alpha});
        border-radius: inherit;
      }
        .CodeMirror {
          padding: 1rem;
          font-size: ${fontSize}px;
          font-family: ${fontFace};
          line-height: ${lineHeight};
          font-weight: ${fontWeight};
          letter-spacing: ${letterSpacing}px;
        }

        .center {
          flex: 1;
          width: ${aspectWidth};
          height: ${aspectHeight};
          padding: 0 ${padding}px;
          z-index: 5;
          gap: 0.3rem;
          max-width: 920px;
          position: relative;
          overflow: hidden;
          display: grid;
          align-items: center; 
          transition: all 100ms ease-in 0s;
          background: ${source};
          background: url(${source});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

        }
        .layer {
          z-index: 0;
          display: grid;          
          align-items: center;
          position: relative;
          overflow: hidden;
          border-radius: ${cornerRadius}px;
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
          filter: blur(${blurRadius}px);
        }
      `}
    </style>
  );
};
