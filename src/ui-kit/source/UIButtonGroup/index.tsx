import clsx from 'clsx';
import React from 'react';

type Props = {
  transparent?: boolean;
} & React.ComponentPropsWithRef<'div'>;

const UIButtonGroup = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const { children, transparent, ...rest } = props;
    return (
      <div
        ref={ref}
        {...rest}
        className={clsx(
          `flex gap-1 transition-all`,
          `rounded-lg`,
          `max-w-fit`,
          `text-[var(--ui-kit-button-color)]`,
          transparent
            ? 'bg-transparent py-1'
            : 'bg-[var(--ui-kit-button-background)] p-1',
          props.className
        )}
      >
        {children}
      </div>
    );
  }
);
UIButtonGroup.displayName = 'UIButtonGroup';
export default UIButtonGroup;
