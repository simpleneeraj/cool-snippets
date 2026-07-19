import React from 'react';
import dynamic from 'next/dynamic';
import CodeHeaderWidget from '../headers';
import UIView from '@shared/uikit/UIView';
import { EditorOptionsType, SlideHeaderType } from '@features/studio/model/editor';
import { indentationMarkers } from '@replit/codemirror-indentation-markers';
import {
  EditorView,
  Extension,
  ReactCodeMirrorProps,
} from '@uiw/react-codemirror';
import { resolveEditorOptions } from '@features/studio/store/slides/editor-options';

type Props = {
  header: SlideHeaderType | null;
  editorOptions?: EditorOptionsType;
  /** Language extension, applied only when syntax highlighting is on. */
  language?: Extension;
} & ReactCodeMirrorProps;

const CodeMirror = dynamic(() => import('@uiw/react-codemirror'), {
  ssr: false,
  loading() {
    return <UIView className="codemirror h-56"></UIView>;
  },
});

const CodeElement: React.FC<Props> = ({ editorOptions, language, ...rest }) => {
  const options = resolveEditorOptions(editorOptions);

  const extensions = React.useMemo(() => {
    const list: Extension[] = [];
    if (options.wrapLongLines) list.push(EditorView.lineWrapping);
    if (options.indentationGuides) list.push(indentationMarkers());
    if (options.syntaxHighlighting && language) list.push(language);
    return list;
  }, [
    options.wrapLongLines,
    options.indentationGuides,
    options.syntaxHighlighting,
    language,
  ]);

  return (
    <>
      <UIView className="glass-layer absolute inset-0 w-full h-full" />
      <UIView className="z-10 w-full h-full relative">
        <CodeHeaderWidget header={rest?.header} />
        <CodeMirror
          {...rest}
          className="codemirror"
          basicSetup={{
            foldGutter: false,
            lintKeymap: false,
            autocompletion: false,
            highlightActiveLineGutter: false,
            lineNumbers: options.lineNumbers,
            highlightActiveLine: options.highlightActiveLine,
            bracketMatching: options.matchBrackets,
            closeBrackets: options.matchBrackets,
            ...(typeof rest.basicSetup === 'object' ? rest.basicSetup : {}),
          }}
          extensions={extensions}
        />
      </UIView>
    </>
  );
};
export default CodeElement;
