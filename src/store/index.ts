import { create } from 'zustand';
import createSegmentSlice, { SegmentTabSlice } from './slices/tab';
import createScreenSlice, { ScreenSlice } from './slices/screen';

type Combined = SegmentTabSlice & ScreenSlice;

const useBoundStore = create<Combined>()((...a) => ({
  ...createScreenSlice(...a),
  ...createSegmentSlice(...a),
}));

export default useBoundStore;
