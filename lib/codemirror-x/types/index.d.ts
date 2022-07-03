import React from "react"
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorSelection, SelectionRange, Line } from '@codemirror/state';
import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";

interface ReactCodeMirrorProps
    extends Omit<EditorStateConfig, "doc" | "extensions">,
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "placeholder"> {
    /** value of the auto created model in the editor. */
    value?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    /** focus on the editor. */
    autoFocus?: boolean;
    /** Enables a placeholder—a piece of example content to show when the editor is empty. */
    placeholder?: string | HTMLElement;
    /**
     * `light` / `dark` / `Extension` Defaults to `light`.
     * @default light
     */
    theme?: "light" | "dark" | Extension;
    /**
     * Whether to optional basicSetup by default
     * @default true
     */
    basicSetup?: boolean | BasicSetupOptions;
    /**
     * This disables editing of the editor content by the user.
     * @default true
     */
    editable?: boolean;
    /**
     * This disables editing of the editor content by the user.
     * @default false
     */
    readOnly?: boolean;
    /**
     * Whether to optional basicSetup by default
     * @default true
     */
    indentWithTab?: boolean;
    /** Fired whenever a change occurs to the document. */
    onChange?(value: string, viewUpdate: ViewUpdate): void;
    /** Some data on the statistics editor. */
    onStatistics?(data: Statistics): void;
    /** Fired whenever any state change occurs within the editor, including non-document changes like lint results. */
    onUpdate?(viewUpdate: ViewUpdate): void;
    /**
     * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
     * They can either be built-in extension-providing objects,
     * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
     * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
     */
    extensions?: Extension[];
    /**
     * If the view is going to be mounted in a shadow root or document other than the one held by the global variable document (the default), you should pass it here.
     * Originally from the [config of EditorView](https://codemirror.net/6/docs/ref/#view.EditorView.constructor%5Econfig.root)
     */
    root?: ShadowRoot | Document;
}

interface ReactCodeMirrorRef {
    editor?: HTMLDivElement | null;
    state?: EditorState;
    view?: EditorView;
}


interface BasicSetupOptions {
    lineNumbers?: boolean;
    highlightActiveLineGutter?: boolean;
    highlightSpecialChars?: boolean;
    history?: boolean;
    foldGutter?: boolean;
    drawSelection?: boolean;
    dropCursor?: boolean;
    allowMultipleSelections?: boolean;
    indentOnInput?: boolean;
    syntaxHighlighting?: boolean;
    bracketMatching?: boolean;
    closeBrackets?: boolean;
    autocompletion?: boolean;
    rectangularSelection?: boolean;
    crosshairCursor?: boolean;
    highlightActiveLine?: boolean;
    highlightSelectionMatches?: boolean;
    closeBracketsKeymap?: boolean;
    defaultKeymap?: boolean;
    searchKeymap?: boolean;
    historyKeymap?: boolean;
    foldKeymap?: boolean;
    completionKeymap?: boolean;
    lintKeymap?: boolean;
}

interface Statistics {
    /** total length of the document */
    length: number;
    /** Get the number of lines in the editor. */
    lineCount: number;
    /** Get the currently line description around the given position. */
    line: Line;
    /** Get the proper [line-break](https://codemirror.net/docs/ref/#state.EditorState^lineSeparator) string for this state. */
    lineBreak: string;
    /** Returns true when the editor is [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only. */
    readOnly: boolean;
    /** The size (in columns) of a tab in the document, determined by the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet. */
    tabSize: number;
    /** Cursor Position */
    selection: EditorSelection;
    /** Make sure the selection only has one range. */
    selectionAsSingle: SelectionRange;
    /** Retrieves a list of all current selections. */
    ranges: readonly SelectionRange[];
    /** Get the currently selected code. */
    selectionCode: string;
    /**
     * The length of the given array should be the same as the number of active selections.
     * Replaces the content of the selections with the strings in the array.
     */
    selections: string[];
    /** Return true if any text is selected. */
    selectedText: boolean;
}