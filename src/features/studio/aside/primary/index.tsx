'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import { Frame, FrameFooter, FramePanel } from '@shared/ui/frame';
import { Tabs, TabsList, TabsPanel, TabsTab } from '@shared/ui/tabs';
import { elements, elementsObject } from './values';
import { ELEMENTS } from '@features/studio/model/enums';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { useActiveSlide } from '@features/studio/store/slides/current-slide';
import { generateID } from '@features/studio/lib/id-generator';
import { useDrag } from 'react-dnd';
import { DRAG_ITEM_TYPE, type DragItem } from '@features/studio/dnd/types';
import { cn } from '@shared/lib/utils';
import LayersPanel from './layers';
import { useActiveElement } from '@features/studio/store/slides/current-element';
import { keepSelectionProps } from '@features/studio/selection-manager';
import appConfig from '@shared/config/site';
import { Badge } from '@shared/ui/badge';

/* ─────────────────────────────────────────────────────────── */

interface ElementCardProps {
  elementType: ELEMENTS;
  label: string;
  icon: React.ElementType;
  onAdd: (type: ELEMENTS) => void;
}

function ElementCard({
  label,
  elementType,
  icon: Icon,
  onAdd,
}: ElementCardProps) {
  const [{ isDragging }, dragRef] = useDrag<
    DragItem,
    unknown,
    { isDragging: boolean }
  >(() => ({
    type: DRAG_ITEM_TYPE,
    item: { type: DRAG_ITEM_TYPE, elementType, label },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={dragRef as unknown as React.Ref<HTMLDivElement>}
      onClick={() => onAdd(elementType)}
      title={`Add ${label}`}
      className={cn(
        'group relative flex flex-col items-start gap-2 rounded-xl border p-3 transition-all select-none overflow-hidden',
        'cursor-grab border-border bg-card hover:bg-primary-foreground',
        isDragging && 'opacity-35 scale-95 cursor-grabbing',
      )}
    >
      {/* Icon chip */}
      <UIView className="flex gap-2.5 flex-col items-center justify-between w-full">
        <Icon className={cn('opacity-75 size-6 duration-150')} />
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold">{label}</span>
        </div>
      </UIView>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────── */

enum PanelTab {
  ELEMENTS = 'elements',
  LAYERS = 'layers',
}

const PrimaryAsideWidget = () => {
  const { createSlideElement } = useSlideEditor();
  const { slide: currentSlide } = useActiveSlide();
  const { updateElement } = useActiveElement();

  const onSelectElement = React.useCallback(
    (type: ELEMENTS) => {
      const template = elementsObject[type as keyof typeof elementsObject];
      if (!template) return;

      const id = generateID();
      createSlideElement(currentSlide, { id, ...template });
      updateElement(id);
    },
    [createSlideElement, currentSlide, updateElement],
  );

  return (
    <UIView
      {...keepSelectionProps}
      className="pointer-events-auto absolute left-2 top-0 h-full py-2"
    >
      <Frame className="w-72 h-full border bg-background/80 backdrop-blur-sm">
        <FramePanel className="layout-fill p-2 gap-2">
          {/* Header */}
          <div className="px-1 pt-1 pb-0.5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Elements
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
              Drag onto the canvas or click to add
            </p>
          </div>

          <Tabs defaultValue={PanelTab.ELEMENTS} className="layout-fill">
            <TabsList className="w-full">
              <TabsTab value={PanelTab.ELEMENTS}>All</TabsTab>
              <TabsTab value={PanelTab.LAYERS}>Layers</TabsTab>
            </TabsList>

            <TabsPanel value={PanelTab.ELEMENTS} className="layout-fill">
              <UIView className="layout-scroll py-0.5">
                <div className="grid grid-cols-2 gap-1.5 px-0.5 pb-1">
                  {elements.map((item) => (
                    <ElementCard
                      key={item.type}
                      elementType={item.type}
                      label={item.content}
                      icon={item.icon}
                      onAdd={onSelectElement}
                    />
                  ))}
                </div>
              </UIView>
            </TabsPanel>

            <TabsPanel value={PanelTab.LAYERS} className="layout-fill">
              <LayersPanel />
            </TabsPanel>
          </Tabs>
        </FramePanel>

        <FrameFooter>
          <UIView className="flex items-center justify-between gap-2">
            <UIView className="flex items-center gap-1.5">
              <span className="text-muted-foreground text-xs font-medium">
                {appConfig.version}
              </span>
              <Badge
                variant="warning"
                size="sm"
                className="uppercase tracking-wide"
              >
                {appConfig.environment}
              </Badge>
            </UIView>
          </UIView>
        </FrameFooter>
      </Frame>
    </UIView>
  );
};

export default PrimaryAsideWidget;
