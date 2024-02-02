import React from 'react';
import { Input } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Input>;

const UIInput = React.forwardRef((props: Props, ref: Props['ref']) => {
  return <Input {...props} ref={ref} />;
});

UIInput.displayName = 'UIInput';
export default UIInput;
