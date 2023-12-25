import React from 'react';

const CardComponent = ({
  children,
  name,
}: React.PropsWithChildren<{
  name: string;
}>) => {
  return (
    <div className="p-1 flex flex-col gap-1 flex-1 min-h-[200px] min-w-[280px] bg-[var(--ui-kit-app-secondry-background)] rounded-md">
      <div className="flex flex-col p-2 border rounded-md border-neutral-800 flex-1">
        {children}
      </div>
      <div>
        <p className="text-gray-100">{name}</p>
      </div>
    </div>
  );
};

export default CardComponent;
