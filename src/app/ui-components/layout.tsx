import '@/styles/globals.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI Components',
  description: 'iOS in every hand: Unleash the power of design for all.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full antialiased relative">
      <header className="sticky top-0 z-30 h-[72px] bg-neutral-900/50 backdrop-blur backdrop-filter">
        <div className="mx-auto max-w-8xl xl:px-8">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
            <a className="flex items-center gap-1" aria-label="UI home page">
              <img
                width="32"
                height="32"
                alt="ui-components"
                src="/texture/ios-app-icon-grid.svg"
              />
              <h2>UI Components</h2>
            </a>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-8xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mt-10 sm:mt-24 text-2xl font-semibold text-white sm:text-5xl md:max-w-4xl ">
            Fully accessible{' '}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient text-center sm:text-left">
              UIComponents.
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xs md:max-w-3xl ">
            iOS in every hand: Unleash the power of design for all.
          </p>
        </div>
      </div>
      {children}
      <div className="mx-auto max-w-8xl">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <footer className="flex items-center space-x-2 border-t border-gray-800 pt-10">
            <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-gray-400">
              A project by Simple Neeraj
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
