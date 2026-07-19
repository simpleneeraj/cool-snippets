import React from 'react';
import { keepSelectionProps } from '@features/studio/selection-manager';
import dynamic from 'next/dynamic';
import NotFound from './not-found';
import { useSegment } from '@features/studio/store/segment';
import UIView from '@shared/uikit/UIView';
import { SEGMENT_SCREEN } from '@shared/types/enums';
import { motion, AnimatePresence, easeInOut } from 'motion/react';
import { Frame, FrameFooter, FramePanel } from '@shared/ui/frame';

const EditScreens = dynamic(() => import('@features/studio/panels/edit'));
const BackgroundScreens = dynamic(
  () => import('@features/studio/panels/background'),
);
const SettingsScreen = dynamic(
  () => import('@features/studio/panels/settings'),
);
const IconsScreen = dynamic(() => import('@features/studio/panels/icons'));
const MoreFeatures = dynamic(() => import('@features/studio/panels/features'));
const AIScreen = dynamic(() => import('@features/studio/panels/ai'));

function SecondaryAsideWidget() {
  const { segment } = useSegment((state) => state);

  const DynamicScreen = React.useMemo(() => {
    switch (segment.screen) {
      case SEGMENT_SCREEN.EDIT:
        return <EditScreens />;
      case SEGMENT_SCREEN.BACKGROUNDS:
        return <BackgroundScreens />;
      case SEGMENT_SCREEN.SETTINGS:
        return <SettingsScreen />;
      case SEGMENT_SCREEN.AI:
        return <AIScreen />;
      case SEGMENT_SCREEN.ICONS:
        return <IconsScreen />;
      case SEGMENT_SCREEN.MORE:
        return <MoreFeatures />;
      default:
        return <NotFound />;
    }
  }, [segment.screen]);

  return (
    <div
      {...keepSelectionProps}
      className="pointer-events-auto absolute right-2 top-0 h-full py-2"
    >
      <Frame className="w-80 h-full border bg-background/80 backdrop-blur-sm">
        <FramePanel className="layout-fill p-0">
          <AnimatePresence mode="wait">
            <UIView className="layout-fill">
              <motion.div
                key={segment.screen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="layout-scroll"
                {...easeInOut}
              >
                {DynamicScreen}
              </motion.div>
            </UIView>
          </AnimatePresence>
        </FramePanel>
        <FrameFooter>
          <p className="text-muted-foreground text-sm">Footer</p>
        </FrameFooter>
      </Frame>
    </div>
  );
}

export default SecondaryAsideWidget;
