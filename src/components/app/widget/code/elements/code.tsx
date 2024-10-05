import React from 'react';
import dynamic from 'next/dynamic';
import CodeHeaderWidget from '../headers';
import UIView from '@/ui-kit/source/UIView';
import { ReactCodeMirrorProps } from '@/plugins/codemirror/editor/types';
import { SlideHeaderType } from '@/typings/editor';

type Props = {
  header: SlideHeaderType | null;
} & ReactCodeMirrorProps;

const CodeMirror = dynamic(() => import('@/plugins/codemirror/editor'), {
  ssr: false,
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
