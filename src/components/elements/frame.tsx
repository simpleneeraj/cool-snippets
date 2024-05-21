import React from 'react';
import { twMerge } from 'tailwind-merge';
import UIView from '@/ui-kit/source/UIView';
import UIDivider from '@/ui-kit/source/UIDivider';
import { Card, CardHeader, tv } from '@nextui-org/react';

type FrameProps = {
  title: string;
  endContent?: React.ReactNode;
} & React.PropsWithChildren;

type FrameItemProps = {
  label?: string;
  labelPlacement?: 'outside-left' | 'outside';
  divider?: boolean;
  className?: string;
  endContent?: React.ReactNode;
} & React.PropsWithChildren;

const variants = tv({
  base: 'flex px-2 py-3',
  variants: {
    placement: {
      outside: 'flex-col gap-2',
      'outside-left': 'items-center gap-5 justify-between',
    },
  },
});

export const Frame = ({ title, children, endContent }: FrameProps) => {
  return (
    <Card
      radius="none"
      className="relative bg-transparent shadow-none"
      style={{
        overflow: 'unset',
      }}
    >
      <CardHeader className="flex gap-1 py-2 bg-default-100 sticky top-0 bg-opacity-70 backdrop-blur-lg z-30">
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

export const FrameItem = ({
  label,
  children,
  divider = true,
  className,
  labelPlacement = 'outside-left',
  endContent,
}: FrameItemProps) => {
  return (
    <React.Fragment>
      <UIView
        className={twMerge(
          variants({
            placement: labelPlacement,
          }),
          className
        )}
      >
        {label && (
          <UIView className="flex items-center justify-between">
            <label className="font-medium text-tiny text-default-600 min-w-12">
              {label}
            </label>
            {endContent}
          </UIView>
        )}
        {children}
      </UIView>
      {divider && <UIDivider className="bg-default-100" />}
    </React.Fragment>
  );
};
