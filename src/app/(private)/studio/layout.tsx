import React from 'react';
import '@/styles/code-fonts.css';
import AppLayout from '@/components/app/layout';

const StudioLayout = ({ children }: React.PropsWithChildren) => {
  return <AppLayout>{children}</AppLayout>;
};
export default StudioLayout;
