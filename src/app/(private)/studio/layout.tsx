import React from 'react';
import '@/styles/code-fonts.css';
import '@xyflow/react/dist/style.css';
import AppLayout from '@/components/app/layout';
import NextFlowProvider from '@/providers/flow';

const StudioLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <NextFlowProvider>
      <AppLayout>{children}</AppLayout>
    </NextFlowProvider>
  );
};
export default StudioLayout;
