import React from 'react';
import { Divider } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Divider>;
const UIDivider = (props: Props) => {
  return <Divider {...props} />;
};

export default UIDivider;
