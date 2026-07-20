import React from 'react';
import { keepSelectionProps } from '@features/studio/selection-manager';
import dynamic from 'next/dynamic';
import NotFound from './not-found';
import { useSegment } from '@features/studio/store/segment';
import UIView from '@shared/uikit/UIView';
import { SEGMENT_SCREEN } from '@features/studio/model/enums';
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
const AIScreen = dynamic(() => import('@features/studio/panels/ai'));

const PANEL_LABELS: Partial<Record<SEGMENT_SCREEN, string>> = {
  [SEGMENT_SCREEN.EDIT]: 'Edit',
  [SEGMENT_SCREEN.BACKGROUNDS]: 'Images',
  [SEGMENT_SCREEN.ICONS]: 'Icons',
  [SEGMENT_SCREEN.SETTINGS]: 'Settings',
  [SEGMENT_SCREEN.AI]: 'AI',
};

function SecondaryAsideWidget() {
  const { segment } = useSegment((state) => state);
  const panelLabel = PANEL_LABELS[segment.screen] ?? 'Panel';

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
          <UIView className="flex items-center justify-between gap-2 text-muted-foreground">
            <span className="text-xs font-medium">{panelLabel}</span>
            <span className="text-[11px] tracking-tight">
              ⌘Z Undo · ⇧⌥F Beautify
            </span>
          </UIView>
        </FrameFooter>
      </Frame>
    </div>
  );
}

export default SecondaryAsideWidget;
