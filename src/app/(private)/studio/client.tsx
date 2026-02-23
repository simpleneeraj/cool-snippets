'use client';

import UIView from '@/app-kit/source/UIView';
import useSlideEditor from '@/store/hooks/use-editor';
import HeaderScreen from '@/components/app/screens/edit/header';
import TextToolbar from '@/components/app/screens/edit/header/text-toolbar';
import ResizableFrame from '@/app-kit/components/UIResizableFrame';
import { Frame, FrameFooter, FramePanel } from '@/app-kit/ui/frame';
import ContainerWidget from '@/components/app/widget/code/container';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';
import { cn } from '@/lib/utils';
import { AddLayers } from '@/components/app/widget/aside/primary/layers-preview';
import { Button } from '@/app-kit/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ELEMENTS } from '@/typings/enums';

export default function EditorPageClient() {
  const {
    currentElementId,
    currentSlide,
    currentElement,
    onChangeSlide,
    resetState,
  } = useSlideEditor({
    delay: 0,
  });

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
    <UIView className="relative h-screen layout-fill">
      {/* 
        Ideally, the header and sidebars should be overlaid *on top* of the canvas, 
        or the canvas should be the background. Use z-indexes to stack them.
      */}

      {/* Canvas Layer - Background */}
      <UIView className="layout-scroll items-center p-32">
        <div
          className={cn(
            'absolute inset-0 z-auto',
            'bg-size-[10px_10px]',
            'bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:bg-[radial-gradient(#404040_1px,transparent_1px)]',
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div className="h-full items-center justify-center">
          <ResizableFrame
            onWidthChange={onWidthChange}
            width={currentSlide?.background?.style?.width}
          >
            <ContainerWidget />
          </ResizableFrame>
        </div>
      </UIView>

      {/* UI Layer - Foreground */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between">
        {/* Header Area */}
        <AnimatePresence>
          {currentElementId ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <div className="pointer-events-auto flex justify-center pt-2 absolute top-0 left-1/2 -translate-x-1/2">
                {currentElement?.type === ELEMENTS.TEXT ? (
                  <TextToolbar />
                ) : (
                  <HeaderScreen />
                )}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex flex-1 relative">
          {/* Left Sidebar */}
          <div className="pointer-events-auto absolute left-2 top-0 h-full pb-2">
            <Frame className="w-80 h-full border bg-background/80 backdrop-blur-sm">
              <FramePanel className="h-full">
                <AddLayers />
                <Button onClick={resetState}>Reset</Button>
              </FramePanel>
              <FrameFooter>
                <p className="text-muted-foreground text-sm">Footer</p>
              </FrameFooter>
            </Frame>
          </div>

          {/* Right Sidebar */}
          <div className="pointer-events-auto absolute right-2 top-0 h-full pb-2">
            <Frame className="w-80 h-full border bg-background/80 backdrop-blur-sm">
              <FramePanel className="layout-fill">
                <SecondaryAsideWidget />
              </FramePanel>
              <FrameFooter>
                <p className="text-muted-foreground text-sm">Footer</p>
              </FrameFooter>
            </Frame>
          </div>
        </div>
      </div>
    </UIView>
  );
}
