import React from "react";
import delay from "lib/delay";
import BlurLayer from "./shadow";
import InlineStyle from "./inline";
import cl from "lib/codemirror-langs";
import codeTheme from "lib/codemirror-themes";
import CodeLoader from "./codeloader";
import usePost from "store/hooks/usepost";
import useCode from "store/hooks/usecode";
import css from "styles/center.module.scss";
import { Capture as Layer } from "lib/capture";
import usePreference from "store/hooks/usepreference";
import Draggable from "react-draggable";

const CodeMirror = React.lazy(async () => {
  await delay(3000);
  return await import("lib/codemirror-x");
});

const Center = () => {
  const { alpha } = usePost();
  const { codeValue, writeCode } = useCode();
  const { autoCompletion } = usePreference();
  const { lineNumbers, theme, mode } = usePreference();
  const { translucent } = usePreference();
  // CODE THEMES AND LANGUAGE
  const generatedTheme = React.useMemo(
    // @ts-expect-error
    () => codeTheme[theme](translucent ? alpha : 1),
    [alpha, theme, translucent]
  );
  // @ts-expect-error
  const generatedMode = React.useMemo(() => cl[mode](), [mode]);
  return (
    <React.Fragment>
      <InlineStyle />
      <div className={css.container}>
        <div className={css.smooth}>
          <Layer className="center">
            <div className="watermark">
              <p>www.icanpost.app</p>
            </div>
            <Draggable grid={[25, 25]} disabled>
              <div className="layer">
                <React.Suspense fallback={<CodeLoader />}>
                  <CodeMirror
                    value={codeValue}
                    onChange={(v) => writeCode(v)}
                    className="codemirror"
                    theme={generatedTheme}
                    extensions={generatedMode}
                    basicSetup={{
                      foldGutter: false,
                      lineNumbers: lineNumbers,
                      autocompletion: autoCompletion,
                      highlightActiveLine: false,
                      highlightActiveLineGutter: false,
                    }}
                  />
                </React.Suspense>
                <BlurLayer />
              </div>
            </Draggable>
          </Layer>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Center;
