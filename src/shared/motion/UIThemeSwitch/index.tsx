'use client';

import { useTheme } from 'next-themes';
import { useId, useState } from 'react';
import { Button } from '@shared/ui/button';
import { MoonLinearIcon, Sun2LinearIcon } from '@solar-icons/react';

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
      <Sun2LinearIcon aria-hidden="true" className="size-4 dark:hidden" />
      <MoonLinearIcon
        aria-hidden="true"
        className="size-4 hidden dark:block"
      />
      {/* {theme} */}
      <span className="sr-only">Switch to system/light/dark version</span>
    </Button>
  );
}
