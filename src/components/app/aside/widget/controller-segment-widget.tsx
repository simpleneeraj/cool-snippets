import React from 'react';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';

const ControllerSegmentWidget = () => {
  return (
    <UICard className="h-14 p-[2px]">
      <UIView className="flex flex-1 justify-between">
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <span className="text-tiny">Edit</span>
        </UIButton>
      </UIView>
    </UICard>
  );
};
export default ControllerSegmentWidget;
