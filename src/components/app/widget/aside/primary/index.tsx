'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Frame, FrameFooter, FramePanel } from '@/app-kit/ui/frame';
import { Tabs, TabsList, TabsTab } from '@/app-kit/ui/tabs';
import { elements, elementsObject } from './values';
import { APP_PLAN_TYPE, ELEMENTS } from '@/typings/enums';
import { Button } from '@/app-kit/ui/button';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveSlide } from '@/store/slides/current-slide';
import { generateID } from '@/utils/id-generator';
import { useDrag } from 'react-dnd';
import { DRAG_ITEM_TYPE, type DragItem } from '@/components/app/dnd/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/app-kit/ui/badge';
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
  isPro: boolean;
  onAdd: (type: ELEMENTS) => void;
}

function ElementCard({
  label,
  elementType,
  icon: Icon,
  isPro,
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
      onClick={() => !isPro && onAdd(elementType)}
      title={isPro ? 'Upgrade to Pro' : `Add ${label}`}
      className={cn(
        'group relative flex flex-col items-start gap-2 rounded-xl border p-3 transition-all select-none overflow-hidden',
        'cursor-grab border-border bg-card hover:bg-primary-foreground',
        isDragging && 'opacity-35 scale-95 cursor-grabbing',
      )}
    >
      {/* Icon chip */}
      <UIView className="flex gap-2.5 flex-col items-center justify-between w-full">
        <Icon className={cn('opacity-75 size-6 duration-150')} />
        {/* Label + description */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold">{label} </span>
          {isPro && (
            <Badge variant={'warning'}>
              <small>Pro</small>
            </Badge>
          )}
        </div>
      </UIView>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────── */

const PrimaryAsideWidget = () => {
  const { createSlideElement, resetState } = useSlideEditor();
  const { slide: currentSlide } = useActiveSlide();

  const onSelectElement = React.useCallback(
    (type: ELEMENTS) => {
      const template = elementsObject[type as keyof typeof elementsObject];
      if (!template) {
        console.warn(`Element of type "${type}" does not exist.`);
        return;
      }
      createSlideElement(currentSlide, { id: generateID(), ...template });
    },
    [createSlideElement, currentSlide],
  );

  return (
    <UIView className="pointer-events-auto absolute left-2 top-0 h-full py-2">
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

          <Tabs defaultValue="tab-1">
            <TabsList className="w-full">
              <TabsTab value="tab-1">All</TabsTab>
              <TabsTab value="tab-2">Layers</TabsTab>
            </TabsList>
          </Tabs>

          {/* Grid */}
          <UIView className="layout-scroll py-0.5">
            <div className="grid grid-cols-2 gap-1.5 px-0.5 pb-1">
              {elements.map((item) => {
                const isPro = [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM].some(
                  (plan) => item.plan.includes(plan),
                );
                return (
                  <ElementCard
                    key={item.type + item.content}
                    elementType={item.type}
                    label={item.content}
                    icon={item.icon}
                    isPro={isPro}
                    onAdd={onSelectElement}
                  />
                );
              })}
            </div>
          </UIView>
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
