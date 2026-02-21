import React from 'react';
import { Button } from '@/app-kit/ui/button';

type Props = {} & React.ComponentProps<typeof Button>;

const UIIconButton = (props: Props) => {
  return <Button variant="outline" {...props} />;
};

export default UIIconButton;
