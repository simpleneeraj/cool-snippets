import clsx from 'clsx';
import React from 'react';

type Props = {
  direction?: 'vertical' | 'horizontal';
} & React.ComponentPropsWithRef<'hr'>;

const UILine = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLHRElement>) => {
    const { direction = 'horizontal' } = props;

    return (
      <hr
        ref={ref}
        className={clsx(
          'transition-all',
          'border-solid',
          'border-[var(--ui-kit-button-border-color)]',
          direction === 'vertical' && 'border-l',
          direction === 'horizontal' && 'border-t',
          props.className
        )}
        {...props}
      />
    );
  }
);

UILine.displayName = 'UILine';

export default UILine;
