import React from 'react';
import UIView from '../UIView';
import { tv } from '@heroui/react';

const variants = tv({
  slots: {
    container: 'flex-1 border-2 border-dotted p-4 rounded-xl',
    label: 'text-small',
  },
  variants: {
    color: {
      default: {
        container: 'border-default-400 bg-default-50',
        label: 'text-default-500',
      },
      primary: {
        container: 'border-primary-400 bg-primary-50',
        label: 'text-primary-400',
      },
      secondary: {
        container: 'border-secondary-400 bg-secondary-50',
        label: 'text-secondary-400',
      },
      success: {
        container: 'border-success-400 bg-success-50',
        label: 'text-success-400',
      },
      danger: {
        container: 'border-danger-400 bg-danger-50',
        label: 'text-danger-400',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

/**
 * Some issue i thing
 * @returns
 */
const UIFilePicker = () => {
  const { container, label } = variants({
    color: 'secondary',
  });

  return (
    <UIView className={container()}>
      <span className={label()}>Upload Images</span>
    </UIView>
  );
};
export default UIFilePicker;
