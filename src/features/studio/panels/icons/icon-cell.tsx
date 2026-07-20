'use client';

import React from 'react';
import { useDrag } from 'react-dnd';
import { Card } from '@shared/ui/card';
import { cn } from '@shared/lib/utils';
import { startCase } from 'lodash';
import { ELEMENTS } from '@features/studio/model/enums';
import { DRAG_ITEM_TYPE, DragItem } from '@features/studio/dnd/types';
import { PickerIconType } from '@shared/types/icon-picker';
import { buildIconElement } from './icon-element';

type Props = {
  icon: PickerIconType;
  active: boolean;
  showTitle?: boolean;
  onSelect: (icon: PickerIconType) => void;
};

/**
 * A single icon in the picker grid. Doubles as a react-dnd drag source so an
 * icon can be dropped at a precise spot on the artboard, in addition to
 * click-to-add (which drops it in the element template's default position).
 */
const IconCell: React.FC<Props> = ({ icon, active, showTitle, onSelect }) => {
  const [{ isDragging }, dragRef] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >(
    () => ({
      type: DRAG_ITEM_TYPE,
      item: {
        type: DRAG_ITEM_TYPE,
        elementType: ELEMENTS.ICON,
        label: icon?.name,
        ...buildIconElement(icon),
      },
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    }),
    [icon],
  );

  return (
    // The drag ref sits on a plain wrapper rather than on Card: this mirrors
    // the element palette in aside/primary, and keeps the connector off a
    // component that renders through Base UI's `useRender`.
    <div
      ref={dragRef as unknown as React.Ref<HTMLDivElement>}
      className={cn('h-full w-full', isDragging && 'opacity-40')}
    >
      <Card
        render={<button type="button" />}
        title={icon?.name}
        className={cn(
          'flex h-full w-full cursor-grab flex-col items-center justify-center border border-muted bg-transparent p-4 transition-all',
          'hover:border-border hover:bg-muted active:cursor-grabbing',
          active && 'border-border bg-muted',
        )}
        onClick={() => onSelect(icon)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon?.source}
          className={cn('object-contain', showTitle ? 'h-12 w-12' : 'h-14 w-14')}
          alt={icon?.name}
          draggable={false}
        />
        {showTitle && (
          <p className="mt-1 text-[10px]">{startCase(icon?.name)}</p>
        )}
      </Card>
    </div>
  );
};

export default IconCell;
