import React from 'react';
import { sortBy, subtract } from 'lodash';
import UIView from '@/app-kit/source/UIView';
import gradients from '@/json/gradients.json';
import { BackgroundScreenTypes } from './types';
import { Card, cn } from '@heroui/react';
import { FrameItem } from '@/components/elements/frame';
import useDynamicHeight from '@/app-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/app-kit/components/UIVirtualizeGrid';

const GradientsBackground: React.FC<BackgroundScreenTypes> = ({
  value,
  onChange,
}) => {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 90);

  return (
    <UIView className="flex flex-col">
      <FrameItem divider={false}>
        <UIView className="flex flex-col flex-1 w-full" ref={ref}>
          <UIVirtualizeGrid
            value={value}
            items={sortBy(gradients, 'name') || []}
            height={calculatedHeight}
            emptyContent={
              <UIView className="flex-1 flex flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  No items available
                </span>
              </UIView>
            }
            gridCount={3}
          >
            {({ currentItem }) => {
              const gradientColors = currentItem?.colors?.join(', ');
              const direction = 'to right';
              const background = `linear-gradient(${direction}, ${gradientColors})`;

              return (
                <Card
                  fullWidth
                  isPressable
                  onClick={() => onChange?.(background)}
                  key={currentItem?.name}
                  className={cn(
                    'flex flex-col w-full group sm:cursor-pointer border-2 border-transparent transition-all',
                    background === value && 'border-default-900 border-2'
                  )}
                  shadow={'none'}
                  title={currentItem?.name}
                >
                  <UIView
                    className="flex-1 w-full min-h-20 flex items-center justify-center"
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

export default GradientsBackground;
