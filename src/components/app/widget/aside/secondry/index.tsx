'use client';

import React from 'react';
import Screens from './screens';
import useBoundStore from '@/store';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import { BottomControllerWidget } from '../controller-segment';

export const SecondryAsideWidget = () => {
  const { bottomTab, onChangeTab } = useBoundStore((state) => state);

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
export default SecondryAsideWidget;
