import { create } from 'zustand';

type State = {
  open: boolean;
};

type Action = {
  updateSidebar: (value: State['open']) => void;
};

const useSidebarStore = create<State & Action>((set) => ({
  open: false,
  updateSidebar: (open) => set(() => ({ open })),
}));
export default useSidebarStore;
