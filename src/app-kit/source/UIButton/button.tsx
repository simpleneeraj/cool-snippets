import React from 'react';
import { Button } from '@heroui/react';

type Props = {} & React.ComponentProps<typeof Button>;

const UIButton = React.forwardRef((props: Props, ref: Props['ref']) => {
  return <Button {...props} ref={ref} />;
});

UIButton.displayName = 'UIButton';
export default UIButton;
