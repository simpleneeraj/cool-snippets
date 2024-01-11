import React from 'react';
import { Button } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Button>;

const UIButton = (props: Props) => {
  return <Button {...props} />;
};

export default UIButton;
