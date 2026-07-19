import { EditorOptionsType } from '@features/studio/model/editor';

/**
 * These defaults intentionally mirror the CodeMirror setup that used to be
 * hardcoded in the code element, so an element saved without an `editor` block
 * renders exactly as it did before the toggles became real state.
 */
export const DEFAULT_EDITOR_OPTIONS: Required<EditorOptionsType> = {
  lineNumbers: false,
  wrapLongLines: true,
  highlightActiveLine: false,
  matchBrackets: true,
  syntaxHighlighting: true,
  indentationGuides: false,
  monospaceFont: true,
  padding: 16,
};

export const resolveEditorOptions = (
  options?: EditorOptionsType,
): Required<EditorOptionsType> => ({
  ...DEFAULT_EDITOR_OPTIONS,
  ...options,
});
