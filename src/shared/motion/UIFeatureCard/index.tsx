'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, useEffect, useState } from 'react';
import { cn } from '@shared/lib/utils';
import { UISmallGridPattern } from '../UIBackgroundPattern/grid-pattern';

type FeaturesCard = {
  index: number;
  title: string;
  description: React.ReactNode | React.ReactNode[];
  icon: React.ComponentType<any>;
};

const FeatureCard: React.FC<FeaturesCard> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon className="flex-none outline-hidden h-8 w-8" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-linear-to-r group-hover/feature:from-lavender-frost group-hover/feature:to-periwinkle-glow transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <Grid size={20} />
      {typeof description === 'string' ? (
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      ) : (
        description
      )}
    </div>
  );
};

export default FeatureCard;

export const Grid = ({ pattern, size }: any) => {
  // Random squares are generated only after mount so the server-rendered HTML
  // matches the first client render (avoids a hydration mismatch).
  const [p, setP] = useState<[number, number][]>(() => pattern ?? []);

  useEffect(() => {
    if (pattern) return;
    setP(
      Array.from(
        { length: 5 },
        () =>
          [
            Math.floor(Math.random() * 4) + 7,
            Math.floor(Math.random() * 6) + 1,
          ] as [number, number],
      ),
    );
  }, [pattern]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full mask-[linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-linear-to-r  mask-[radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <UISmallGridPattern
          y={4}
          x={-12}
          squares={p}
          width={size ?? 20}
          height={size ?? 20}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};
