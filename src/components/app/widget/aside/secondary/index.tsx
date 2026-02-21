import React from 'react';
import dynamic from 'next/dynamic';
import NotFound from './not-found';
import { useSegment } from '@/store/segment';
import UIView from '@/app-kit/source/UIView';
import { SEGMENT_SCREEN } from '@/typings/enums';
import { motion, AnimatePresence, easeInOut } from 'motion/react';

const EditScreens = dynamic(() => import('@/components/app/screens/edit'));
const BackgroundScreens = dynamic(
  () => import('@/components/app/screens/background'),
);
const SettingsScreen = dynamic(
  () => import('@/components/app/screens/settings'),
);
const IconsScreen = dynamic(() => import('@/components/app/screens/icons'));
const MoreFeatures = dynamic(() => import('@/components/app/screens/features'));
const AIScreen = dynamic(() => import('@/components/app/screens/ai'));

function SecondaryAsideWidget() {
  const { segment } = useSegment((state) => state);

  // const DynamicScreen = React.useMemo(() => {
  //   switch (segment.screen) {
  //     case SEGMENT_SCREEN.EDIT:
  //       return <EditScreens />;
  //     case SEGMENT_SCREEN.BACKGROUNDS:
  //       return <BackgroundScreens />;
  //     case SEGMENT_SCREEN.SETTINGS:
  //       return <SettingsScreen />;
  //     case SEGMENT_SCREEN.AI:
  //       return <AIScreen />;
  //     case SEGMENT_SCREEN.ICONS:
  //       return <IconsScreen />;
  //     case SEGMENT_SCREEN.MORE:
  //       return <MoreFeatures />;
  //     default:
  //       return <NotFound />;
  //   }
  // }, [segment.screen]);

  return (
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
          <BackgroundScreens />
          <EditScreens />
        </motion.div>
      </UIView>
    </AnimatePresence>
  );
}

export default SecondaryAsideWidget;
