'use client';
import React from 'react';
import AppHeader from './header';
import UIView from '@/app-kit/source/UIView';

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <UIView className={`grid h-screen`}>
      <UIView className="app-container grid grid-rows-[auto_1fr] overflow-hidden max-h-screen">
        <AppHeader />
        <UIView className="flex z-50 overflow-hidden">{children}</UIView>
      </UIView>
    </UIView>
  );
};
export default AppLayout;
