import React from 'react';

type Props = {} & React.ComponentPropsWithRef<'div'>;

const UIView = (props: Props) => <div {...props} />;

export default UIView;
