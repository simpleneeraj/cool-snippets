"use client";

import React from "react";
import View from "ui/view";
import BlurLayer from "./shadow";
import InlineStyle from "./inline";
import cl from "lib/codemirror-langs";
import CodeLoader from "./codeloader";
import css from "styles/center.module.scss";
import codeTheme from "lib/codemirror-themes";
import { Capture as Layer } from "plugins/capture";
import DragHandleIcon from "lib/icons/DragHandle";
import useCode from "store/hooks/use-code";

const draggableClassName = "simple-drag";
const Draggable = React.lazy(() => import("react-draggable"));
const CodeHeaders = React.lazy(() => import("./code-headers"));
const CodeMirror = React.lazy(() => import("plugins/codemirror"));

const Center = () => {
  const {
    updateCode,
    codeState: { code },
  } = useCode();

  const generatedTheme = React.useMemo(
    // @ts-ignore
    () => codeTheme[code.theme](code.translucent ? code.alpha : 1),
    [code.alpha, code.theme, code.translucent]
  );
  // @ts-ignore
  const generatedMode = React.useMemo(() => cl[code.mode](), [code.mode]);

  // const x=React.useCallback
  return (
    <React.Fragment>
      <InlineStyle />
      <View className={css.container}>
        <View className={css.smooth}>
          <Layer className="center">
            {true ? (
              <View className={`watermark`}>
                <p>www.icanpost.app</p>
              </View>
            ) : null}
            <Draggable
              axis="y"
              grid={[25, 25]}
              handle={`.${draggableClassName}`}
              disabled={!code.draggable}
            >
              <View className="layer">
                <React.Suspense fallback={<CodeLoader />}>
                  {code.draggable && <DraggableHandler />}
                  <CodeHeaders className={generatedTheme[0][0].value} />
                  <CodeMirror
                    value={code["value"]}
                    readOnly={!code.editable}
                    onChange={(value) => updateCode("value", value)}
                    className="codemirror"
                    theme={generatedTheme}
                    extensions={generatedMode}
                    basicSetup={{
                      foldGutter: false,
                      lineNumbers: code["line-numbers"],
                      autocompletion: code["auto-completion"],
                      highlightActiveLine: false,
                      highlightActiveLineGutter: false,
                    }}
                  />
                </React.Suspense>
                <BlurLayer />
              </View>
            </Draggable>
          </Layer>
        </View>
      </View>
    </React.Fragment>
  );
};
export default Center;

const DraggableHandler = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <View className={css.handleBar} {...props}>
      <span className={draggableClassName}>
        <DragHandleIcon color="#ffffff" />
      </span>
    </View>
  );
};
