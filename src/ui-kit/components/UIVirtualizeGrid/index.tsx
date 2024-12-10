import React from 'react';
import { isEqual, startCase } from 'lodash';
import UIView from '@/ui-kit/source/UIView';
import { VirtuosoGrid } from 'react-virtuoso';
import { PickerProps } from '@/typings/icon-picker';
import { Card, cn, Image } from '@nextui-org/react';

const UIVirtualizeGrid: React.FC<PickerProps> = ({
  value,
  items,
  height,
  showTitle,
  onSelectIcon,
  gridCount = 3,
  emptyContent,
}) => {
  return (
    <UIView className="p-1 flex-1 flex flex-col w-full overflow-auto border border-default-100 rounded-2xl">
      {items && items?.length > 0 ? (
        <VirtuosoGrid
          style={{ height }}
          totalCount={items.length}
          components={{
            Item: (props) => (
              <UIView
                {...props}
                className={cn(
                  `p-2 flex flex-none items-center`,
                  props.className
                )}
                style={{
                  width: 100 / gridCount + '%',
                }}
              />
            ),
            List: (props) => (
              <UIView
                {...props}
                className={cn(`flex flex-wrap`, props.className)}
              />
            ),
          }}
          itemContent={(index) => {
            const currentItem = items[index];
            const active = isEqual(value, currentItem);
            return (
              <Card
                isPressable
                title={currentItem?.name}
                className={cn(
                  'w-full flex items-center justify-center border border-default-100 p-4 h-full bg-transparent transition-all',
                  'hover:border hover:border-default-200 hover:bg-default-100',
                  active && 'border border-default-200 bg-default-100'
                )}
                onPress={() => onSelectIcon?.(currentItem)}
              >
                <Image
                  disableAnimation
                  radius="none"
                  removeWrapper
                  src={currentItem?.source}
                  className={cn(
                    'object-contain',
                    showTitle ? 'h-12 w-12' : 'h-14 w-14'
                  )}
                  alt={currentItem?.name}
                />
                {showTitle && (
                  <p className="text-[10px] mt-1">
                    {startCase(currentItem?.name)}
                  </p>
                )}
              </Card>
            );
          }}
        />
      ) : (
        <UIView
          style={{ minHeight: `${height}px` }}
          className="flex-1 flex flex-col"
        >
          {emptyContent}
        </UIView>
      )}
    </UIView>
  );
};

export default UIVirtualizeGrid;
