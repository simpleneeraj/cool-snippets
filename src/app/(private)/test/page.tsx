'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {
  generatedCodeLanguage,
  generatedCodeTheme,
} from '@/plugins/codemirror/utils';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { ThemesEnum } from '@/plugins/codemirror/themes';

function App() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: string) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={generatedCodeLanguage(LanguagesEnum.SWIFT)}
      theme={generatedCodeTheme(ThemesEnum.DRACULA, 0)}
    />
  );
}
export default App;
