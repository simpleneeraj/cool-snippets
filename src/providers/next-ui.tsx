'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function NextAppProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}

export default NextAppProvider;
