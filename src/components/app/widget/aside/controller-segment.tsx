import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { SEGMENT_SCREEN } from '@/typings/enums';
import UISegmentedControl from '@/app-kit/source/UISegmentedControl';
import UISegmentButton from '@/app-kit/source/UISegmentedControl/button';
import { SolarWidget5LineDuotone } from '@/app-kit/icons/SolarWidget5LineDuotone';
import { SolarLayersMinimalisticLineDuotone } from '@/app-kit/icons/SolarLayersMinimalisticLineDuotone';
import { Tabs, TabsList, TabsTab } from '@/app-kit/ui/tabs';
import { SolarAlbumLinear } from '@/app-kit/icons/SolarAlbumLinear';
import { SolarPen2Linear } from '@/app-kit/icons/SolarPen2Linear';
import { SolarEmojiFunnySquareLinear } from '@/app-kit/icons/SolarEmojiFunnySquareLinear';
import { SolarWidgetAddLinear } from '@/app-kit/icons/SolarWidgetAddLinear';
import { useSegment } from '@/store/segment';
import { SolarGalleryWideLinear } from '@/app-kit/icons/SolarGalleryWideLinear';

type Tab = {
  name: string;
  value: SEGMENT_SCREEN;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const tabs: Tab[] = [
  {
    name: 'Edit',
    value: SEGMENT_SCREEN.EDIT,
    icon: SolarPen2Linear,
  },
  {
    name: 'Images',
    value: SEGMENT_SCREEN.BACKGROUNDS,
    icon: SolarGalleryWideLinear,
  },
  {
    name: 'Icons',
    value: SEGMENT_SCREEN.ICONS,
    icon: SolarEmojiFunnySquareLinear,
  },
  {
    name: 'Options',
    value: SEGMENT_SCREEN.MORE,
    icon: SolarWidgetAddLinear,
  },
];

export const PrimaryControllerWidget = () => {
  return (
    <UISegmentedControl fullWidth size="sm">
      <UISegmentButton
        title={
          <UIView className="flex items-center gap-2">
            <SolarWidget5LineDuotone className="size-4" />
            Templates
          </UIView>
        }
      />
      <UISegmentButton
        title={
          <UIView className="flex items-center gap-2">
            <SolarLayersMinimalisticLineDuotone className="size-5" />
            Layers
          </UIView>
        }
      />
    </UISegmentedControl>
  );
};

export const BottomControllerWidget = () => {
  const { segment, onChangeSegment } = useSegment((state) => state);
  return (
    <Tabs
      value={segment.screen}
      onValueChange={(value) => onChangeSegment('screen', value)}
    >
      <TabsList>
        {tabs.map(({ icon: Icon, value, name }) => {
          return (
            <TabsTab key={value} value={value}>
              <Icon className={`size-4`} />
              <span className="text-sm font-light">{name}</span>
            </TabsTab>
          );
        })}
      </TabsList>
    </Tabs>
  );
};
