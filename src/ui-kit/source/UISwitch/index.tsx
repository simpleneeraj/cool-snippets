import React from 'react';
import { Switch } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Switch>;

const UISwitch = React.forwardRef((props: Props, ref: Props['ref']) => {
  return <Switch {...props} ref={ref} />;
});

UISwitch.displayName = 'UISwitch';
export default UISwitch;
