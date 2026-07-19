import { create } from 'zustand';
import type { Editor } from '@tiptap/react';

type State = {
  editor: Editor | null;
};

type Action = {
  setEditor: (editor: Editor | null) => void;
};

export const useTextEditor = create<State & Action>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
