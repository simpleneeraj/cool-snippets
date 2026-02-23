import { create } from 'zustand';

type State = {
  element: string | null;
  /** True while Moveable is actively dragging/resizing — prevents deselection */
  interacting: boolean;
};

type Action = {
  updateElement: (value: string | null) => void;
  setInteracting: (value: boolean) => void;
};

export const useActiveElement = create<State & Action>((set) => ({
  element: null,
  interacting: false,
  updateElement: (value: string | null) =>
    set(() => ({
      element: value,
    })),
  setInteracting: (value: boolean) =>
    set(() => ({
      interacting: value,
    })),
}));
