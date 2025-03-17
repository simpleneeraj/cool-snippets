import React from 'react';
import { Tooltip } from '@heroui/react';

type Props = {} & React.ComponentProps<typeof Tooltip>;

const UITooltip = (props: Props) => {
  return <Tooltip {...props} />;
};
export default UITooltip;
