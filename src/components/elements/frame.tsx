import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';
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
  accordion?: boolean;
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

export const FrameAccordion = ({
  label,
  children,
  divider = true,
  className,
  labelPlacement = 'outside-left',
  endContent,
  accordion = false,
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
          <UIView className="w-full flex items-center justify-between cursor-pointer">
            <label className="font-medium text-tiny text-default-600 min-w-12">
              {label}
            </label>
            {endContent}
          </UIView>
        )}
        <motion.div
          initial={accordion ? { height: 0, opacity: 0 } : false}
          animate={
            accordion
              ? { height: 'auto', opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden"
        >
          {children}
        </motion.div>
      </UIView>
      {divider && <UIDivider className="bg-default-100" />}
    </React.Fragment>
  );
};
