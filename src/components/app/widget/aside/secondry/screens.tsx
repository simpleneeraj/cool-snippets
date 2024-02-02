import React from 'react';
import dynamic from 'next/dynamic';
import UIView from '@/ui-kit/source/UIView';
import { BOTTOM_SEGMENT_TABS } from '@/typings/enums';
import { motion, AnimatePresence } from 'framer-motion';

// Import dynamic components
const EditScreens = dynamic(() => import('../edit-screens'));
const BackgroundScreens = dynamic(() => import('../background-screens'));
const ElementsScreen = dynamic(() => import('../elements'));
const IconsScreen = dynamic(() => import('../icons'));
const MoreFeatures = dynamic(() => import('../more-features'));

type ScreensTypes = {
  activeTab: BOTTOM_SEGMENT_TABS;
};

const transition = { duration: 0.2, ease: 'easeInOut' };

function Screens({ activeTab }: ScreensTypes) {
  const DynamicScreen = React.useMemo(() => {
    switch (activeTab) {
      case BOTTOM_SEGMENT_TABS.EDIT:
        return <EditScreens />;
      case BOTTOM_SEGMENT_TABS.BACKGROUNDS:
        return <BackgroundScreens />;
      case BOTTOM_SEGMENT_TABS.ELEMENTS:
        return <ElementsScreen />;
      case BOTTOM_SEGMENT_TABS.ICONS:
        return <IconsScreen />;
      case BOTTOM_SEGMENT_TABS.MORE:
        return <MoreFeatures />;
      default:
        return (
          <UIView className="h-56 flex items-center justify-center">
            <p className="p-2 text-default-400 text-center">
              Screen Not Found!
            </p>
          </UIView>
        );
    }
  }, [activeTab]);

  return (
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
  );
}

export default Screens;
