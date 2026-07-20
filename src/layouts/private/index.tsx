'use client';

import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import UIView from '@shared/uikit/UIView';

type Props = {
  session?: object;
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
  return (
    <section className="flex flex-col">
      <Header />
      <UIView className="mx-auto w-full px-3 max-w-(--breakpoint-lg) flex">
        <Sidebar menus={[]} />
        <UIView className="flex flex-col flex-1">{children}</UIView>
      </UIView>
    </section>
  );
};

export default PrivateLayout;
