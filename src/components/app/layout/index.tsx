'use client';
import React from 'react';
import AppHeader from './header';
import UIView from '@/app-kit/source/UIView';

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <UIView className={`layout-fill`}>
      <AppHeader />
      <UIView className="layout-fill z-50">{children}</UIView>
    </UIView>
  );
};
export default AppLayout;
