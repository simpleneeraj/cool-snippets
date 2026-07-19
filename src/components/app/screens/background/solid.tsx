import React from 'react';
import UIView from '@/app-kit/source/UIView';
import colors from '@/json/html-colors.json';
import { Card } from '@/app-kit/ui/card';
import { cn } from '@/lib/utils';
import { BackgroundScreenTypes } from './types';
import { FrameItem } from '@/components/elements/frame';
import useDynamicHeight from '@/app-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/app-kit/components/UIVirtualizeGrid';

const SolidBackgrounds: React.FC<BackgroundScreenTypes> = ({
  value,
  onSelect: onChange,
}) => {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = height - 90;

  return (
    <UIView className="flex flex-col">
      <FrameItem divider={false}>
        <UIView className="flex flex-col flex-1 w-full" ref={ref}>
          <UIVirtualizeGrid
            value={value}
            items={colors || []}
            height={calculatedHeight}
            emptyContent={
              <UIView className="flex-1 flex flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  No items available
                </span>
              </UIView>
            }
            gridCount={6}
          >
            {({ currentItem }) => {
              const background = currentItem?.hex;

              return (
                <Card
                  render={<button type="button" />}
                  onClick={() => onChange?.(background)}
                  key={currentItem?.name}
                  className={cn(
                    'group flex w-full flex-col border-2 border-transparent shadow-none transition-all sm:cursor-pointer',
                    background === value && 'border-foreground',
                  )}
                  title={currentItem?.name}
                >
                  <UIView
                    className="flex-1 w-full min-h-9 flex items-center justify-center"
                    style={{
                      background,
                    }}
                  ></UIView>
                </Card>
              );
            }}
          </UIVirtualizeGrid>
        </UIView>
      </FrameItem>
    </UIView>
  );
};

export default SolidBackgrounds;
