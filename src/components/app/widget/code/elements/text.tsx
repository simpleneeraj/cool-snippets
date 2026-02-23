'use client';

import React from 'react';
import { useEditor, EditorContent, EditorContext } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import { useTextEditor } from '@/store/slides/text-editor';

type Props = {
  content?: string;
  onChange?: (html: string) => void;
};

const TextElement: React.FC<Props> = ({ content, onChange }) => {
  const { setEditor } = useTextEditor();

  const editor = useEditor({
    immediatelyRender: false,
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

  React.useEffect(() => {
    setEditor(editor);
    return () => setEditor(null);
  }, [editor, setEditor]);

  if (!editor) return null;

  return (
    <EditorContext.Provider value={{ editor }}>
      <EditorContent editor={editor} className="w-full h-full" />
    </EditorContext.Provider>
  );
};

export default TextElement;
