import '@/styles/globals.scss';
import '@/styles/tailwind.scss';
import '@/ui-kit/styles/theme.scss';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
