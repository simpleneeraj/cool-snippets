import React from 'react';
import dynamic from 'next/dynamic';
import NotFound from './not-found';
import { SEGMENT_SCREEN } from '@/typings/enums';
import { motion, AnimatePresence } from 'framer-motion';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import AIScreen from '@/components/app/screens/ai';

// Import dynamic components
const EditScreens = dynamic(() => import('@/components/app/screens/edit'));
const BackgroundScreens = dynamic(
  () => import('@/components/app/screens/background')
);
const ElementsScreen = dynamic(
  () => import('@/components/app/screens/elements')
);
// const IconsScreen = dynamic(() => import('@/components/app/icons'));
const MoreFeatures = dynamic(() => import('@/components/app/screens/features'));

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
      case SEGMENT_SCREEN.ELEMENTS:
        return <ElementsScreen />;
      case SEGMENT_SCREEN.ICONS:
        return <AIScreen />;
      case SEGMENT_SCREEN.MORE:
        return <MoreFeatures />;
      default:
        return <NotFound />;
    }
  }, [activeTab]);

  return (
    <UICard className="flex flex-col flex-1">
      <UIView className="scroll-content flex-1 flex flex-col overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex flex-col flex-1"
          >
            {DynamicScreen}
          </motion.div>
        </AnimatePresence>
      </UIView>
    </UICard>
  );
}

export default Screens;
