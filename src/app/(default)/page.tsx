'use client';

import React from 'react';
import Button from '@/ui/button';
import { useCombinedStore } from '@/store/use-code';

const Home = () => {
  const bears = useCombinedStore((state) => state.bears);
  const fishes = useCombinedStore((state) => state.fishes);
  const addBear = useCombinedStore((state) => state.addBear);
  const addFish = useCombinedStore((state) => state.addFish);
  return (
    <div>
      <React.Suspense fallback={null}>
        Bears (${bears}) Fishes (${fishes})
      </React.Suspense>
      <Button onClick={() => addBear()}>Add Bear</Button>
      <Button onClick={() => addFish()}>Add Fish</Button>
    </div>
  );
};
export default Home;
