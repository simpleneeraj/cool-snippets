import React from 'react';

type Props = {} & React.ComponentPropsWithRef<'p'>;

const UIText = React.forwardRef((props: Props, ref: Props['ref']) => {
  return <p {...props} ref={ref} />;
});

UIText.displayName = 'UIText';
export default UIText;
