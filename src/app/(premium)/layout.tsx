import React from 'react';
import PrivateLayout from '@/layouts/private';

type WebLayoutProps = React.PropsWithChildren;

const RootLayout: React.FC<WebLayoutProps> = ({ children }) => (
  <PrivateLayout>{children}</PrivateLayout>
);

export default RootLayout;
