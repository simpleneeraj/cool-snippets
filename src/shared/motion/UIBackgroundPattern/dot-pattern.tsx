import React from 'react';
import { cn } from '@shared/lib/utils';

type DotPatternProps = {};

const DotPattern: React.FC<DotPatternProps> = ({}) => {
  return (
    <>
      <div
        className={cn(
          'absolute inset-0 z-auto',
          'bg-size-[10px_10px]',
          'bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]',
          'dark:bg-[radial-gradient(#404040_1px,transparent_1px)]',
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </>
  );
};

export default DotPattern;
