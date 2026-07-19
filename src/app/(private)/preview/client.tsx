'use client';

import React from 'react';
import PreviewHeader from './navbar';
import UIView from '@shared/uikit/UIView';
import MaskWallpaper from '@vendor/mask-wallpaper';
import { wallpaperOptions } from '@/components/app/share/config';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

type ShareWidgetProps = object;

const PreviewSnippetClient: React.FC<ShareWidgetProps> = ({}) => {
  const [value, setValue] = React.useState("console.log('hello world!');");

  const onChange = React.useCallback((val: string) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  return (
    <UIView className="flex flex-col gap-4 relative h-screen bg-transparent">
      <PreviewHeader />
      <MaskWallpaper
        options={wallpaperOptions}
        className={'absolute top-0 left-0 w-full h-full z-0'}
      />
      <UIView className={'flex flex-1  overflow-auto'}>
        <UIView className="flex flex-col gap-2 max-w-5xl min-h-80 border border-white/20 rounded-2xl relative z-10 overflow-auto p-6 backdrop-blur-lg bg-white/10 shadow-lg">
          <div className="rounded-xl overflow-auto border border-white/10 backdrop-blur-md bg-white/5">
            <CodeMirror
              theme="dark"
              value={value}
              extensions={[javascript({ jsx: true, typescript: true })]}
              onChange={onChange}
              basicSetup={{
                lineNumbers: false,
                highlightActiveLine: false,
                foldGutter: false,
                autocompletion: false,
              }}
            />
          </div>
        </UIView>
      </UIView>
    </UIView>
  );
};

export default PreviewSnippetClient;
