'use client';
import React from 'react';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import { PrimaryControllerWidget } from '../controller-segment';
import TemplatesPreview from './templates-preview';

/**
 * Themes and templates
 * @returns
 */
const PrimaryAsideWidget = () => {
  return (
    <UIView className="p-2 z-50 flex flex-col flex-1 max-w-widget-sm">
      <UICard className="flex flex-col flex-1">
        <UIView className="p-1 flex">
          <PrimaryControllerWidget />
        </UIView>
        <UIView className="flex-1 p-1 scroll-content overflow-auto">
          <TemplatesPreview />
          {/* <LayersPreview /> */}
        </UIView>
        <UIView className="bg-default-100 bg-opacity-50 p-2 flex items-center gap-2 justify-center">
          <UIIconButton size="sm" isIconOnly radius={'full'}>
            S
          </UIIconButton>
          <UIIconButton size="sm" isIconOnly radius={'full'}>
            M
          </UIIconButton>
        </UIView>
      </UICard>
    </UIView>
  );
};

export default PrimaryAsideWidget;
