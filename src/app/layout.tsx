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
      <body className={``}>
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'dark',
          }}
        >
          <main className="dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
