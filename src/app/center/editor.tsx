import React from "react";
import "styles/codemirror.scss";
import getTheme from "lib/gettheme";
import CodeMirror from "lib/react-code";
import codemirrorModes from "lib/getmode";

interface CodeEditorProps {
  mode: string;
  value: string;
  theme: string;
  lineNumbers: boolean;
  onCodeHandler: (value: string) => void;
}
const CodeEditor = (props: CodeEditorProps) => {
  const { lineNumbers, mode, onCodeHandler, theme, value } = props;
  /**************************
  Dynamic Imports
  ***************************/
  import(`lib/theme/${theme}.css`);
  codemirrorModes(mode);

  const onChangeCode = React.useCallback(
    (value: string) => {
      if (onCodeHandler) onCodeHandler(value);
    },
    [onCodeHandler]
  );
  return (
    <CodeMirror
      value={value}
      options={{
        mode: mode,
        theme: getTheme(theme),
        lineNumbers: lineNumbers,
        tabSize: 4,
        indentUnit: 2,
        spellcheck: false,
        lineWrapping: true,
        fixedGutter: false,
        tabindex: 4,
        inputStyle: "contenteditable",
        autofocus: true,
        autocorrect: true,
        keyMap: "default",
      }}
      onBeforeChange={(_editor, _data, value) => {
        onChangeCode(value);
      }}
    />
  );
};
export default CodeEditor;
