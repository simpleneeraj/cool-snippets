import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Button>;

const UIIconButton = (props: Props) => {
  return (
    <Button
      radius="sm"
      variant="flat"
      {...props}
      className={twMerge('min-w-unit-5', props.className)}
    />
  );
};

export default UIIconButton;
