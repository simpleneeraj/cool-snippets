import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  active: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const UISegmentButton = ({ active, children, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={clsx(
        `relative rounded-sm px-2 py-1 text-sm font-medium transition focus-visible:outline-2`,
        'text-[var(--ui-kit-segment-color)]',
        active ? '' : 'hover:text-white/80',
        className
      )}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {active && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-[var(--ui-kit-segment-button-background)] flex items-center justify-center"
          style={{ borderRadius: 6 }}
          transition={{ type: 'spring', duration: 0.2 }}
        >
          {children}
        </motion.span>
      )}
      {children}
    </button>
  );
};
export default UISegmentButton;
