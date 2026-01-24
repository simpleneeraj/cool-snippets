import React from 'react';
import { cn } from '@/lib/utils';

export enum BackgroundPattern {
  DOT = 'dot',
  GRID = 'grid',
  MASK = 'mask',
}

type UIBackgroundPatternProps = {
  pattern?: BackgroundPattern;
} & React.ComponentPropsWithoutRef<'div'>;

const UIBackgroundPattern: React.FC<UIBackgroundPatternProps> = ({
  pattern = BackgroundPattern.GRID,
  ...rest
}) => {
  const styles = React.useMemo(() => {
    switch (pattern) {
      case BackgroundPattern.GRID:
        return 'absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] bg-white dark:bg-black';
      case BackgroundPattern.DOT:
        return 'absolute inset-0 h-full w-full bg-[radial-gradient(#27272A_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-black';
      case BackgroundPattern.MASK:
        return 'absolute inset-0 h-full w-full bg-[radial-gradient(#27272A_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-white dark:bg-black';
      default:
        return '';
    }
  }, [pattern]);

  return <div className={cn(styles, rest?.className)} {...rest}></div>;
};

export default UIBackgroundPattern;
