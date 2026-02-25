'use client';

import UIView from '@/app-kit/source/UIView';
import useSlideEditor from '@/store/hooks/use-editor';
import ToolbarWidget from '@/components/app/widget/toolbar';
import ResizableFrame from '@/app-kit/components/UIResizableFrame';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';
import DotPattern from '@/app-kit/components/UIBackgroundPattern/dot-pattern';
import { EditorDndProvider } from '@/components/app/dnd/provider';
import { tv } from 'tailwind-variants';

export default function EditorPageClient() {
  const { base, canvas, frame, features } = styles();
  const { currentSlide, onChangeSlide } = useSlideEditor();

  const onWidthChange = (width: number) => {
    onChangeSlide({
      background: {
        style: {
          width,
        },
      },
    });
  };

  return (
    <EditorDndProvider>
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
  base: 'relative h-screen layout-fill',
  slots: {
    canvas: 'layout-scroll items-center p-32',
    frame: 'h-full items-center justify-center',
    features:
      'pointer-events-none absolute inset-0 z-10 flex flex-col justify-between',
  },
});
