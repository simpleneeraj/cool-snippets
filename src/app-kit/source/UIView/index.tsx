import React from 'react';

type Ref = React.Ref<HTMLDivElement>;
type Props = {} & React.ComponentPropsWithRef<'div'>;

const UIView = React.forwardRef((props: Props, ref: Ref) => {
  const { children } = props;
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
});
UIView.displayName = 'UIView';
export default UIView;
