'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn, NextUIProvider } from '@nextui-org/react';

function NextAppProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <main className={cn('text-foreground bg-background')}>{children}</main>
    </NextUIProvider>
  );
}

export default NextAppProvider;
