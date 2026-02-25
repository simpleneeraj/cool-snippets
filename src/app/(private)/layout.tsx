import React from 'react';

type PrivateLayoutProps = React.PropsWithChildren;

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => (
  <main className="relative isolate flex h-screen flex-col overflow-clip">
    {children}
  </main>
);

export default PrivateLayout;
