import React from 'react';
import { Divider } from '@heroui/react';

type Props = {} & React.ComponentProps<typeof Divider>;
const UIDivider = (props: Props) => {
  return <Divider {...props} />;
};

export default UIDivider;
