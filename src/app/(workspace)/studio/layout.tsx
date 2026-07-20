import React from 'react';
import AppLayout from '@features/studio/layout';

const StudioLayout = ({ children }: React.PropsWithChildren) => {
  return <AppLayout>{children}</AppLayout>;
};
export default StudioLayout;
