import React from 'react';
import type { Metadata } from 'next';
import AboutClient from './page.client';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why Cool Snippets exists: a free, open-source, MIT-licensed alternative to ray.so and Carbon that never uploads your code — funded by sponsors, not paywalls.',
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: 'About - Cool Snippets',
    description:
      'A free, open-source code-to-image tool that never uploads your code.',
    url: '/about-us',
  },
};

type AboutPageProps = object;

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return <AboutClient />;
};

export default AboutPage;
