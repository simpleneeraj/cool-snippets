import clsx from 'clsx';
import React from 'react';

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
      className={clsx(
        'p-1 flex flex-col gap-1 flex-1 min-h-[200px] min-w-[280px] rounded-md',
        !transparent ? 'bg-[#1c1c1e]' : ''
      )}
    >
      <div className={clsx('flex flex-col p-2 flex-1')}>{children}</div>
      <div className="p-2 border-t border-neutral-700">
        <p className="text-gray-100">{name}</p>
      </div>
    </div>
  );
};

export default CardComponent;
