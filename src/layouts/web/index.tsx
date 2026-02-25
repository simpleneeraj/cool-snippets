import React from 'react';
import Header from './header';
import Footer from './footer';

type WebLayoutProps = React.PropsWithChildren;

const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-clip">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default WebLayout;
