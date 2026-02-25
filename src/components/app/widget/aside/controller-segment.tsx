import React from 'react';
import { SEGMENT_SCREEN } from '@/typings/enums';
import { Tabs, TabsList, TabsTab } from '@/app-kit/ui/tabs';
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

export const SegmentWidget = () => {
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
