import React from 'react';
import UIView from '../UIView';
import { tv } from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';

const variants = tv({
  slots: {
    base: 'flex items-center justify-between p-2 py-1 sticky top-0 z-50 bg-default-100 bg-opacity-50 backdrop-blur-lg backdrop-saturate-100',
    heading: 'text-sm text-default-600',
    description: 'text-tiny text-default-400',
  },
});

type UIPanViewHeaderProps = {
  title: string;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: {
    base?: string;
    heading?: string;
    description?: string;
  };
};

const UIPanViewHeader = (props: UIPanViewHeaderProps) => {
  const { classNames } = props;
  const { base, description, heading } = variants();

  return (
    <UIView className={twMerge(base(), classNames?.base)}>
      <UIView className="flex items-center gap-1">
        {props?.startContent}
        <UIView className="flex flex-col">
          <h4 className={twMerge(heading(), classNames?.heading)}>
            {props?.title}
          </h4>
          {props?.description && (
            <span className={twMerge(description(), classNames?.description)}>
              {props?.description}
            </span>
          )}
        </UIView>
      </UIView>
      {props?.endContent}
    </UIView>
  );
};
export default UIPanViewHeader;
