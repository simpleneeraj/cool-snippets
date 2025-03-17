'use client';

import React from 'react';
import Screens from './screens';
import UIView from '@/app-kit/source/UIView';
import { useSegment } from '@/store/segment';
import { BottomControllerWidget } from '../controller-segment';

export const SecondaryAsideWidget = () => {
  const { segment, onChangeSegment } = useSegment((state) => state);

  return (
    <UIView className="p-2 z-50 flex flex-col flex-1 gap-1 min-w-widget-md">
      <Screens activeTab={segment.screen} />
      <BottomControllerWidget
        value={segment.screen}
        onSelect={(value) => onChangeSegment('screen', value)}
      />
    </UIView>
  );
};
export default SecondaryAsideWidget;
