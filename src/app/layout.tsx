import '@/styles/next-ui.css';
import '@/styles/mask-wallpaper.css';

import fonts from './font';
import { cn } from '@heroui/react';
import type { Metadata } from 'next';
import AuthProvider from '@/providers/clerk';
import NextAppProvider from '@/providers/next-ui';

export const metadata: Metadata = {
  title: {
    template: '%s - Crystal Code',
    default: 'Your Go-To Platform for Quick and Shareable Code Snippets',
  },
  description:
    'CrystalCode is the ultimate solution for effortlessly generating and sharing code snippets. Create, customize, and share your code snippets across various programming languages with ease. Boost your productivity and collaborate seamlessly on social media. Try CrystalCode today!',
  generator: 'Code snippet generator',
  applicationName: 'Crystal Code',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Code snippet generator',
    'Shareable code snippets',
    'Quick code sharing',
    'Programming productivity tool',
    'Collaborative coding',
    'Code customization',
    'Social media code sharing',
  ],
  authors: [
    { name: 'SimpleNeeraj', url: 'https://www.github.com/simpleneeraj' },
  ],
  creator: 'SimpleNeeraj',
  publisher: 'Simple Neeraj',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO - Implement light and dark mode both
  return (
    <AuthProvider>
      <html lang="en" className={cn('dark', fonts)}>
        <body>
          <NextAppProvider>{children}</NextAppProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
