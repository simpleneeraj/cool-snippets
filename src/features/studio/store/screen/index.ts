import { create } from 'zustand';
import { BACKGROUND_SCREEN, ASIDE_SCREEN } from '@features/studio/model/enums';

// Define the type for screen state combining ASIDE_SCREEN and BACKGROUND_SCREEN
export type ScreenTypes = ASIDE_SCREEN | BACKGROUND_SCREEN;

// Define the state structure
type State = {
  screen: {
    aside: ASIDE_SCREEN;
    background: BACKGROUND_SCREEN;
  };
};

// Define the action type for changing the screen
type Action = {
  onChangeScreen: (key: keyof State['screen'], value: ScreenTypes) => void;
};

// Create the Zustand store
export const useScreen = create<State & Action>((set) => ({
  screen: {
    aside: ASIDE_SCREEN.EMPTY_SCREEN,
    background: BACKGROUND_SCREEN.IMAGES,
  },
  onChangeScreen: (key, value) =>
    set((state) => ({
      screen: {
        ...state.screen,
        [key]: value,
      },
    })),
}));
