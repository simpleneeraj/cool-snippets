import React from 'react';
import WebLayout from '@/layouts/web';
import UIFireflies from '@/app-kit/components/UIFireflies';

type WebLayoutProps = React.PropsWithChildren;

const WebRootLayout: React.FC<WebLayoutProps> = ({ children }) => (
  <WebLayout>
    {children}
    <UIFireflies />
  </WebLayout>
);

export default WebRootLayout;
