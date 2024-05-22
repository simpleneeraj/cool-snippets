import React from 'react';

export type ReactNode = React.ReactNode | React.ReactNode[];

export type AITypeWriterProps = {
  delay?: number;
  onFinish?: () => void;
} & React.PropsWithChildren;
