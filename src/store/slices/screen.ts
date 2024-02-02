import { StateCreator } from 'zustand';
import { BACKGROUND_SCREEN, SECONDRY_ASIDE_SCREEN } from '@/typings/enums';

type State = {
  aspectRatio: SECONDRY_ASIDE_SCREEN;
  languages: SECONDRY_ASIDE_SCREEN;
  background: BACKGROUND_SCREEN;
};

export type ScreenSlice = State & {
  onChangeScreen: (key: keyof State, value: SECONDRY_ASIDE_SCREEN) => void;
};

const createScreenSlice: StateCreator<any, [], [], ScreenSlice> = (set) => ({
  aspectRatio: SECONDRY_ASIDE_SCREEN.EMPTY_SCREEN,
  languages: SECONDRY_ASIDE_SCREEN.EMPTY_SCREEN,
  background: BACKGROUND_SCREEN.IMAGES,
  onChangeScreen: (key, value) => set(() => ({ [key]: value })),
});

export default createScreenSlice;
