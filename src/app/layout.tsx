import '@styles/globals.css';
import '@styles/mask-wallpaper.css';

import fonts from '@shared/fonts';
import type { Metadata, Viewport } from 'next';
import NextAppProvider from '@providers/next-ui';
import { ThemeProvider } from '@providers/theme-provider';
import appConfig from '@shared/config/site';
import { getSiteUrl } from '@shared/config/url';

const siteUrl = getSiteUrl();
const defaultTitle =
  'Your Go-To Platform for Quick and Shareable Code Snippets';

export const metadata: Metadata = {
  // Absolute base for every relative OG/canonical URL Next emits.
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s - ${appConfig.name}`,
    default: defaultTitle,
  },
  description: appConfig.description,
  applicationName: appConfig.name,
  generator: 'Code snippet generator',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Code snippet generator',
    'Shareable code snippets',
    'Quick code sharing',
    'Programming productivity tool',
    'Code to image',
    'Code customization',
    'Social media code sharing',
    'ray.so alternative',
    'Carbon alternative',
  ],
  authors: [
    { name: 'SimpleNeeraj', url: 'https://www.github.com/simpleneeraj' },
  ],
  creator: 'SimpleNeeraj',
  publisher: 'Simple Neeraj',
  category: 'technology',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: appConfig.name,
    title: defaultTitle,
    description: appConfig.description,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: appConfig.description,
    creator: '@simpleneeraj',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
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
