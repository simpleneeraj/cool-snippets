'use client';

import * as React from 'react';
import { ToastProvider } from '@shared/ui/toast';

function NextAppProvider({ children }: React.PropsWithChildren) {
  return <ToastProvider position="bottom-center">{children}</ToastProvider>;
}

export default NextAppProvider;
