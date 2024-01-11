/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
const PrimaryPreview = dynamic(() => import('./preview/primary'));
const SecondryPreview = dynamic(() => import('./preview/secondry'));

const App = () => {
  return (
    <div className="w-full mx-auto max-w-8xl mt-4 ">
      <div className="flex flex-col gap-2 px-4 sm:px-6 lg:px-8">
        <div className="p-2 flex items-center bg-[rgba(var(--ui-kit-background-primary))] rounded-lg">
          <h2 className="text-white">Secondry</h2>
        </div>
        <SecondryPreview />
      </div>
    </div>
  );
};
export default App;
