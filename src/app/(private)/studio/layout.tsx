import React from 'react';
import '@/styles/code-fonts.css';
import '@xyflow/react/dist/style.css';
import NextFlowProvider from '@/providers/flow';
import AppLayout from '@/components/app/layout';

const StudioLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <NextFlowProvider>
      <AppLayout>{children}</AppLayout>
    </NextFlowProvider>
  );
};
export default StudioLayout;
