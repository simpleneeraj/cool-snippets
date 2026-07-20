'use client';

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
  const { currentSlide, onChangeSlide, isSlideSelected } = useSlideEditor();
  const { base, canvas, frame, features } = styles({
    slideSelected: isSlideSelected,
  });

  const onWidthChange = (width: number) => {
    if (!currentSlide) return;
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
  base: 'layout-fill relative overflow-hidden',
  slots: {
    canvas: 'layout-scroll p-32',
    frame:
      'm-auto [&_.center]:ring-1 [&_.center]:shadow-2xl [&_.center]:shadow-black/40 [&_.center]:rounded-sm [&_.center]:transition-shadow',
    features:
      'pointer-events-none absolute inset-0 z-10 flex flex-col justify-between',
  },
  variants: {
    slideSelected: {
      true: { frame: '[&_.center]:ring-2 [&_.center]:ring-primary' },
      false: {
        frame: '[&_.center]:ring-black/10 [&_.center]:dark:ring-white/10',
      },
    },
  },
});
