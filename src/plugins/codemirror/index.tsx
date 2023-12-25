"use client";

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { useCodeMirror } from "./useCodeMirror";
import { ReactCodeMirrorProps, ReactCodeMirrorRef } from "./types";

export * from "./basicSetup";
export * from "./useCodeMirror";
export * from "./utils";

const ReactCodeMirror = forwardRef<ReactCodeMirrorRef, ReactCodeMirrorProps>(
  (props, ref) => {
    const {
      className,
      value = "",
      selection,
      extensions = [],
      onChange,
      onStatistics,
      onUpdate,
      autoFocus,
      theme = "light",
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
    const editor = useRef<HTMLDivElement>(null);
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

    useImperativeHandle(
      ref,
      () => ({ editor: editor.current, state: state, view: view }),
      [editor, state, view]
    );

    // check type of value
    if (typeof value !== "string") {
      throw new Error(`value must be typeof string but got ${typeof value}`);
    }

    const defaultClassNames =
      typeof theme === "string" ? `cm-theme-${theme}` : "cm-theme";
    return (
      <div
        ref={editor}
        className={`${defaultClassNames} ${className ? ` ${className}` : ""}`}
        {...rest}
      ></div>
    );
  }
);

ReactCodeMirror.displayName = "CodeMirror";

export default ReactCodeMirror;
