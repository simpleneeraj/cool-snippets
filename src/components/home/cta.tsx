import React from 'react';
import Link from 'next/link';
import UIView from '@/app-kit/source/UIView';
import { Button } from '@/app-kit/ui/button';
import { cn } from '@/lib/utils';
import appConfig from '@/constants/site';
import UIGridPattern from '@/app-kit/components/UIBackgroundPattern/grid-pattern';
import { SolarArrowRightLineDuotone } from '@/app-kit/icons/SolarArrowRightLineDuotone';

type CtaSectionProps = object;

const CtaSection: React.FC<CtaSectionProps> = ({}) => {
  return (
    <UIView className="w-full px-4 py-20">
      <UIView className="relative isolate mx-auto flex w-full max-w-(--breakpoint-lg) flex-col items-center overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center">
        <UIGridPattern
          squares={[
            [3, 2],
            [6, 4],
            [9, 1],
            [12, 5],
            [15, 3],
          ]}
          className={cn(
            'mask-[radial-gradient(600px_circle_at_center,white,transparent)]',
            'inset-0 h-full skew-y-12'
          )}
        />
        {/* Brand wash kept as decoration — the buttons themselves stay coss default. */}
        <UIView className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-xl -translate-x-1/2 rounded-full bg-linear-to-r from-lavender-frost to-periwinkle-glow opacity-15 blur-3xl" />

        <UIView className="relative z-20 flex flex-col items-center gap-4">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your next snippet is one click away.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Open the studio, paste your code, pick a theme, export. No sign-up,
            nothing to install, and every feature unlocked.
          </p>

          <UIView className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
            <Button size="xl" render={<Link href="/studio" />}>
              Open the Studio
              <SolarArrowRightLineDuotone />
            </Button>
            <Button
              size="xl"
              variant="ghost"
              render={
                <Link
                  href={appConfig.links.repo}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              className="text-muted-foreground"
            >
              Browse the source
            </Button>
          </UIView>

          <p className="mt-2 text-xs text-muted-foreground">
            Free and open source. No account required.
          </p>
        </UIView>
      </UIView>
    </UIView>
  );
};

export default CtaSection;
