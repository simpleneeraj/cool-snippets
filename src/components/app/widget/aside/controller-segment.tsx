import React from 'react';
import { twMerge } from 'tailwind-merge';
import UICard from '@/app-kit/source/UICard';
import UIView from '@/app-kit/source/UIView';
import { SEGMENT_SCREEN } from '@/typings/enums';
import UIButton from '@/app-kit/source/UIButton/button';
import UISegmentedControl from '@/app-kit/source/UISegmentedControl';
import UISegmentButton from '@/app-kit/source/UISegmentedControl/button';
import { SolarWidget5LineDuotone } from '@/app-kit/icons/SolarWidget5LineDuotone';
import { SolarLayersMinimalisticLineDuotone } from '@/app-kit/icons/SolarLayersMinimalisticLineDuotone';
import { SolarPen2LineDuotone } from '@/app-kit/icons/SolarPen2LineDuotone';
import { SolarGalleryLineDuotone } from '@/app-kit/icons/SolarGalleryLineDuotone';
import { SolarSmileCircleLineDuotone } from '@/app-kit/icons/SolarSmileCircleLineDuotone';
import { SolarMenuDotsCircleLineDuotone } from '@/app-kit/icons/SolarMenuDotsCircleLineDuotone';

type BottomControllerWidgetTypes = {
  value: SEGMENT_SCREEN;
  onSelect: (value: SEGMENT_SCREEN) => void;
};

type Tab = {
  name: string;
  value: SEGMENT_SCREEN;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

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
export const BottomControllerWidget = ({
  value,
  onSelect,
}: BottomControllerWidgetTypes) => {
  return (
    <UICard className="min-h-14 p-1">
      <UIView className="flex flex-1 justify-between">
        {tabs.map((tab) => (
          <UIButton
            disableRipple
            key={tab.value}
            variant="light"
            aria-label={tab.name}
            className={twMerge(
              'h-full flex flex-col gap-0.5 items-center min-w-14',
              tab.value === value ? 'text-opacity-100' : 'text-opacity-50'
            )}
            onPress={() => onSelect(tab.value)}
          >
            {<tab.icon className="h-5 w-5" />}
            <span className="text-tiny">{tab.name}</span>
          </UIButton>
        ))}
      </UIView>
    </UICard>
  );
};

const tabs: Tab[] = [
  {
    name: 'Edit',
    value: SEGMENT_SCREEN.EDIT,
    icon: SolarPen2LineDuotone,
  },
  {
    name: 'Images',
    value: SEGMENT_SCREEN.BACKGROUNDS,
    icon: SolarGalleryLineDuotone,
  },
  {
    name: 'Icons',
    value: SEGMENT_SCREEN.ICONS,
    icon: SolarSmileCircleLineDuotone,
  },
  // {
  //   name: 'Settings',
  //   value: SEGMENT_SCREEN.SETTINGS,
  //   icon: SolarSettingsMinimalisticLineDuotone,
  // },
  {
    name: 'More',
    value: SEGMENT_SCREEN.MORE,
    // icon: 'solar:menu-dots-circle-line-duotone',
    icon: SolarMenuDotsCircleLineDuotone,
  },
];
