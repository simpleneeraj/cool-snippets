import React from 'react';
import { Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

export const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  return (
    <div className="flex items-center justify-between w-full py-1">
      Mode ({resolvedTheme})
      <Switch
        size="sm"
        isSelected={resolvedTheme === 'dark' ? true : false}
        onValueChange={(e) => setTheme(e ? 'dark' : 'light')}
      />
    </div>
  );
};
