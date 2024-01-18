import React from 'react';
import { twMerge } from 'tailwind-merge';
import UIView from '@/ui-kit/source/UIView';
import UIDivider from '@/ui-kit/source/UIDivider';
import { Card, CardHeader } from '@nextui-org/react';

type FrameProps = {
  title: string;
  endContent?: React.ReactNode;
} & React.PropsWithChildren;

export const Frame = ({ title, children, endContent }: FrameProps) => {
  return (
    <Card radius="none" className="relative bg-transparent shadow-none">
      <CardHeader className="sticky top-0 flex gap-1 py-2 bg-default-100">
        <div className="flex-1 flex item-center justify-between">
          <p className="text-tiny">{title}</p>

          {endContent}
        </div>
      </CardHeader>
      {children}
    </Card>
  );
};
{
  /* <UIButton
              size="sm"
              radius="none"
              variant="light"
              disableRipple
              className="p-0 h-auto min-w-fit text-tiny text-default-600"
            >
              Reset
            </UIButton> */
}

type FrameItemProps = {
  label?: string;
  divider?: boolean;
  className?: string;
} & React.PropsWithChildren;

export const FrameItem = ({
  label,
  children,
  divider = true,
  className,
}: FrameItemProps) => {
  return (
    <React.Fragment>
      <UIView
        className={twMerge(
          `flex items-center px-2 py-3 gap-5 justify-between`,
          className
        )}
      >
        {label && (
          <label className="text-tiny text-default-600 min-w-10">{label}</label>
        )}
        {children}
      </UIView>
      {divider && <UIDivider className="bg-default-100" />}
    </React.Fragment>
  );
};
