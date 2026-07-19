import React from 'react';
import UIView from '../UIView';
import { HexAlphaColorPicker } from 'react-colorful';
import { cn } from '@/lib/utils';
import { COLOR_SWATCHES } from '@/constants/palette';
import { Popover, PopoverContent, PopoverTrigger } from '@/app-kit/ui/popover';

type Props = {
  value?: string;
  /** Rendered next to the swatch so the trigger reads as a labelled control. */
  showValue?: boolean;
  onSelect?: (color: string) => void;
};

const UIColorPicker: React.FC<Props> = ({ value, showValue = true, onSelect }) => {
  const [selectedColor, setSelectedColor] = React.useState(value);

  React.useEffect(() => {
    if (value) setSelectedColor(value);
  }, [value]);

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
    onSelect?.(color);
  };

  return (
    <Popover>
      <PopoverTrigger
        render={
          <button
            aria-label="Color picker"
            type="button"
            className="flex w-full items-center gap-2 rounded-lg border border-border bg-transparent px-2 py-1.5 text-left transition-colors hover:bg-muted sm:cursor-pointer"
          >
            <span
              className="size-5 shrink-0 rounded-md border border-border bg-[repeating-conic-gradient(#808080_0%_25%,transparent_0%_50%)] bg-[length:8px_8px]"
              style={{ backgroundColor: selectedColor }}
            />
            {showValue && (
              <span className="truncate font-mono text-xs text-muted-foreground">
                {selectedColor ?? 'Pick a colour'}
              </span>
            )}
          </button>
        }
      />
      <PopoverContent className="w-60 p-3">
        <UIView className="gap-3">
          <HexAlphaColorPicker
            className="!w-full"
            color={selectedColor}
            onChange={onColorSelect}
          />
          <UIView className="gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              Presets
            </span>
            <div className="grid grid-cols-8 gap-1.5">
              {COLOR_SWATCHES.map((color) => (
                <button
                  key={color}
                  type="button"
                  title={color}
                  aria-label={color}
                  className={cn(
                    'aspect-square w-full rounded-md transition-all sm:cursor-pointer',
                    selectedColor === color
                      ? 'ring-2 ring-foreground ring-offset-1 ring-offset-background'
                      : 'border border-border hover:scale-110',
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => onColorSelect(color)}
                />
              ))}
            </div>
          </UIView>
        </UIView>
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(UIColorPicker);
