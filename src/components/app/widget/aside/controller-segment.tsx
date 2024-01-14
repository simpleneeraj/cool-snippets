import React from 'react';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import { Button, Tooltip } from '@nextui-org/react';

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
export const BottomControllerWidget = () => {
  return (
    <UICard className="min-h-14 p-[2px]">
      <UIView className="flex flex-1 justify-between">
        <Tooltip size="sm" color="primary" placement="top" content="Edit">
          <Button
            disableRipple
            variant="light"
            className="h-full flex flex-col gap-1 items-center min-w-unit-3"
          >
            <span className="text-[10px]">Edit</span>
          </Button>
        </Tooltip>
        <Button
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-[10px]">Background</span>
        </Button>
        <Button
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-[10px]">Edit</span>
        </Button>
        <Button
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-[10px]">Edit</span>
        </Button>
        <Button
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-[10px]">Edit</span>
        </Button>
      </UIView>
    </UICard>
  );
};
