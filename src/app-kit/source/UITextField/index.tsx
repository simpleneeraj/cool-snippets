import React from 'react';
import { Input } from '@heroui/react';

type Props = {} & React.ComponentProps<typeof Input>;

const UITextField = (props: Props) => {
  return <Input {...props} />;
};

export default UITextField;
