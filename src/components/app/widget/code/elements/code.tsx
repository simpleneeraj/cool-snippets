import React from 'react';
import dynamic from 'next/dynamic';
import CodeHeaderWidget from '../headers';
import UIView from '@/ui-kit/source/UIView';
import { ReactCodeMirrorProps } from '@/plugins/codemirror/editor/types';

type Props = {} & ReactCodeMirrorProps;

const CodeMirror = dynamic(() => import('@/plugins/codemirror/editor'), {
  ssr: false,
});

const CodeElement: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <UIView className="glass-layer" />
      <UIView className="z-10">
        <CodeHeaderWidget />
        <CodeMirror className="codemirror" {...rest} />
      </UIView>
    </>
  );
};
export default CodeElement;
