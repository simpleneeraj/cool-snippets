'use client';
import React from 'react';
import dynamic from 'next/dynamic';
// import InlineStyle from './inline';
import css from '@/styles/center.module.scss';
// import DragHandleIcon from '@/lib/icons/DragHandle';
// import { Skeleton } from '@nextui-org/react';
import { Capture as CaptureView } from '@/plugins/capture';
// CODEMIRROR Things
import themes from '@/plugins/codemirror/themes';
import languages from '@/plugins/codemirror/languages';
import { Skeleton } from '@nextui-org/react';
import state from '@/constants/state.json';
import UIView from '@/ui-kit/source/UIView';
import InlineStyle from './style';

const Loading = () => {
  return (
    <Skeleton>
      <div className="h-[200px] bg-opacity-50 backdrop-blur-lg"></div>
    </Skeleton>
  );
};
const CodeMirror = dynamic(() => import('@/plugins/codemirror/editor'), {
  ssr: false,
  loading: Loading,
});

const draggableClassName = 'simple-drag';

const CodeHeaders = dynamic(() => import('./headers'), {
  ssr: false,
});

const ContainerWidget = () => {
  const code = state.code;

  const generatedTheme = React.useMemo(
    // @ts-expect-error
    () => themes[code?.theme](code.translucent ? code.alpha : 1),
    [code.alpha, code.theme, code.translucent]
  );
  const generatedMode = React.useMemo(
    // @ts-expect-error
    () => languages[code?.mode](),
    [code.mode]
  );
  return (
    <UIView className={'flex flex-col flex-1'}>
      <InlineStyle />
      <UIView className={css.container}>
        <UIView className={css.smooth} id="smooth-shot">
          <CaptureView className="center">
            <UIView className="layer">
              {code.draggable ? <DraggableHandler /> : null}
              <CodeHeaders className={generatedTheme[0][0].value} />
              <CodeMirror
                value={code['value']}
                readOnly={!code.editable}
                // onChange={(value) => updateCode('value', value)}
                className="codemirror"
                theme={generatedTheme}
                extensions={generatedMode}
                basicSetup={{
                  foldGutter: false,
                  lineNumbers: code['line-numbers'],
                  autocompletion: code['auto-completion'],
                  highlightActiveLine: false,
                  highlightActiveLineGutter: false,
                }}
              />
            </UIView>
          </CaptureView>
        </UIView>
      </UIView>
    </UIView>
  );
};
export default ContainerWidget;

const DraggableHandler = (props: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <UIView className={css.handleBar} {...props}>
      <span className={draggableClassName}>
        {/* <DragHandleIcon color="#ffffff" /> */}
      </span>
    </UIView>
  );
};
