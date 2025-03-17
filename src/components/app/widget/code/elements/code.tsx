import React from 'react';
import dynamic from 'next/dynamic';
import CodeHeaderWidget from '../headers';
import UIView from '@/app-kit/source/UIView';
import { SlideHeaderType } from '@/typings/editor';
import {
  EditorView,
  Extension,
  ReactCodeMirrorProps,
} from '@uiw/react-codemirror';
import { merge } from 'lodash';

type Props = {
  header: SlideHeaderType | null;
} & ReactCodeMirrorProps;

const CodeMirror = dynamic(() => import('@uiw/react-codemirror'), {
  ssr: false,
  loading() {
    return <UIView className="codemirror h-56"></UIView>;
  },
});

const CodeElement: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <UIView className="glass-layer" />
      <UIView className="z-10">
        <CodeHeaderWidget header={rest?.header} />
        <CodeMirror
          {...rest}
          className="codemirror"
          basicSetup={merge(
            {
              foldGutter: false,
              lineNumbers: false,
              lintKeymap: false,
              autocompletion: false,
              highlightActiveLine: false,
              highlightActiveLineGutter: false,
            },
            rest.basicSetup
          )}
          extensions={[
            EditorView.lineWrapping,
            ...(rest.extensions as Extension[]),
          ]}
        />
      </UIView>
    </>
  );
};
export default CodeElement;
