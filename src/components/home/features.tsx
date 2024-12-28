/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify/react';
import { cn } from '@nextui-org/react';
import { UISmallGridPattern } from '@/ui-kit/components/UIBackgroundPattern/grid-pattern';

type FeaturesSectionProps = object;

type FeaturesCard = {
  index: number;
  title: string;
  description: string;
  icon: string;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

export default FeaturesSection;

const FeatureCard: React.FC<FeaturesCard> = ({
  title,
  description,
  icon,
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
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon className="flex-none outline-none h-8 w-8" icon={icon} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#9089fc] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <Grid size={20} />
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const features = [
  {
    title: 'Designed for Developers',
    description:
      'Built for coders, creators, and problem-solvers who push the limits.',
    icon: 'solar:code-square-line-duotone',
  },
  {
    title: 'Effortless Code Sharing',
    description:
      'Share snippets as easily as copying and pasting, with extra flair.',
    icon: 'solar:share-circle-line-duotone',
  },
  {
    title: 'Multi-Language Support',
    description: 'From Python to JavaScript, CrystalCode has you covered.',
    icon: 'solar:atom-line-duotone',
  },
  {
    title: 'Fun Themes',
    description: 'Pick colors and designs that you like.',
    icon: 'solar:palette-line-duotone',
  },
  {
    title: 'Gaussian Blur',
    description: 'Beautiful blur effects for a sleek and modern look.',
    icon: 'solar:monitor-line-duotone',
  },
  {
    title: 'Colorful Code',
    description: 'Your code looks great with smart highlights.',
    icon: 'solar:ghost-smile-line-duotone',
  },
  {
    title: 'Snippets Management',
    description: 'Organize and keep track of your snippets easily.',
    icon: 'solar:folder-line-duotone',
  },
  {
    title: 'Undo Anytime',
    description: 'Go back and fix changes with version history.',
    icon: 'solar:history-line-duotone',
  },

  {
    title: 'Save in the Cloud',
    description: 'Your code is always safe and easy to access.',
    icon: 'solar:cloud-line-duotone',
  },
  {
    title: 'Community',
    description: 'Join a huge community of passionate coders and creators.',
    icon: 'solar:users-group-rounded-line-duotone',
  },
  {
    title: 'Affordable Plans',
    description: 'CrystalCode offers unmatched value with plans for everyone.',
    icon: 'solar:dollar-minimalistic-line-duotone',
  },
  {
    title: 'Not Just a Tool',
    description: 'Crystal Code is your buddy for coding.',
    icon: 'solar:heart-line-duotone',
  },
];

export const Grid = ({ pattern, size }: any) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
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
