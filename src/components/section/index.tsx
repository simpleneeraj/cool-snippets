import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = {
  tagline?: string;
  title: string;
  description: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Section: React.FC<SectionProps> = ({
  tagline,
  title,
  description,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative`,
        className
      )}
      {...rest}
    >
      {tagline && (
        <span className="text-2xl text-teal-500 mb-2 relative flex justify-center items-end font-app-nothing-you-could-do">
          {tagline}
          <svg
            className="absolute fill-teal-500 opacity-40 z-auto"
            xmlns="http://www.w3.org/2000/svg"
            width={88}
            height={4}
            viewBox="0 0 88 4"
            aria-hidden="true"
            preserveAspectRatio="none"
            style={{ color: 'azure' }}
          >
            <path d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999" />
          </svg>
        </span>
      )}
      <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground to-foreground dark:from-foreground dark:via-white dark:to-white text-3xl md:text-4xl md:leading-tight pt-4 relative z-20">
        {title}
      </h2>
      <div className="min-h-96 min-w-96 bg-linear-to-r from-lavender-frost to-periwinkle-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full blur-3xl opacity-10"></div>
      {description && (
        <h2 className="text-sm md:text-base my-4 text-center font-normal text-muted-foreground max-w-3xl mx-auto relative z-20">
          <span>{description}</span>
        </h2>
      )}
    </div>
  );
};

export default Section;
