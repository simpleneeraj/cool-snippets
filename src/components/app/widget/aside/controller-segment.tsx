import React from 'react';
import { twMerge } from 'tailwind-merge';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import { BOTTOM_SEGMENT_TABS } from '@/typings/enums';
import UIButton from '@/ui-kit/source/UIButton/button';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';

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
            {tab.icon}
            <span className="text-[10px]">{tab.name}</span>
          </UIButton>
        ))}
      </UIView>
    </UICard>
  );
};

const EllipsisHorizontalIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <circle cx="256" cy="256" r="26" />
    <circle cx="346" cy="256" r="26" />
    <circle cx="166" cy="256" r="26" />
    <path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  </svg>
);

const BackgroundIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <rect
      x="48"
      y="80"
      width="416"
      height="352"
      rx="48"
      ry="48"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="336"
      cy="176"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);

const ElementsIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
      d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
    />
  </svg>
);

const IconsIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <circle cx="184" cy="232" r="24" />
    <path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z" />
    <circle cx="328" cy="232" r="24" />
    <circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  </svg>
);
const OptionsIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
    />
    <circle
      cx="336"
      cy="128"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="176"
      cy="256"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="336"
      cy="384"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);

interface Tab {
  name: string;
  value: BOTTOM_SEGMENT_TABS;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  {
    name: 'Edit',
    value: BOTTOM_SEGMENT_TABS.EDIT,
    icon: <OptionsIcon />,
  },
  {
    name: 'Images',
    value: BOTTOM_SEGMENT_TABS.BACKGROUNDS,
    icon: <BackgroundIcon />,
  },
  {
    name: 'Elements',
    value: BOTTOM_SEGMENT_TABS.ELEMENTS,
    icon: <ElementsIcon />,
  },
  {
    name: 'Icons',
    value: BOTTOM_SEGMENT_TABS.ICONS,
    icon: <IconsIcon />,
  },
  {
    name: 'More',
    value: BOTTOM_SEGMENT_TABS.MORE,
    icon: <EllipsisHorizontalIcon />,
  },
];
