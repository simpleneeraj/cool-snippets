import "styles/codemirror.scss";
import CodeMirror from "lib/react-code";
import useCode from "store/hooks/usecode";
import getMode from "./getmode";
import getTheme from "./gettheme";
import usePreference from "store/hooks/usepreference";

const CodeEditor = () => {
  const { codeValue, writeCode } = useCode();
  const { lineNumbers, theme, mode } = usePreference();

  /**************************
  Dynamic Imports
  ***************************/
  import(`lib/theme/${theme}.css`);
  getMode(mode);
  return (
    <CodeMirror
      value={codeValue}
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
      }}
      onBeforeChange={(_editor, _data, value) => {
        writeCode(value);
      }}
    />
  );
};
export default CodeEditor;
