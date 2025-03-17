'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';

type TemplatesProps = object;

const TemplatesClient: React.FC<TemplatesProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Explore Templates"
        description="Browse our library of ready-made templates designed to make your work easier and faster."
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('templates-section')}
          >
            View Templates
            <Icon
              className="flex-none outline-none h-5 w-5"
              icon="mynaui:chevron-down-waves"
            />
          </UIAnimatedButton>
        }
      />
    </UIView>
  );
};

export default TemplatesClient;
