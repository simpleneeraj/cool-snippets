import { StateCreator } from 'zustand';
import { BOTTOM_SEGMENT_TABS } from '@/typings/enums';

type State = {
  bottomTab: BOTTOM_SEGMENT_TABS;
};

export type SegmentTabSlice = State & {
  onChangeTab: (key: keyof State, value: BOTTOM_SEGMENT_TABS) => void;
};

const createSegmentSlice: StateCreator<any, [], [], SegmentTabSlice> = (
  set
) => ({
  bottomTab: BOTTOM_SEGMENT_TABS.EDIT,
  onChangeTab: (key, value) =>
    set(() => ({
      [key]: value,
    })),
});

export default createSegmentSlice;
