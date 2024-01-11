import React from 'react';
import AppHeader from './header';
import UIView from '@/ui-kit/source/UIView';

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <UIView className={`flex flex-col h-screen relative`}>
      <AppHeader />
      <div className="flex flex-col z-50">{children}</div>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[40%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
      >
        <img
          src="https://nextui.org/gradients/docs-right.png"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs right background"
          data-loaded="true"
        />
      </div>
    </UIView>
  );
};
export default AppLayout;
