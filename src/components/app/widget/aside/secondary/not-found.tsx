import React from 'react';
import UIView from '@/app-kit/source/UIView';
import AlertOutlineIcon from '@/app-kit/icons/AlertOutlineIcon';

const NotFound = () => {
  return (
    <UIView className="h-full flex items-center justify-center flex-col text-muted-foreground">
      <span className="border border-border rounded-full p-2 ">
        <AlertOutlineIcon />
      </span>
      <p className="p-2 text-center">Screen Not Found!</p>
    </UIView>
  );
};
export default NotFound;
