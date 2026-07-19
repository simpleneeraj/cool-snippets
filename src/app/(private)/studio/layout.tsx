import React from 'react';
import AppLayout from '@/components/app/layout';

const StudioLayout = ({ children }: React.PropsWithChildren) => {
  return <AppLayout>{children}</AppLayout>;
};
export default StudioLayout;
