import React from 'react';
import { sortBy, subtract } from 'lodash';
import UIView from '@/ui-kit/source/UIView';
import { Card, cn } from '@nextui-org/react';
import { BackgroundScreenTypes } from './types';
import { FrameItem } from '@/components/elements/frame';
import useDynamicHeight from '@/ui-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/ui-kit/components/UIVirtualizeGrid';
import CSS_GRADIENT_LIST from '@/server/patterns/gradients';
import cssToStyle from '@/plugins/css-to-style';

const PatternsBackgrounds: React.FC<BackgroundScreenTypes> = ({
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
            items={sortBy(CSS_GRADIENT_LIST, 'name') || []}
            height={calculatedHeight}
            emptyContent={
              <UIView className="flex-1 flex flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
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
                  fullWidth
                  isPressable
                  onPress={() => onChange?.(gradient)}
                  key={currentItem?.name}
                  className={cn(
                    'flex flex-col w-full group sm:cursor-pointer border-2 border-transparent transition-all',
                    gradient === value && 'border-default-900 border-2'
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
