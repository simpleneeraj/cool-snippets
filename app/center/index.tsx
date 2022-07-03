import React from "react";
import delay from "lib/delay";
import BlurLayer from "./shadow";
import InlineStyle from "./inline";
import CodeLoader from "./codeloader";
import useCode from "store/hooks/usecode";
import css from "styles/center.module.scss";
import { Capture as Layer } from "lib/capture";
import codeMirrorLanguges from "lib/codemirror-langs";
import codeMirrorThemes from "lib/codemirror-themes";
import usePreference from "store/hooks/usepreference";

const CodeMirror = React.lazy(async () => {
  delay(2000);
  return await import("lib/codemirror-x");
});
const Center = () => {
  const { codeValue, writeCode } = useCode();
  const { lineNumbers, theme, mode } = usePreference();
  return (
    <React.Fragment>
      <InlineStyle />
      <div className={css.container}>
        <div className={css.smooth}>
          <Layer className="center">
            <div className="watermark">
              <p>code.icanpost.app</p>
            </div>
            <div className="layer">
              <React.Suspense fallback={<CodeLoader />}>
                <CodeMirror
                  value={codeValue}
                  onChange={(v) => writeCode(v)}
                  className="codemirror"
                  // @ts-expect-error
                  theme={codeMirrorThemes[`${theme}`]}
                  // @ts-expect-error
                  extensions={[codeMirrorLanguges[mode]()]}
                  basicSetup={{
                    lineNumbers: lineNumbers,
                    highlightActiveLineGutter: false,
                    foldGutter: false,
                    highlightActiveLine: false,
                    autocompletion: false,
                  }}
                />
              </React.Suspense>
              <BlurLayer />
            </div>
          </Layer>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Center;
