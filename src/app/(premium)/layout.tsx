import React from 'react';
import WebLayout from '@/layouts/web';

type WebLayoutProps = React.PropsWithChildren;

const WebRootLayout: React.FC<WebLayoutProps> = ({ children }) => (
  <WebLayout>{children}</WebLayout>
);

export default WebRootLayout;
