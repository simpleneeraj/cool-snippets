import clsx from 'clsx';
import React from 'react';

type Ref = React.Ref<HTMLDivElement>;
type Props = {} & React.ComponentPropsWithRef<'div'>;

const UIView = React.forwardRef((props: Props, ref: Ref) => {
  const { children } = props;
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});
UIView.displayName = 'UIView';
export default UIView;
