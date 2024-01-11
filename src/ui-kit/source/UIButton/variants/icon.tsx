import React from 'react';
import { Button } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Button>;

const UIIconButton = (props: Props) => {
  return (
    <Button {...props} radius="sm" variant="flat" className="min-w-unit-5" />
  );
};

export default UIIconButton;
