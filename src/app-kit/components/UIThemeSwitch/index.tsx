'use client';

import { useTheme } from 'next-themes';
import { useId, useState } from 'react';
import { Button } from '@/app-kit/ui/button';
import { SolarMoonLinear } from '@/app-kit/icons/SolarMoonLinear';
import { SolarSun2Linear } from '@/app-kit/icons/SolarSun2Linear';

export default function UIThemeSwitch() {
  const id = useId();
  const { theme, setTheme } = useTheme();
  const [system, setSystem] = useState(false);

  const smartToggle = () => {
    /* The smart toggle by @nrjdalal */
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (theme === 'system') {
      setTheme(prefersDarkScheme ? 'light' : 'dark');
      setSystem(false);
    } else if (
      (theme === 'light' && !prefersDarkScheme) ||
      (theme === 'dark' && prefersDarkScheme)
    ) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setSystem(false);
    } else {
      setTheme('system');
      setSystem(true);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={smartToggle}
      aria-label="Toggle dark mode"
    >
      <SolarSun2Linear aria-hidden="true" className="size-4 dark:hidden" />
      <SolarMoonLinear
        aria-hidden="true"
        className="size-4 hidden dark:block"
      />
      {/* {theme} */}
      <span className="sr-only">Switch to system/light/dark version</span>
    </Button>
  );
}
