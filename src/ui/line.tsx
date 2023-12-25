import React from 'react';
import clsx from 'clsx';

type Props = {
  'data-color'?: string;
} & React.ComponentPropsWithoutRef<'hr'>;

const HRLine = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <hr
      className={clsx(
        'h-[2px]',
        'w-full',
        'rounded-10',
        'border-[#3e3e3e]',
        {
          [`border-${props['data-color']}`]: props['data-color'],
          // Add more dynamic classes based on props
        },
        className
      )}
      {...rest}
    />
  );
};

export default HRLine;
