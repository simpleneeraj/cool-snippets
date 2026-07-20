import React from 'react';
import { Button } from '@shared/ui/button';

type Props = {} & React.ComponentProps<typeof Button>;

const UIIconButton = (props: Props) => {
  return <Button variant="outline" {...props} />;
};

export default UIIconButton;
