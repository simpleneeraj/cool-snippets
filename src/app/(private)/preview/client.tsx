'use client';

import React from 'react';
import PreviewHeader from './navbar';
import UIView from '@/app-kit/source/UIView';
import MaskWallpaper from '@/plugins/mask-wallpaper';
import { wallpaperOptions } from '@/components/app/share/config';

type ShareWidgetProps = object;

const PreviewSnippetClient: React.FC<ShareWidgetProps> = ({}) => {
  return (
    <UIView className="flex flex-col gap-4 relative h-screen bg-transparent">
      <PreviewHeader />
      <MaskWallpaper options={wallpaperOptions} />
      <UIView className="flex flex-col gap-2 min-h-80 border border-default-200 rounded-2xl relative"></UIView>
    </UIView>
  );
};

export default PreviewSnippetClient;
