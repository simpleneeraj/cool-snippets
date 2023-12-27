import clsx from 'clsx';
import React from 'react';

type Props = {
  direction?: 'vertical' | 'horizontal';
} & React.ComponentPropsWithRef<'hr'>;

const UILine = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLHRElement>) => {
    const { direction = 'horizontal' } = props;

    return (
      <div className="flex items-center flex-1">
        <hr
          ref={ref}
          {...props}
          className={clsx(
            'transition-all h-3/4',
            'border-solid',
            'border-gray-600',
            direction === 'vertical' && 'border-l',
            direction === 'horizontal' && 'border-t',
            props.className
          )}
        />
      </div>
    );
  }
);

UILine.displayName = 'UILine';

export default UILine;
