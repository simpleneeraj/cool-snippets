'use client';

import React from 'react';
import Screens from './screens';
import useStore from '@/store';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import { BottomControllerWidget } from '../controller-segment';

export const SecondaryAsideWidget = () => {
  const { bottomTab, onChangeTab } = useStore((state) => state);

  return (
    <UIView className="p-2 z-50 flex flex-col flex-1 gap-1 max-w-widget-md">
      <UICard className="flex flex-col flex-1">
        <UIView className="scroll-content overflow-auto">
          <Screens activeTab={bottomTab} />
        </UIView>
      </UICard>
      <BottomControllerWidget value={bottomTab} onSelect={onChangeTab} />
    </UIView>
  );
};
export default SecondaryAsideWidget;
