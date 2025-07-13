import React from 'react';
import UIView from '@/app-kit/source/UIView';
import shortcutsData from '@/json/shortcuts.json';
import { Kbd, KbdKey, Listbox, ListboxItem } from '@heroui/react';

const Shortcuts = () => {
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';

  return (
    <UIView className="overflow-none relative border-small border-foreground/10 bg-[url('/texture/abstract-dark-bg.jpg')] bg-right-bottom rounded-2xl">
      <Listbox aria-label="Editor Shortcuts" variant="bordered">
        {shortcutsData.map((shortcut) => (
          <ListboxItem
            key={shortcut.key}
            description={shortcut.description}
            // startContent={<Icon icon={shortcut.icon} className={iconClasses} />}
            endContent={
              <Kbd keys={shortcut.keys as KbdKey[]}>{shortcut.key}</Kbd>
            }
          >
            {shortcut.text}
          </ListboxItem>
        ))}
      </Listbox>
    </UIView>
  );
};

export default Shortcuts;
