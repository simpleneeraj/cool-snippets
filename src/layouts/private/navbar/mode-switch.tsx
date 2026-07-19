import React from 'react';
import { Switch } from '@/app-kit/ui/switch';
import { useTheme as useNextTheme } from 'next-themes';

export const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  return (
    <div className="flex items-center justify-between w-full py-1">
      Mode ({resolvedTheme})
      <Switch
        checked={resolvedTheme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
    </div>
  );
};
