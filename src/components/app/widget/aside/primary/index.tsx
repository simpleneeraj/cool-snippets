'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Frame, FrameFooter, FramePanel } from '@/app-kit/ui/frame';
import { Tabs, TabsList, TabsPanel, TabsTab } from '@/app-kit/ui/tabs';
import { elements, elementsObject } from './values';
import { ELEMENTS } from '@/typings/enums';
import { Button } from '@/app-kit/ui/button';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveSlide } from '@/store/slides/current-slide';
import { generateID } from '@/utils/id-generator';
import { useDrag } from 'react-dnd';
import { DRAG_ITEM_TYPE, type DragItem } from '@/components/app/dnd/types';
import { cn } from '@/lib/utils';
import LayersPanel from './layers';
import { useActiveElement } from '@/store/slides/current-element';
import { keepSelectionProps } from '@/components/app/widget/selection-manager';
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/app-kit/ui/alert-dialog';

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
          <UIView className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">v1.0.0</p>
            <Particle />
          </UIView>
        </FrameFooter>
      </Frame>
    </UIView>
  );
};

export default PrimaryAsideWidget;

function Particle() {
  const { resetState } = useSlideEditor();
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive-outline" />}>
        Reset All
      </AlertDialogTrigger>
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete all the
            elements from the current slide.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose render={<Button variant="ghost" />}>
            Cancel
          </AlertDialogClose>
          <AlertDialogClose
            render={<Button onClick={resetState} variant="destructive" />}
          >
            Reset All
          </AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
