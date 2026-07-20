import React from 'react';
import type { Metadata } from 'next';
import PreviewSnippetClient from './client';

export const metadata: Metadata = {
  title: 'Preview',
  robots: { index: false, follow: false },
};

type PreviewSnippetProps = object;

const PreviewSnippet: React.FC<PreviewSnippetProps> = ({}) => {
  return <PreviewSnippetClient />;
};

export default PreviewSnippet;
