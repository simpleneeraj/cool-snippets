import { create } from 'zustand';
import createSegmentSlice, { SegmentTabSlice } from './slices/tab';
import createScreenSlice, { ScreenSlice } from './slices/screen';

/**
 * Types
 */

type Combined = SegmentTabSlice & ScreenSlice;

const useStore = create<Combined>()((...rest) => ({
  ...createScreenSlice(...rest),
  ...createSegmentSlice(...rest),
  // ...createEditorSlice(...rest),
}));

export default useStore;
