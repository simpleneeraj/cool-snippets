import React from 'react';
import UIView from '@/app-kit/source/UIView';
import shortcutsData from '@/json/shortcuts.json';
import { Kbd, KbdGroup } from '@/app-kit/ui/kbd';

const KEY_SYMBOLS: Record<string, string> = {
  command: '⌘',
  shift: '⇧',
  ctrl: '⌃',
  control: '⌃',
  option: '⌥',
  alt: '⌥',
  enter: '↵',
  escape: 'esc',
  delete: '⌫',
};

const Shortcuts = () => {
  return (
    <UIView className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-[url('/texture/abstract-dark-bg.jpg')] bg-bottom-right">
      <ul
        aria-label="Editor Shortcuts"
        className="flex flex-col divide-y divide-border"
      >
        {shortcutsData.map((shortcut) => (
          <li
            key={shortcut.key}
            className="flex items-center justify-between gap-3 px-3 py-2"
          >
            <div className="flex flex-col">
              <span className="text-sm">{shortcut.text}</span>
              {shortcut.description && (
                <span className="text-xs text-muted-foreground">
                  {shortcut.description}
                </span>
              )}
            </div>
            <KbdGroup>
              {(shortcut.keys as string[]).map((k) => (
                <Kbd key={k}>{KEY_SYMBOLS[k] ?? k}</Kbd>
              ))}
              <Kbd>{shortcut.key}</Kbd>
            </KbdGroup>
          </li>
        ))}
      </ul>
    </UIView>
  );
};

export default Shortcuts;
