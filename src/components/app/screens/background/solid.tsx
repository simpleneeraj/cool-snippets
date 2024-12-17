import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import colors from '@/json/html-colors.json';
import { Card, cn } from '@nextui-org/react';
import { BackgroundScreenTypes } from './types';
import { FrameItem } from '@/components/elements/frame';
import useDynamicHeight from '@/ui-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/ui-kit/components/UIVirtualizeGrid';

const SolidBackgrounds: React.FC<BackgroundScreenTypes> = ({
  value,
  onChange,
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
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
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
                  fullWidth
                  isPressable
                  onPress={() => onChange?.(background)}
                  key={currentItem?.name}
                  className={cn(
                    'flex flex-col w-full group sm:cursor-pointer border-2 border-transparent transition-all',
                    background === value && 'border-default-900 border-2'
                  )}
                  title={currentItem?.name}
                  radius="md"
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
