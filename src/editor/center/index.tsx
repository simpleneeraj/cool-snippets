'use client';
import React from 'react';
import View from '@/ui/view';
import BlurLayer from './shadow';
import cl from '@/lib/codemirror-langs';
import useCode from '@/store/hooks/use-code';
import css from '@/styles/center.module.scss';
import codeTheme from '@/lib/codemirror-themes';
import DragHandleIcon from '@/lib/icons/DragHandle';
import { Capture as Layer } from '@/plugins/capture';
import CodeLoader from '@/components/skeleton/codeloader';
// import Draggable from "react-draggable";
// import CodeHeaders from "./headers";
import dynamic from 'next/dynamic';
import InlineStyle from './inline';

const draggableClassName = 'simple-drag';

const CodeHeaders = dynamic(() => import('./headers'));
// const Draggable = dynamic(() => import('react-draggable'), {
//   ssr: false,
// });
const CodeMirror = dynamic(() => import('@/plugins/codemirror'));

interface CenterProps {
  watermark?: string;
}

const Center = ({ watermark }: CenterProps) => {
  const {
    updateCode,
    codeState: { code },
  } = useCode();

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
              <React.Suspense fallback={<CodeLoader />}>
                <CodeHeaders className={generatedTheme[0][0].value} />
                <CodeMirror
                  value={code['value']}
                  readOnly={!code.editable}
                  onChange={(value) => updateCode('value', value)}
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
              </React.Suspense>
              <BlurLayer />
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
