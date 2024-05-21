import { create } from 'zustand';
import { InitialValues } from '@/typings/editor';

type State = {
  element: string;
};

type Action = {
  updateElement: (value: string) => void;
};

export const useActiveElement = create<State & Action>((set) => ({
  element: InitialValues.ELEMENT_ID,
  updateElement: (value: string) =>
    set(() => ({
      element: value,
    })),
}));
