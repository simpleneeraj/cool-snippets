import React from 'react';
import AppHeader from './header';
import UIView from '@/ui-kit/source/UIView';

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <UIView className={`app-container flex flex-col h-screen`}>
      <AppHeader />
      {children}
    </UIView>
  );
};
export default AppLayout;
