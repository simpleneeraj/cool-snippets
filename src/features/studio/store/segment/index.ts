import { create } from 'zustand';
import { SEGMENT_FEATURE, SEGMENT_SCREEN } from '@features/studio/model/enums';

// Define the state structure
interface SegmentState {
  feature: SEGMENT_FEATURE;
  screen: SEGMENT_SCREEN;
}

type State = {
  segment: SegmentState;
};

// Define the action type for changing the segment
type Action = {
  onChangeSegment: (
    key: keyof SegmentState,
    value: SEGMENT_FEATURE | SEGMENT_SCREEN
  ) => void;
};

// Create the Zustand store
export const useSegment = create<State & Action>((set) => ({
  segment: {
    feature: SEGMENT_FEATURE.TEMPLATES,
    screen: SEGMENT_SCREEN.EDIT,
  },
  onChangeSegment: (key, value) =>
    set((state) => ({
      segment: {
        ...state.segment,
        [key]: value,
      },
    })),
}));
