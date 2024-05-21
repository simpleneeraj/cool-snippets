import { create } from 'zustand';
import { InitialValues } from '@/typings/editor';

type State = {
  slide: string;
};

type Action = {
  updateSlide: (value: string) => void;
};

export const useActiveSlide = create<State & Action>((set) => ({
  slide: InitialValues.SLIDE_ID,
  updateSlide: (value: string) =>
    set(() => ({
      slide: value,
    })),
}));
