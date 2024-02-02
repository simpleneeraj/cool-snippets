import React from 'react';
import { Progress } from '@nextui-org/react';

type Props = {} & React.ComponentProps<typeof Progress>;

const UIProgress = React.forwardRef((props: Props, ref: Props['ref']) => {
  return <Progress {...props} ref={ref} />;
});

UIProgress.displayName = 'UIProgress';
export default UIProgress;
