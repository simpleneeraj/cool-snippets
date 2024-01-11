'use client';
import React from 'react';
import View from '@/ui/view';
import dynamic from 'next/dynamic';
import InlineStyle from './inline';
import cl from '@/lib/codemirror-langs';
import css from '@/styles/center.module.scss';
import codeTheme from '@/lib/codemirror-themes';
import DragHandleIcon from '@/lib/icons/DragHandle';
import { Capture as Layer } from '@/plugins/capture';
import { Skeleton } from '@nextui-org/react';
import state from '@/constants/state.json';

const Loading = () => {
  return (
    <Skeleton>
      <div className="h-[200px] bg-opacity-50 backdrop-blur-lg"></div>
    </Skeleton>
  );
};
const draggableClassName = 'simple-drag';

const CodeHeaders = dynamic(() => import('./headers'), {
  ssr: false,
});
const CodeMirror = dynamic(() => import('@/plugins/codemirror'), {
  ssr: false,
  loading: Loading,
});

const Center = () => {
  const code = state.code;
  // const {
  //   updateCode,
  //   codeState: { code },
  // } = useCode();

  const generatedTheme = React.useMemo(
    // @ts-ignore
    () => codeTheme[code.theme](code.translucent ? code.alpha : 1),
    [code.alpha, code.theme, code.translucent]
  );
  // @ts-ignore
  const generatedMode = React.useMemo(() => cl[code.mode](), [code.mode]);
  return (
    <React.Fragment>
      <InlineStyle />
      <View className={css.container}>
        <View className={css.smooth} id="smooth-shot">
          <Layer className="center">
            <View className="layer">
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
            </View>
          </Layer>
        </View>
      </View>
    </React.Fragment>
  );
};
export default Center;

const DraggableHandler = (props: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <View className={css.handleBar} {...props}>
      <span className={draggableClassName}>
        <DragHandleIcon color="#ffffff" />
      </span>
    </View>
  );
};
