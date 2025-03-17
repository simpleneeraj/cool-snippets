import React from 'react';

type Props = {} & React.ComponentPropsWithRef<'form'>;

const UIForm = React.forwardRef((props: Props, ref: Props['ref']) => {
  return <form {...props} ref={ref} />;
});

UIForm.displayName = 'UIForm';
export default UIForm;
