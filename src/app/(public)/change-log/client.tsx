'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import UIView from '@/ui-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import { UIAnimatedButton } from '@/ui-kit/components/UIAnimatedButton';

type HeroSectionProps = object;

const ChangeLogClient: React.FC<HeroSectionProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Change Log"
        description="Stay up-to-date with all the latest features, fixes, and
                improvements. See how CrystalCode keeps getting better for you!"
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('pricing-section', 100)}
          >
            Check Out the Change Log
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

export default ChangeLogClient;
