import '@/styles/globals.css';
import '@/styles/mask-wallpaper.css';

import fonts from '@/app-kit/fonts';
import type { Metadata } from 'next';
import NextAppProvider from '@/providers/next-ui';
import { ThemeProvider } from '@/providers/theme-provider';

export const metadata: Metadata = {
  title: {
    template: '%s - Cool Snippets',
    default: 'Your Go-To Platform for Quick and Shareable Code Snippets',
  },
  description:
    'Cool Snippets turns code into beautiful, shareable images. A free, open-source ray.so and Carbon alternative with 40+ syntax themes, glow and glassmorphism effects, custom backgrounds, and one-click export. No account, no paywall.',
  generator: 'Code snippet generator',
  applicationName: 'Cool Snippets',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Code snippet generator',
    'Shareable code snippets',
    'Quick code sharing',
    'Programming productivity tool',
    'Collaborative coding',
    'Code customization',
    'Social media code sharing',
    'ray.so alternative',
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
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body className="relative">
        <ThemeProvider>
          <NextAppProvider>{children}</NextAppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
