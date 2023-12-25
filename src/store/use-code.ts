import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// createFishSlice function now takes a typed 'set' argument
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

// createBearSlice function now takes a typed 'set' argument
export const createBearSlice = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

// useCombinedStore now explicitly uses CombinedStore type
export const useCombinedStore = create(
  persist(
    (set) => ({
      ...createFishSlice(set),
      ...createBearSlice(set),
    }),
    {
      name: 'combinedStore',
      partialize: (state) => ({ fishes: state.fishes, bears: state.bears }),
    }
  )
);
