'use client';

import React from 'react';
import { useTextEditor } from '@features/studio/store/slides/text-editor';
import { EditorContext } from '@tiptap/react';

// --- Tiptap UI ---
import {
  MarkButton,
  ListDropdownMenu,
  TextAlignButton,
  BlockquoteButton,
  ColorTextPopover,
  HeadingDropdownMenu,
  ColorHighlightPopover,
} from '@features/editor-rte';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from '@shared/ui/toolbar';

const TextToolbar: React.FC = () => {
  const { editor } = useTextEditor();

  if (!editor) return null;

  return (
    <EditorContext.Provider value={{ editor }}>
      <Toolbar>
        <ToolbarGroup>
          <HeadingDropdownMenu levels={[1, 2, 3, 4, 5, 6]} />
          <ListDropdownMenu types={['bulletList', 'orderedList']} />
          <BlockquoteButton />
        </ToolbarGroup>

        <ToolbarSeparator />

        <ToolbarGroup>
          <MarkButton type="bold" />
          <MarkButton type="italic" />
          <MarkButton type="underline" />
          <MarkButton type="strike" />
          <ColorTextPopover />
          <ColorHighlightPopover />
        </ToolbarGroup>

        <ToolbarSeparator />

        <ToolbarGroup>
          <TextAlignButton align="left" />
          <TextAlignButton align="center" />
          <TextAlignButton align="right" />
        </ToolbarGroup>
      </Toolbar>
    </EditorContext.Provider>
  );
};

export default TextToolbar;
