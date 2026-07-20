'use client';

import React from 'react';
import { useEditor, EditorContent, EditorContext } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import { useTextEditor } from '@features/studio/store/slides/text-editor';

type Props = {
  content?: string;
  /** True only for the element currently in edit mode. */
  editing?: boolean;
  onChange?: (html: string) => void;
};

const TextElement: React.FC<Props> = ({ content, editing, onChange }) => {
  const { setEditor } = useTextEditor();

  const editor = useEditor({
    immediatelyRender: false,
    // Non-editing text elements render read-only; edit mode flips this on.
    editable: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
    ],
    content: content || '<p>Type something…</p>',
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor outline-none w-full h-full',
        style: 'white-space: pre-wrap; word-break: break-word;',
      },
    },
  });

  // Only the element being edited is editable and claims the shared toolbar
  // slot. Registering every text editor on mount let the last-mounted one win,
  // so the formatting toolbar could target the wrong element on a multi-text
  // slide — here the slot always points at what the user is actually editing.
  React.useEffect(() => {
    if (!editor) return;
    editor.setEditable(Boolean(editing));
    if (!editing) return;
    setEditor(editor);
    editor.commands.focus('end');
    return () => setEditor(null);
  }, [editor, editing, setEditor]);

  if (!editor) return null;

  return (
    <EditorContext.Provider value={{ editor }}>
      <EditorContent editor={editor} className="w-full h-full" />
    </EditorContext.Provider>
  );
};

export default TextElement;
