import React from 'react';
import dynamic from 'next/dynamic';
import CodeHeaderWidget from '../headers';
import UIView from '@/ui-kit/source/UIView';
import { SlideHeaderType } from '@/typings/editor';
import { ReactCodeMirrorProps } from '@uiw/react-codemirror';

type Props = {
  header: SlideHeaderType | null;
} & ReactCodeMirrorProps;

const CodeMirror = dynamic(() => import('@uiw/react-codemirror'), {
  ssr: false,
  loading(loadingProps) {
    return <UIView className="codemirror h-56"></UIView>;
  },
});

const CodeElement: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <UIView className="glass-layer" />
      <UIView className="z-10">
        <CodeHeaderWidget header={rest?.header} />
        <CodeMirror className="codemirror" {...rest} />
      </UIView>
    </>
  );
};
export default CodeElement;
