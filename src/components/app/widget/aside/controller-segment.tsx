import React from 'react';
import { SEGMENT_SCREEN } from '@shared/types/enums';
import { Tabs, TabsList, TabsTab } from '@shared/ui/tabs';
import { Pen2LinearIcon, EmojiFunnySquareLinearIcon, WidgetAddLinearIcon, GalleryWideLinearIcon } from '@solar-icons/react';
import { useSegment } from '@/store/segment';

type Tab = {
  name: string;
  value: SEGMENT_SCREEN;
  icon: React.ComponentType<any>;
};

const tabs: Tab[] = [
  {
    name: 'Edit',
    value: SEGMENT_SCREEN.EDIT,
    icon: Pen2LinearIcon,
  },
  {
    name: 'Images',
    value: SEGMENT_SCREEN.BACKGROUNDS,
    icon: GalleryWideLinearIcon,
  },
  {
    name: 'Icons',
    value: SEGMENT_SCREEN.ICONS,
    icon: EmojiFunnySquareLinearIcon,
  },
  {
    name: 'Options',
    value: SEGMENT_SCREEN.MORE,
    icon: WidgetAddLinearIcon,
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
