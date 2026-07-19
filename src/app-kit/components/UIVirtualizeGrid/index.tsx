/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { isEqual, startCase } from 'lodash';
import UIView from '@/app-kit/source/UIView';
import { VirtuosoGrid } from 'react-virtuoso';
import { PickerProps } from '@/typings/icon-picker';
import { Card } from '@/app-kit/ui/card';
import { cn } from '@/lib/utils';

const UIVirtualizeGrid: React.FC<PickerProps> = ({
  value,
  items,
  height,
  showTitle,
  onSelectIcon,
  gridCount = 3,
  emptyContent,
  children,
}) => {
  const gridComponents = React.useMemo(
    () => ({
      Item: (props: any) => (
        <UIView
          {...props}
          className={cn(`p-1 flex flex-none items-center`, props.className)}
          style={{
            width: `${100 / gridCount}%`,
          }}
        />
      ),
      List: (props: any) => (
        <UIView {...props} className={cn(`flex flex-wrap`, props.className)} />
      ),
    }),
    [gridCount]
  );

  const renderItemContent = React.useCallback(
    (index: number) => {
      const currentItem = items?.[index];
      const activeItem = isEqual(value, currentItem);

      if (children) {
        return children({ currentItem, activeItem });
      }

      return (
        <Card
          key={index}
          render={<button type="button" />}
          title={currentItem?.name}
          className={cn(
            'flex h-full w-full flex-col items-center justify-center border border-muted bg-transparent p-4 transition-all',
            'hover:border hover:border-border hover:bg-muted',
            activeItem && 'border border-border bg-muted'
          )}
          onClick={() => onSelectIcon?.(currentItem)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentItem?.source}
            className={cn(
              'object-contain',
              showTitle ? 'h-12 w-12' : 'h-14 w-14'
            )}
            alt={currentItem?.name}
          />
          {showTitle && (
            <p className="text-[10px] mt-1">{startCase(currentItem?.name)}</p>
          )}
        </Card>
      );
    },
    [items, value, children, onSelectIcon, showTitle]
  );
  // border border-muted rounded-2xl
  return (
    <UIView className="flex-1 flex flex-col w-full overflow-auto">
      {items && items.length > 0 ? (
        <VirtuosoGrid
          style={{ height }}
          totalCount={items.length}
          components={gridComponents}
          itemContent={renderItemContent}
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

export default React.memo(UIVirtualizeGrid);
