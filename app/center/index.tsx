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
import DragHandleIcon from "lib/icons/DragHandle";
import dynamic from "next/dynamic";
import View from "ui/view";

const Draggable = dynamic(() => import("react-draggable"), { ssr: false });
const draggableClassName = "simple-drag";

const CodeMirror = React.lazy(async () => {
  await delay(3000);
  return await import("lib/codemirror-x");
});

const Center = () => {
  const { alpha } = usePost();
  const { codeValue, writeCode } = useCode();
  const { autoCompletion } = usePreference();
  const { lineNumbers, theme, mode } = usePreference();
  const { draggable } = usePreference();
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
      <View className={css.container}>
        <View className={css.smooth}>
          <Layer className="center">
            <View className="watermark">
              <p>www.icanpost.app</p>
            </View>
            <Draggable
              axis="y"
              grid={[25, 25]}
              handle={`.${draggableClassName}`}
              disabled={!draggable}
            >
              <View className="layer">
                {draggable && <DraggableContainer />}
                <React.Suspense fallback={<CodeLoader />}>
                  <CodeMirror
                    readOnly
                    //  editable={false}

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
              </View>
            </Draggable>
          </Layer>
        </View>
      </View>
    </React.Fragment>
  );
};
export default Center;

const DraggableContainer = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <View className={css.handleBar} {...props}>
      <span className={draggableClassName}>
        <DragHandleIcon color="#ffffff" />
      </span>
    </View>
  );
};
