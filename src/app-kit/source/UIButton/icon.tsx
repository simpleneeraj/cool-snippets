import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@heroui/react';

type Props = {} & React.ComponentProps<typeof Button>;

const UIIconButton = React.forwardRef((props: Props, ref: Props['ref']) => {
  return (
    <Button
      radius="sm"
      variant="flat"
      {...props}
      ref={ref}
      className={twMerge('min-w-unit-5', props.className)}
    />
  );
});
UIIconButton.displayName = 'UIIconButton';
export default UIIconButton;
