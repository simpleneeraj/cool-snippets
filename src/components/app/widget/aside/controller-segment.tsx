import React from 'react';
import { twMerge } from 'tailwind-merge';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import IconsIcon from '@/ui-kit/icons/IconsIcon';
import OptionsIcon from '@/ui-kit/icons/OptionsIcon';
import { BOTTOM_SEGMENT_TABS } from '@/typings/enums';
import ElementsIcon from '@/ui-kit/icons/ElementsIcon';
import UIButton from '@/ui-kit/source/UIButton/button';
import BackgroundIcon from '@/ui-kit/icons/BackgroundIcon';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import EllipsisHorizontalIcon from '@/ui-kit/icons/EllipsisHorizontalIcon';

type BottomControllerWidgetTypes = {
  value: BOTTOM_SEGMENT_TABS;
  onSelect: (key: any, value: BOTTOM_SEGMENT_TABS) => void;
};

export const PrimaryControllerWidget = () => {
  return (
    <UISegmentedControl
      fullWidth
      size="sm"
      className="flex flex-1 justify-between"
    >
      <UISegmentButton title="Templates" />
      <UISegmentButton title="Layers" />
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
            className={twMerge(
              'h-full flex flex-col gap-0 items-center min-w-14 max-w-10',
              tab.value === value ? 'text-opacity-100' : 'text-opacity-50'
            )}
            onPress={() => onSelect('bottomTab', tab.value)}
          >
            {<tab.icon className="h-[18px] w-[18px]" />}
            <span className="text-[10px]">{tab.name}</span>
          </UIButton>
        ))}
      </UIView>
    </UICard>
  );
};

interface Tab {
  name: string;
  value: BOTTOM_SEGMENT_TABS;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const tabs: Tab[] = [
  {
    name: 'Edit',
    value: BOTTOM_SEGMENT_TABS.EDIT,
    icon: OptionsIcon,
  },
  {
    name: 'Images',
    value: BOTTOM_SEGMENT_TABS.BACKGROUNDS,
    icon: BackgroundIcon,
  },
  {
    name: 'Elements',
    value: BOTTOM_SEGMENT_TABS.ELEMENTS,
    icon: ElementsIcon,
  },
  {
    name: 'Icons',
    value: BOTTOM_SEGMENT_TABS.ICONS,
    icon: IconsIcon,
  },
  {
    name: 'More',
    value: BOTTOM_SEGMENT_TABS.MORE,
    icon: EllipsisHorizontalIcon,
  },
];
