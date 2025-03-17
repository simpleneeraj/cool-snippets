import React from 'react';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';
import UICard from '@/app-kit/source/UICard';
import UIView from '@/app-kit/source/UIView';
import { SEGMENT_SCREEN } from '@/typings/enums';
import UIButton from '@/app-kit/source/UIButton/button';
import UISegmentedControl from '@/app-kit/source/UISegmentedControl';
import UISegmentButton from '@/app-kit/source/UISegmentedControl/button';

type BottomControllerWidgetTypes = {
  value: SEGMENT_SCREEN;
  onSelect: (value: SEGMENT_SCREEN) => void;
};

export const PrimaryControllerWidget = () => {
  return (
    <UISegmentedControl fullWidth size="sm">
      <UISegmentButton
        title={
          <UIView className="flex items-center gap-2">
            <Icon
              className="text-base"
              icon={'solar:bookmark-square-minimalistic-line-duotone'}
            />
            Templates
          </UIView>
        }
      />
      <UISegmentButton
        title={
          <UIView className="flex items-center gap-2">
            <Icon className="text-base" icon={'solar:layers-line-duotone'} />
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
              'h-full flex flex-col gap-0 items-center min-w-14 max-w-10',
              tab.value === value ? 'text-opacity-100' : 'text-opacity-50'
            )}
            onPress={() => onSelect(tab.value)}
          >
            {<Icon icon={tab.icon} className="h-[18px] w-[18px]" />}
            <span className="text-[10px]">{tab.name}</span>
          </UIButton>
        ))}
      </UIView>
    </UICard>
  );
};

interface Tab {
  name: string;
  value: SEGMENT_SCREEN;
  icon: string;
}

const tabs: Tab[] = [
  {
    name: 'Edit',
    value: SEGMENT_SCREEN.EDIT,
    icon: 'solar:pen-2-line-duotone',
  },
  {
    name: 'Images',
    value: SEGMENT_SCREEN.BACKGROUNDS,
    icon: 'solar:gallery-line-duotone',
  },
  {
    name: 'Icons',
    value: SEGMENT_SCREEN.ICONS,
    icon: 'solar:expressionless-circle-line-duotone',
  },
  {
    name: 'Settings',
    value: SEGMENT_SCREEN.SETTINGS,
    icon: 'solar:settings-minimalistic-line-duotone',
  },
  {
    name: 'More',
    value: SEGMENT_SCREEN.MORE,
    icon: 'solar:menu-dots-circle-line-duotone',
  },
];
