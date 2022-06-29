// import "styles/codemirror.scss";
import CodeMirror from "lib/react-code";
import useCode from "store/hooks/usecode";
import getMode from "./getmode";
import getTheme from "./gettheme";
import usePreference from "store/hooks/usepreference";
import CodeMirrorInlineStyle from "lib/react-code/inline";

const CodeEditor = () => {
  const { codeValue, writeCode } = useCode();
  const { lineNumbers, theme, mode } = usePreference();

  /**************************
  Dynamic Imports
  ***************************/
  import(`codemirror/theme/${theme}.css`);
  getMode(mode);
  return (
    <>
      <CodeMirrorInlineStyle />
      <CodeMirror
        value={codeValue}
        style={{}}
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
    </>
  );
};
export default CodeEditor;
