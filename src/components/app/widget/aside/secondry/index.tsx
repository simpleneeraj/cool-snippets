'use client';

import React from 'react';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import { BottomControllerWidget } from '../controller-segment';
import ScreenEdit from './screen';

export const SecondryAsideWidget = ({ children }: React.PropsWithChildren) => {
  return (
    <UIView className="p-2 z-50 flex flex-col flex-1 gap-1 max-w-widget">
      <UICard className="flex flex-col flex-1">
        <UIView className="scroll-content overflow-auto">
          <ScreenEdit />
        </UIView>
      </UICard>
      <BottomControllerWidget />
    </UIView>
  );
};
export default SecondryAsideWidget;
