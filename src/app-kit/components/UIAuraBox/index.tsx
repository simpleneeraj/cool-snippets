import { cn } from '@/lib/utils';
import React from 'react';

const UIAuraBox = ({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'section'>) => {
  // bg-linear-to-br from-gray-100 to-white dark:from-neutral-900 dark:to-neutral-950
  return (
    <section
      {...rest}
      className={cn(rest.className, 'relative z-0 w-full rounded-xl p-8')}
    >
      <div
        className="absolute left-[calc(var(--offset)/2*-1)] top-0 z-30 h-(--height) w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] bg-size-[var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
        style={
          {
            '--background': '#ffffff',
            '--color': 'rgba(0, 0, 0, 0.2)',
            '--color-dark': 'rgba(255, 255, 255, 0.2)',
            '--height': '1px',
            '--width': '5px',
            '--fade-stop': '90%',
            '--offset': '200px',
          } as React.CSSProperties
        }
      />

      <div
        className="absolute bottom-0 left-[calc(var(--offset)/2*-1)] z-30 h-(--height) w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] bg-size-[var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)] dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
        style={
          {
            '--background': '#ffffff',
            '--color': 'rgba(0, 0, 0, 0.2)',
            '--color-dark': 'rgba(255, 255, 255, 0.2)',
            '--height': '1px',
            '--width': '5px',
            '--fade-stop': '90%',
            '--offset': '200px',
          } as React.CSSProperties
        }
      />

      <div
        className="absolute left-0 top-[calc(var(--offset)/2*-1)] z-30 h-[calc(100%+var(--offset))] w-(--width) bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] bg-size-[var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)] dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
        style={
          {
            '--background': '#ffffff',
            '--color': 'rgba(0, 0, 0, 0.2)',
            '--color-dark': 'rgba(255, 255, 255, 0.2)',
            '--height': '5px',
            '--width': '1px',
            '--fade-stop': '90%',
            '--offset': '80px',
          } as React.CSSProperties
        }
      />

      <div
        className="absolute right-0 top-[calc(var(--offset)/2*-1)] z-30 h-[calc(100%+var(--offset))] w-(--width) bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] bg-size-[var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)] dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]"
        style={
          {
            '--background': '#ffffff',
            '--color': 'rgba(0, 0, 0, 0.2)',
            '--color-dark': 'rgba(255, 255, 255, 0.2)',
            '--height': '5px',
            '--width': '1px',
            '--fade-stop': '90%',
            '--offset': '80px',
          } as React.CSSProperties
        }
      />
      {children}
    </section>
  );
};

export default UIAuraBox;
