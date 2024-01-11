/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import CardComponent from '../elements/card';
import UIButton from '@/ui-kit/source/UIButton/button';

const PrimaryPreview = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1">
      <CardComponent name="Icon Button" transparent>
        <UIView className="flex items-center gap-1">
          <UIButton>I</UIButton>
          <UIButton>C</UIButton>
          <UIButton>O</UIButton>
          <UIButton>N</UIButton>
        </UIView>
      </CardComponent>
    </div>
  );
};
export default PrimaryPreview;
