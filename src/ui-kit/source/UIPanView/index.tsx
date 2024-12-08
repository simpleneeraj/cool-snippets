import React from 'react';
import { tv } from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion, MotionProps } from 'motion/react';

const classNames = tv({
  base: 'top-0 absolute w-full h-full bg-default-50 z-50 scroll-content overflow-auto',
});

export enum PanViewPosition {
  LEFT_TO_RIGHT = 'left-right',
  RIGHT_TO_LEFT = 'right-left',
  TOP_TO_BOTTOM = 'top-bottom',
  BOTTOM_TO_TOP = 'bottom-top',
}

type UIPanViewProps = {
  show: boolean;
  position: PanViewPosition;
  className?: string;
} & MotionProps;

const UIPanView: React.FC<UIPanViewProps> = ({
  position,
  show,
  children,
  className,
  ...rest
}) => {
  if (!position) {
    throw new Error(
      'Position prop is required. Please provide a valid position.'
    );
  }

  const animate = React.useMemo(() => {
    switch (position) {
      case PanViewPosition.LEFT_TO_RIGHT:
        return {
          initial: { x: '-100%' },
          animate: { x: show ? 0 : '-100%' },
          exit: { x: '-100%' },
        };
      case PanViewPosition.RIGHT_TO_LEFT:
        return {
          initial: { x: '100%' },
          animate: { x: show ? 0 : '100%' },
          exit: { x: '100%' },
        };
      case PanViewPosition.TOP_TO_BOTTOM:
        return {
          initial: { x: 0, y: '-100%' },
          animate: { x: 0, y: show ? 0 : '-100%' },
          exit: { x: 0, y: '-100%' },
        };
      case PanViewPosition.BOTTOM_TO_TOP:
        return {
          initial: { x: 0, y: '100%' },
          animate: { x: 0, y: show ? 0 : '100%' },
          exit: { x: 0, y: '100%' },
        };
      default:
        return {};
    }
  }, [position, show]);

  const _className = twMerge(classNames(), className);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={_className}
          transition={{ duration: 0.4, damping: 10 }}
          {...animate}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UIPanView;
