'use client';

import React from 'react';
import Screens from './screens';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import { BottomControllerWidget } from '../controller-segment';

export const SecondryAsideWidget = () => {
  return (
    <UIView className="p-2 z-50 flex flex-col flex-1 gap-1 max-w-widget">
      <UICard className="flex flex-col flex-1">
        <UIView className="scroll-content overflow-auto">
          <Screens />
        </UIView>
      </UICard>
      <BottomControllerWidget />
    </UIView>
  );
};
export default SecondryAsideWidget;
