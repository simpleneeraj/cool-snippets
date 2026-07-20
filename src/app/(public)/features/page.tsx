import React from 'react';
import type { Metadata } from 'next';
import FeaturesClient from './client';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Everything Cool Snippets can do: 40+ syntax themes, 25 coding fonts, window chrome, glow and glassmorphism effects, custom backgrounds, a multi-element canvas, and export to PNG, JPEG, WEBP or SVG.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features - Cool Snippets',
    description:
      'Themes, fonts, effects, backgrounds and multi-format export — everything Cool Snippets can do.',
    url: '/features',
  },
};

type FeaturesPageProps = object;

const FeaturesPage: React.FC<FeaturesPageProps> = ({}) => {
  return <FeaturesClient />;
};

export default FeaturesPage;
