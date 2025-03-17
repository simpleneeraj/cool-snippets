import React from 'react';
import dynamic from 'next/dynamic';
import NotFound from './not-found';
import UICard from '@/app-kit/source/UICard';
import UIView from '@/app-kit/source/UIView';
import { SEGMENT_SCREEN } from '@/typings/enums';
import { motion, AnimatePresence } from 'motion/react';

const EditScreens = dynamic(() => import('@/components/app/screens/edit'));
const BackgroundScreens = dynamic(
  () => import('@/components/app/screens/background')
);
const SettingsScreen = dynamic(
  () => import('@/components/app/screens/settings')
);
const IconsScreen = dynamic(() => import('@/components/app/screens/icons'));
const MoreFeatures = dynamic(() => import('@/components/app/screens/features'));
const AIScreen = dynamic(() => import('@/components/app/screens/ai'));

type ScreensTypes = {
  activeTab: SEGMENT_SCREEN;
};

const transition = { duration: 0.2, ease: 'easeInOut' };

function Screens({ activeTab }: ScreensTypes) {
  const DynamicScreen = React.useMemo(() => {
    switch (activeTab) {
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
  }, [activeTab]);

  return (
    <UICard className="flex flex-col flex-1">
      <UIView className="flex-1 flex flex-col overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex flex-col"
          >
            {DynamicScreen}
          </motion.div>
        </AnimatePresence>
      </UIView>
    </UICard>
  );
}

export default Screens;
