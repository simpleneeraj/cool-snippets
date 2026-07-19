import React from 'react';
import Link from 'next/link';
import UIView from '@/app-kit/source/UIView';
import { Button } from '@/app-kit/ui/button';
import { Badge } from '@/app-kit/ui/badge';
import appConfig from '@/constants/site';
import { MdiGithub } from '@/app-kit/icons/social/MdiGithub';
import { UISmallGridPattern } from '@/app-kit/components/UIBackgroundPattern/grid-pattern';

type OpenSourceSectionProps = object;

const pillars = [
  {
    label: 'Free',
    title: 'Everything, unlocked',
    description:
      'Every theme, every effect, every export option. No account, no trial, nothing held back behind a plan.',
  },
  {
    label: 'MIT',
    title: 'Yours to build on',
    description:
      'Read the source, fork it, self-host it, or lift a component for your own project. No strings attached.',
  },
  {
    label: 'Sponsored',
    title: 'Funded by people, not paywalls',
    description:
      'Supported by developers who find it useful — which is exactly what keeps it free for everyone else.',
  },
];

const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({}) => {
  return (
    <UIView className="mx-auto w-full max-w-(--breakpoint-lg) pb-10 md:pb-20">
      <UIView className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map(({ label, title, description }) => (
          <UIView
            key={title}
            className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/20"
          >
            {/* Subtle grid that lifts on hover — same treatment as the feature cards.
                width/height are required: UISmallGridPattern has no defaults. */}
            <UISmallGridPattern
              x={-12}
              y={4}
              width={20}
              height={20}
              className="pointer-events-none absolute inset-0 h-full w-full fill-foreground/[0.04] stroke-foreground/[0.06] transition-opacity duration-300 group-hover:fill-foreground/[0.07] group-hover:stroke-foreground/10"
            />

            <UIView className="relative z-10 flex flex-col gap-3">
              <Badge variant="outline" className="w-fit font-mono text-xs">
                {label}
              </Badge>
              <h3 className="text-base font-medium text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </UIView>
          </UIView>
        ))}
      </UIView>

      <UIView className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          size="lg"
          render={
            <Link href={appConfig.links.repo} target="_blank" rel="noreferrer" />
          }
        >
          <MdiGithub />
          Star on GitHub
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={
            <Link
              href={appConfig.links.sponsor}
              target="_blank"
              rel="noreferrer"
            />
          }
        >
          Sponsor the project
        </Button>
        <Button
          size="lg"
          variant="ghost"
          render={
            <Link
              href={appConfig.links.coffee}
              target="_blank"
              rel="noreferrer"
            />
          }
          className="text-muted-foreground"
        >
          Buy me a coffee
        </Button>
      </UIView>
    </UIView>
  );
};

export default OpenSourceSection;
