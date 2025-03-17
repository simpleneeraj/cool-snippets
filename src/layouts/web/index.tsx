import React from 'react';
import Header from './header';
import Footer from './footer';
import UIView from '@/app-kit/source/UIView';

type WebLayoutProps = React.PropsWithChildren;

const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <UIView className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </UIView>
  );
};

export default WebLayout;
