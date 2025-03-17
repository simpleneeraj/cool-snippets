import React from 'react';
import UIView from '../UIView';
import { HexAlphaColorPicker } from 'react-colorful';
import { cn, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';

const colors = [
  { background: 'rgb(0, 17, 34)' },
  { background: 'rgb(113, 93, 242)' },
  { background: 'rgb(102, 0, 255)' },
  { background: 'rgb(0, 102, 255)' },
  { background: 'rgb(79, 172, 247)' },
  { background: 'rgb(0, 148, 115)' },
  { background: 'rgb(247, 202, 202)' },
  { background: 'rgb(252, 175, 60)' },
  { background: 'rgb(247, 119, 15)' },
  { background: 'rgb(255, 111, 97)' },
  { background: 'rgb(198, 35, 104)' },
  { background: 'rgb(255, 0, 102)' },
  { background: 'rgb(168, 168, 158)' },
  { background: 'rgb(136, 130, 119)' },
  { background: 'rgb(204, 204, 204)' },
  { background: 'rgb(255, 255, 255)' },
];

type Props = {
  value?: string;
  onSelect?: (color: string) => void;
};

const UIColorPicker: React.FC<Props> = ({ value, onSelect }) => {
  const [selectedColor, setSelectedColor] = React.useState(value);

  React.useEffect(() => {
    if (value) {
      setSelectedColor(value);
    }
  }, [value]);

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
    onSelect?.(color);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <button
          aria-label="Color Picker"
          type="button"
          className="w-5 h-5 rounded-md border-default-200"
          style={{ backgroundColor: selectedColor }}
        ></button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <UIView className="p-1 transition-colors rounded-lg border-medium border-transparent hover:border-default focus:border-default">
          <HexAlphaColorPicker
            className="max-w-44"
            color={selectedColor}
            onChange={(newColor) => onColorSelect(newColor)}
          />
          <div className="py-2">
            <div className="text-default-400 font-medium mb-2">Colors</div>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <div key={color?.background} className="aspect-square">
                  <button
                    type="button"
                    className={cn(
                      'w-full h-full rounded transition-all',
                      selectedColor === color.background
                        ? 'border-2 border-default-500'
                        : 'border border-default-100'
                    )}
                    style={{ backgroundColor: color.background }}
                    onClick={() => onColorSelect(color.background)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </UIView>
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(UIColorPicker);
