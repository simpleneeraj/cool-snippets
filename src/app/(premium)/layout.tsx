import React from 'react';
import PrivateLayout from '@/layouts/private';

type PremiumLayoutProps = React.PropsWithChildren;

const PremiumRootLayout: React.FC<PremiumLayoutProps> = ({ children }) => {
  return <PrivateLayout>{children}</PrivateLayout>;
};

export default PremiumRootLayout;
