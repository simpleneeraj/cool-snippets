import React from 'react';
import WebLayout from '@/layouts/web';
import UIView from '@/app-kit/source/UIView';

type WebLayoutProps = React.PropsWithChildren;

const WebRootLayout: React.FC<WebLayoutProps> = ({ children }) => (
  <WebLayout>
    <UIView className="layout-scroll">{children}</UIView>
    {/*<UIFireflies />*/}
  </WebLayout>
);

export default WebRootLayout;
