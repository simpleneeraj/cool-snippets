import React from 'react';
import { sortBy } from 'lodash';
import UIView from '@shared/uikit/UIView';
import gradients from '@data/gradients.json';
import { BackgroundScreenTypes } from './types';
import { Card } from '@shared/ui/card';
import { cn } from '@shared/lib/utils';
import UIVirtualizeGrid from '@shared/motion/UIVirtualizeGrid';

const GradientsBackground: React.FC<BackgroundScreenTypes> = ({
  value,
  onSelect: onChange,
}) => {
  return (
    <UIView className="layout-fill w-full">
      <UIVirtualizeGrid
        value={value}
        items={sortBy(gradients, 'name') || []}
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
              render={<button type="button" />}
              onClick={() => onChange?.(background)}
              key={currentItem?.name}
              className={cn(
                'group flex w-full flex-col border-2 border-transparent shadow-none transition-all sm:cursor-pointer overflow-hidden',
                background === value && 'border-foreground',
              )}
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
  );
};

export default GradientsBackground;
