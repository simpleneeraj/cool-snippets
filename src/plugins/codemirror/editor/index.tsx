'use client';

import { useCodeMirror } from './useCodeMirror';
import { ReactCodeMirrorProps, ReactCodeMirrorRef } from './types';
import React from 'react';

export * from './utils';
export * from './basicSetup';
export * from './useCodeMirror';

const CodeEditor = React.forwardRef<ReactCodeMirrorRef, ReactCodeMirrorProps>(
  (props, ref) => {
    const {
      className,
      value = '',
      selection,
      extensions = [],
      onChange,
      onStatistics,
      onUpdate,
      autoFocus,
      theme = 'light',
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      basicSetup,
      placeholder,
      indentWithTab,
      editable,
      readOnly,
      root,
      ...rest
    } = props;
    const editor = React.useRef<HTMLDivElement>(null);
    const { state, view, container, setContainer } = useCodeMirror({
      container: editor.current,
      root,
      value,
      autoFocus,
      theme,
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      basicSetup,
      placeholder,
      indentWithTab,
      editable,
      readOnly,
      selection,
      onChange,
      onStatistics,
      onUpdate,
      extensions,
    });

    React.useImperativeHandle(
      ref,
      () => ({ editor: editor.current, state: state, view: view }),
      [editor, state, view]
    );

    // check type of value
    if (typeof value !== 'string') {
      throw new Error(`value must be typeof string but got ${typeof value}`);
    }

    const defaultClassNames =
      typeof theme === 'string' ? `cm-theme-${theme}` : 'cm-theme';
    return (
      <div
        ref={editor}
        className={`${defaultClassNames} ${className ? ` ${className}` : ''}`}
        {...rest}
      ></div>
    );
  }
);

CodeEditor.displayName = 'CodeMirrorEditor';

export default CodeEditor;
