'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@/store/hooks/use-editor';
import ToolbarWidget from '@/components/app/widget/toolbar';
import SelectionManager from '@/components/app/widget/selection-manager';
import ResizableFrame from '@shared/motion/UIResizableFrame';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';
import DotPattern from '@shared/motion/UIBackgroundPattern/dot-pattern';
import { EditorDndProvider } from '@/components/app/dnd/provider';
import { tv } from 'tailwind-variants';

export default function EditorPageClient() {
  // The editor is fully client-driven (depends on the in-memory store), so we
  // render it only after mount to avoid SSR hydration mismatches.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const { base, canvas, frame, features } = styles();
  const { currentSlide, onChangeSlide } = useSlideEditor();

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
  base: 'relative flex h-screen flex-col overflow-hidden',
  slots: {
    canvas: 'layout-scroll items-center p-32',
    // The ring and drop shadow give the artboard a visible edge against the
    // dotted canvas — without them the slide bleeds into the background.
    frame:
      'h-full items-center justify-center [&_.center]:ring-1 [&_.center]:ring-black/10 [&_.center]:dark:ring-white/10 [&_.center]:shadow-2xl [&_.center]:shadow-black/40 [&_.center]:rounded-sm',
    features:
      'pointer-events-none absolute inset-0 z-10 flex flex-col justify-between',
  },
});
