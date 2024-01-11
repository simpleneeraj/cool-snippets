import React from 'react';
import { Divider } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Divider>;
const UIDivider = (props: Props) => {
  return <Divider {...props} className="bg-primary-100" />;
};

export default UIDivider;
