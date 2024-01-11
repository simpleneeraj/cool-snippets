import React from 'react';
import { twMerge } from 'tailwind-merge';

const CardComponent = ({
  children,
  name,
  transparent = false,
}: React.PropsWithChildren<{
  name: string;
  transparent?: boolean;
}>) => {
  return (
    <div
      className={twMerge(
        'p-1 flex flex-col gap-1 flex-1 min-h-[200px] min-w-[280px] rounded-md',
        !transparent ? 'bg-[#1c1c1e]' : ''
      )}
    >
      <div className={twMerge('flex flex-col p-2 flex-1')}>{children}</div>
      <div className="p-2 border-t border-neutral-700">
        <p className="text-gray-100">{name}</p>
      </div>
    </div>
  );
};

export default CardComponent;
