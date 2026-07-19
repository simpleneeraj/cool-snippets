'use client';

import React from 'react';
import { useTextEditor } from '@/store/slides/text-editor';
import { EditorContext } from '@tiptap/react';

// --- Tiptap UI ---
import { HeadingDropdownMenu } from '@/components/tiptap-ui/heading-dropdown-menu';
import { MarkButton } from '@/components/tiptap-ui/mark-button';
import { TextAlignButton } from '@/components/tiptap-ui/text-align-button';
import { ListDropdownMenu } from '@/components/tiptap-ui/list-dropdown-menu';
import { BlockquoteButton } from '@/components/tiptap-ui/blockquote-button';
import { ColorHighlightPopover } from '@/components/tiptap-ui/color-highlight-popover';
import { ColorTextPopover } from '@/components/tiptap-ui/color-text-popover';
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
