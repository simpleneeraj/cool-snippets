import React from 'react';
import { sortBy, subtract } from 'lodash';
import UIView from '@/app-kit/source/UIView';
import { Card } from '@/app-kit/ui/card';
import { cn } from '@/lib/utils';
import { BackgroundScreenTypes } from './types';
import { FrameItem } from '@/components/elements/frame';
import useDynamicHeight from '@/app-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/app-kit/components/UIVirtualizeGrid';
import CSS_GRADIENT_LIST from '@/server/patterns/gradients';
import cssToStyle from '@/plugins/css-to-style';

const PatternsBackgrounds: React.FC<BackgroundScreenTypes> = ({
  value,
  onSelect: onChange,
}) => {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 90);

  return (
    <UIView className="flex flex-col">
      <FrameItem divider={false}>
        <UIView className="flex flex-col flex-1 w-full" ref={ref}>
          <UIVirtualizeGrid
            value={value}
            items={sortBy(CSS_GRADIENT_LIST, 'name') || []}
            height={calculatedHeight}
            emptyContent={
              <UIView className="flex-1 flex flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  No items available
                </span>
              </UIView>
            }
            gridCount={2}
          >
            {({ currentItem }) => {
              const gradient = currentItem?.source;

              const validateGradient = (): string => {
                if (gradient.includes('background-image')) {
                  return gradient; // Already has full CSS styles
                }
                return `background-image: ${gradient};`;
              };
              const background = cssToStyle(validateGradient());

              return (
                <Card
                  render={<button type="button" />}
                  onClick={() => onChange?.(gradient)}
                  key={currentItem?.name}
                  className={cn(
                    'group flex w-full flex-col border-2 border-transparent shadow-none transition-all sm:cursor-pointer',
                    gradient === value && 'border-foreground',
                  )}
                  title={currentItem?.name}
                >
                  <UIView
                    className="flex-1 w-full min-h-28 flex items-center justify-center"
                    style={{ ...background }}
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

export default PatternsBackgrounds;
