import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch about Cool Snippets — report a bug, request a feature, or open an issue on GitHub.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact - Cool Snippets',
    description: 'Report a bug, request a feature, or reach out on GitHub.',
    url: '/contact',
  },
};

type ContactPageProps = object;

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  return <ContactClient />;
};

export default ContactPage;
