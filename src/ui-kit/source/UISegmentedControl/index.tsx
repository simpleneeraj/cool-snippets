import clsx from 'clsx';
import React from 'react';

type Props = {} & React.ComponentPropsWithoutRef<'div'>;

function UISegmentedControl({ children }: Props) {
  return (
    <div
      className={clsx(
        'flex space-x-1 p-1 rounded-lg',
        'bg-[var(--ui-kit-segment-background)]'
      )}
    >
      {children}
    </div>
  );
}

export default UISegmentedControl;
