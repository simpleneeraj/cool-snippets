import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <UIView className="h-full flex items-center justify-center flex-col text-muted-foreground">
      <span className="border border-border rounded-full p-2 ">
        <AlertCircle />
      </span>
      <p className="p-2 text-center">Screen Not Found!</p>
    </UIView>
  );
};
export default NotFound;
