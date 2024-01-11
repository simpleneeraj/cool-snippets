import React from 'react';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import { UIButton } from '@/ui-kit/source/UIButton';

const ControllerSegmentWidget = () => {
  return (
    <UICard className="h-14 p-[2px]">
      <UIView className="flex flex-1 justify-between">
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <i className="ki-duotone ki-underlining text-lg">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <i className="ki-duotone ki-underlining text-lg">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <i className="ki-duotone ki-underlining text-lg">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <i className="ki-duotone ki-underlining text-lg">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
          <span className="text-tiny">Edit</span>
        </UIButton>
        <UIButton
          disableRipple
          variant="light"
          className="h-full flex flex-col gap-1 items-center min-w-unit-3"
        >
          <i className="ki-duotone ki-underlining text-lg">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
          <span className="text-tiny">Edit</span>
        </UIButton>
      </UIView>
    </UICard>
  );
};
export default ControllerSegmentWidget;
