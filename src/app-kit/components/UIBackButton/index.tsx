import React from 'react';
import UIIconButton from '@/app-kit/source/UIButton/icon';
import ChevronLeftIcon from '@/app-kit/icons/ChevronLeftIcon';

type UIBackButtonProps = {} & React.ComponentProps<typeof UIIconButton>;

const UIBackButton = (props: UIBackButtonProps) => {
  return (
    <UIIconButton
      isIconOnly
      size={'sm'}
      radius={'sm'}
      variant={'light'}
      {...props}
    >
      <ChevronLeftIcon />
    </UIIconButton>
  );
};
export default UIBackButton;
