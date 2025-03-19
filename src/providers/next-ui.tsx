'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn, HeroUIProvider, ToastProvider } from '@heroui/react';

function NextAppProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider placement="bottom-center" toastOffset={40} />
      <main className={cn('text-foreground bg-background')}>{children}</main>
    </HeroUIProvider>
  );
}

export default NextAppProvider;
