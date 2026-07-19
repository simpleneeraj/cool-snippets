'use client';

import React from 'react';
import { cn } from '@shared/lib/utils';
import UIView from '@shared/uikit/UIView';
import { Button } from '@shared/ui/button';
import { ELEMENTS, LAYER_DIRECTION } from '@shared/types/enums';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import { ElementType } from '@shared/types/editor';
import { elementIconMapper, elementLabelMapper } from '../values';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@shared/ui/menu';
import {
  ChevronDown,
  ChevronUp,
  Copy,
  Eye,
  EyeOff,
  MoreVertical,
  Trash2,
} from 'lucide-react';

const layerTitle = (element: ElementType) => {
  const label = elementLabelMapper[element.type as ELEMENTS] ?? 'Layer';
  const content = typeof element.content === 'string' ? element.content : '';
  const preview = content.trim().split('\n')[0]?.slice(0, 24);
  return preview ? `${label} · ${preview}` : label;
};

const LayersPanel = () => {
  const {
    currentSlideId,
    currentSlide,
    currentElementId,
    deleteSlideElement,
    duplicateSlideElement,
    moveSlideElement,
    updateSlideElement,
  } = useSlideEditor();
  const { updateElement } = useActiveElement();

  // Rendered top-most first: the last element in the array paints on top.
  const layers = React.useMemo(
    () => [...(currentSlide?.elements ?? [])].reverse(),
    [currentSlide?.elements],
  );

  // Targets the row's element by id rather than going through the "current
  // element" helpers — those resolve against the selection, which would write
  // to whichever element happened to be selected instead.
  const onToggleVisibility = React.useCallback(
    (element: ElementType) => {
      updateSlideElement(currentSlideId, element.id as string, {
        ...element,
        hidden: !element.hidden,
      });
    },
    [currentSlideId, updateSlideElement],
  );

  if (!layers.length) {
    return (
      <UIView className="flex flex-1 flex-col items-center justify-center gap-1 p-6 text-center">
        <p className="text-sm font-medium">No layers yet</p>
        <p className="text-xs text-muted-foreground">
          Add an element to see it listed here.
        </p>
      </UIView>
    );
  }

  return (
    <UIView className="layout-scroll gap-1 py-0.5">
      {layers.map((element, index) => {
        const Icon = elementIconMapper[element.type as ELEMENTS];
        const isActive = element.id === currentElementId;
        const isTop = index === 0;
        const isBottom = index === layers.length - 1;

        return (
          <UIView
            key={element.id}
            onClick={() => updateElement(element.id ?? null)}
            className={cn(
              'group flex flex-row items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 transition-colors sm:cursor-pointer',
              isActive ? 'border-border bg-muted' : 'hover:bg-muted/60',
            )}
          >
            {Icon ? (
              <Icon className="size-4 shrink-0 opacity-70" />
            ) : (
              <span className="size-4 shrink-0" />
            )}

            <span
              className={cn(
                'flex-1 truncate text-xs',
                element.hidden && 'text-muted-foreground line-through',
              )}
              title={layerTitle(element)}
            >
              {layerTitle(element)}
            </span>

            <Button
              size="icon-sm"
              variant="ghost"
              title={element.hidden ? 'Show layer' : 'Hide layer'}
              onClick={(event) => {
                event.stopPropagation();
                onToggleVisibility(element);
              }}
            >
              {element.hidden ? (
                <EyeOff className="size-3.5" />
              ) : (
                <Eye className="size-3.5" />
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    title="Layer actions"
                    onClick={(event) => event.stopPropagation()}
                  />
                }
              >
                <MoreVertical className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  disabled={isTop}
                  onClick={() =>
                    moveSlideElement(
                      currentSlideId,
                      element.id as string,
                      LAYER_DIRECTION.UP,
                    )
                  }
                >
                  <ChevronUp className="size-4" /> Bring forward
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={isBottom}
                  onClick={() =>
                    moveSlideElement(
                      currentSlideId,
                      element.id as string,
                      LAYER_DIRECTION.DOWN,
                    )
                  }
                >
                  <ChevronDown className="size-4" /> Send backward
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    duplicateSlideElement(currentSlideId, element.id as string)
                  }
                >
                  <Copy className="size-4" /> Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => {
                    if (element.id === currentElementId) updateElement(null);
                    deleteSlideElement(currentSlideId, element.id as string);
                  }}
                >
                  <Trash2 className="size-4" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </UIView>
        );
      })}
    </UIView>
  );
};

export default LayersPanel;
