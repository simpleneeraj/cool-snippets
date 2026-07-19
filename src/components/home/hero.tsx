import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Button } from '@/app-kit/ui/button';
import { cn } from '@/lib/utils';
import UISpotlight from '@/app-kit/components/UISpotlight';
import { AnimatedTooltip } from '@/app-kit/components/UITooltip';
import UIGridPattern from '@/app-kit/components/UIBackgroundPattern/grid-pattern';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';
import Link from 'next/link';
import { AltArrowRightLineDuotoneIcon, ArrowRightLineDuotoneIcon } from '@solar-icons/react';

type HeroSectionProps = object;

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <UIView className="flex items-center justify-center w-full flex-col px-4">
      {/* min-h, not h: the sticky header already consumes 4rem of the viewport,
          so a full-viewport hero would always overflow by exactly that much. */}
      <UIView className="relative flex min-h-[calc(100svh-4rem)] w-full flex-col overflow-hidden bg-background">
        <UIView className="container mx-auto flex flex-1 flex-col items-center justify-center px-8">
          <UIView className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6">
            <UIGridPattern
              squares={[
                [4, 4],
                [5, 1],
                [8, 2],
                [5, 3],
                [5, 5],
                [10, 10],
                [12, 15],
                [15, 10],
                [10, 15],
                [15, 10],
                [10, 15],
                [15, 10],
              ]}
              className={cn(
                'mask-[radial-gradient(500px_circle_at_center,white,transparent)]',
                'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
              )}
            />
            <UISpotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#9089fc"
            />
            <Link href="/studio">
              <UIAnimatedButton
                duration={2}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                Make Every Post a Masterpiece with Cool Snippets
                <AltArrowRightLineDuotoneIcon className="flex-none outline-hidden h-5 w-5" />
              </UIAnimatedButton>
            </Link>
            <UIView className="text-center py-6 md:py-10">
              <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-foreground to-foreground dark:from-muted-foreground dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Craft, Customize, <br /> and Share Code.
              </h2>
              <p className="max-w-xl mx-auto text-sm md:text-lg text-foreground dark:text-muted-foreground text-center">
                Empowering developers to effortlessly create, tailor, and share
                code snippets. Collaborate, innovate, and code smarter with
                Cool Snippets.
              </p>
            </UIView>
            <UIView className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                render={<Link href="/studio" />}
                size="lg"
                className="rounded-full px-6"
              >
                Start Creating
              </Button>
              <Button
                render={<Link href="/features" />}
                variant="outline"
                size="lg"
                className="rounded-full px-4 backdrop-blur-sm"
              >
                See our features
                <span className="pointer-events-none flex h-5.5 w-5.5 items-center justify-center rounded-full bg-muted">
                  <ArrowRightLineDuotoneIcon
                    className="text-muted-foreground [&>path]:stroke-[1.5]"
                    width={16}
                  />
                </span>
              </Button>
            </UIView>

            <UIView className="flex flex-row items-center justify-center mt-20 w-full">
              <AnimatedTooltip items={people} />
            </UIView>
          </UIView>
        </UIView>
      </UIView>
    </UIView>
  );
};

export default HeroSection;

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
];
