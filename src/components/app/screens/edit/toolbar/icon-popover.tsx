'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import useIcons from '@/server/icons/hooks/use-icons';
import { cn } from '@/lib/utils';
import UIView from '@/app-kit/source/UIView';
import { Input } from '@/app-kit/ui/input';
import { Button } from '@/app-kit/ui/button';
import { Spinner } from '@/app-kit/ui/spinner';
import { Popover, PopoverContent, PopoverTrigger } from '@/app-kit/ui/popover';
import { IconProviders, PickerIconType } from '@/typings/icon-picker';

type Props = {
  /** Source URL of the currently selected icon, if any. */
  value?: string;
  onSelect: (icon: PickerIconType) => void;
};

/**
 * Symbol grid + search for a single provider. Lives in its own component so the
 * `useIcons` request fires only while the popover is open — Base UI unmounts the
 * popup when closed, so the fetch is scoped to actual use.
 */
const SymbolGrid: React.FC<{
  value?: string;
  onPick: (icon: PickerIconType) => void;
}> = ({ value, onPick }) => {
  const [term, setTerm] = React.useState('');
  const [query] = useDebounce(term, 400);

  const { data, isLoading, isValidating } = useIcons({
    provider: IconProviders.VSCODE_SYMBOLS,
    query: query.trim() || null,
  });

  const icons = data?.icons ?? [];
  const busy = isLoading || isValidating;

  return (
    <UIView className="flex w-full flex-col gap-2">
      <Input
        autoFocus
        value={term}
        placeholder="Search symbols…"
        onChange={(e) => setTerm(e.target.value)}
      />

      <UIView className="relative h-56 overflow-y-auto">
        {busy && icons.length === 0 ? (
          <UIView className="flex h-full items-center justify-center">
            <Spinner />
          </UIView>
        ) : icons.length === 0 ? (
          <UIView className="flex h-full items-center justify-center px-4 text-center text-xs text-muted-foreground">
            No symbols found
          </UIView>
        ) : (
          <div className="grid grid-cols-6 gap-1">
            {icons.map((icon) => {
              const active = icon.source === value;
              return (
                <button
                  key={`${icon.name}-${icon.source}`}
                  type="button"
                  title={icon.name}
                  aria-label={icon.name}
                  onClick={() => onPick(icon)}
                  className={cn(
                    'flex aspect-square items-center justify-center rounded-md border border-transparent p-1.5 transition-colors hover:bg-muted',
                    active && 'border-primary bg-primary/10',
                  )}
                >
                  <img
                    src={icon.source}
                    alt={icon.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        )}
      </UIView>
    </UIView>
  );
};

/**
 * Icon control for the header toolbar. Replaces the full-screen asset Dialog
 * with an inline Popover scoped to the vscode-symbols set.
 */
const IconPopover: React.FC<Props> = ({ value, onSelect }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            aria-label="Change icon"
            title="Change icon"
            className="h-8 w-8 p-0"
          >
            {value ? (
              <img
                src={value}
                alt="Header icon"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
            ) : (
              <ImageIcon className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        }
      />
      <PopoverContent className="w-72 p-3" align="start">
        {open && (
          <SymbolGrid
            value={value}
            onPick={(icon) => {
              onSelect(icon);
              setOpen(false);
            }}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default IconPopover;
