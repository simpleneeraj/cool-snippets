/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { cn } from '@nextui-org/react';

export const GridList = React.forwardRef<HTMLDivElement, any>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn(`flex flex-wrap`, className)} {...props}>
      {children}
    </div>
  )
);

GridList.displayName = 'GridList';

export const GridItem = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn(`p-2 w-1/5 flex flex-none items-center`, className)}
    {...props}
  >
    {children}
  </div>
);
