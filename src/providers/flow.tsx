'use client';

import * as React from 'react';
import { ReactFlowProvider } from '@xyflow/react';

function NextFlowProvider({ children }: React.PropsWithChildren) {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
}

export default NextFlowProvider;
