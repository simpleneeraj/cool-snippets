import React from 'react';
import { dark } from '@clerk/themes';
import { ClerkProvider } from '@clerk/nextjs';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </ClerkProvider>
  );
}
