import React from 'react';
import Header from '../header';

interface Props {
  children: React.ReactNode;
  session?: null;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1">
      <Header />
      {children}
    </div>
  );
};
