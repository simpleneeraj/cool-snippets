'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function NextAppProvider({ children }: React.PropsWithChildren) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default NextAppProvider;
