/* eslint-disable @next/next/no-img-element */
'use client';

import DownloadOutline from '@/lib/icons/DownloadOutline';
import Keyboard from '@/lib/icons/Keyboard';
import CheckmarkICloud from '@/lib/icons/CheckmarkICloud';
import EllipsisHorizontal from '@/lib/icons/EllipsisHorizontal';
import UIView from '@/ui-kit/source/UIView';
import React from 'react';
import CardComponent from '../elements/card';
import { UIButton } from '@/ui-kit/source/UIButton';

const PrimaryPreview = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1">
      <CardComponent name="Icon Button" transparent>
        <UIView className="flex items-center gap-1">
          <UIButton>
            <DownloadOutline size={20} />
          </UIButton>
          <UIButton>
            <Keyboard size={20} />
          </UIButton>
          <UIButton>
            <CheckmarkICloud size={24} />
          </UIButton>
          <UIButton>
            <EllipsisHorizontal size={20} />
          </UIButton>
        </UIView>
      </CardComponent>
    </div>
  );
};
export default PrimaryPreview;
