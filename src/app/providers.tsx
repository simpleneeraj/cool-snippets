'use client';

import React from 'react';
import store from '@/store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const Providers = ({
  children,
  themeProps,
}: React.PropsWithChildren<{
  themeProps?: ThemeProviderProps;
}>) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
};
export default Providers;
