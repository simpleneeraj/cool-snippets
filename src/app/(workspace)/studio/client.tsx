'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import ToolbarWidget from '@features/studio/toolbar';
import SelectionManager from '@features/studio/selection-manager';
import ResizableFrame from '@features/studio/ui/resizable-frame';
import ContainerWidget from '@features/studio/canvas/container';
import PrimaryAsideWidget from '@features/studio/aside/primary';
import SecondaryAsideWidget from '@features/studio/aside/secondary';
import DotPattern from '@shared/motion/UIBackgroundPattern/dot-pattern';
import { EditorDndProvider } from '@features/studio/dnd/provider';
import { tv } from 'tailwind-variants';

export default function EditorPageClient() {
  // The editor is fully client-driven (depends on the in-memory store), so we
  // render it only after mount to avoid SSR hydration mismatches.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const { currentSlide, onChangeSlide, isSlideSelected } = useSlideEditor();
  const { base, canvas, frame, features } = styles({
    slideSelected: isSlideSelected,
  });

  const onWidthChange = (width: number) => {
    if (!currentSlide) return;
    // `onChangeSlide` replaces `background` wholesale rather than merging, so we
    // must resend the full background (type + properties) with only `style.width`
    // updated — otherwise the first resize move wipes the gradient/wallpaper and
    // padding, collapsing the artboard.
    onChangeSlide({
      background: {
        ...currentSlide.background,
        style: {
          ...currentSlide.background?.style,
          width,
        },
      },
    });
  };

  if (!mounted) return null;

  return (
    <EditorDndProvider>
      <SelectionManager />
      <UIView className={base()}>
        <UIView className={canvas()}>
          <DotPattern />
          <UIView className={frame()}>
            <ResizableFrame
              onWidthChange={onWidthChange}
              width={currentSlide?.background?.style?.width}
            >
              <ContainerWidget />
            </ResizableFrame>
          </UIView>
        </UIView>
        <UIView className={features()}>
          <ToolbarWidget />
          <PrimaryAsideWidget />
          <SecondaryAsideWidget />
        </UIView>
      </UIView>
    </EditorDndProvider>
  );
}

const styles = tv({
  // `layout-fill` rather than `h-screen`: the route layout already renders the
  // app header above this slot, so `h-screen` overshoots by the header height
  // and pushes the bottom of the canvas out of view.
  base: 'layout-fill relative overflow-hidden',
  slots: {
    canvas: 'layout-scroll p-32',
    // `m-auto` centres on both axes *and* stays overflow-safe: with
    // `justify-center` an artboard taller than the viewport has its top edge
    // pushed out of the scrollable area and becomes unreachable.
    //
    // The ring and drop shadow give the artboard a visible edge against the
    // dotted canvas — without them the slide bleeds into the background.
    frame:
      'm-auto [&_.center]:ring-1 [&_.center]:shadow-2xl [&_.center]:shadow-black/40 [&_.center]:rounded-sm [&_.center]:transition-shadow',
    features:
      'pointer-events-none absolute inset-0 z-10 flex flex-col justify-between',
  },
  variants: {
    // Selecting the artboard needs a visible affordance, or clicking it reads
    // as a no-op. Elements get Moveable's control box; the slide gets a ring.
    slideSelected: {
      true: { frame: '[&_.center]:ring-2 [&_.center]:ring-primary' },
      false: {
        frame: '[&_.center]:ring-black/10 [&_.center]:dark:ring-white/10',
      },
    },
  },
});
