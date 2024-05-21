import '@/styles/next-ui.scss';
import { inter } from './font';
import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={inter.style}
        className={twMerge(inter.className, inter.variable)}
      >
        <NextAppProvider>
          <main className="dark text-foreground bg-background">{children}</main>
        </NextAppProvider>
      </body>
    </html>
  );
}
