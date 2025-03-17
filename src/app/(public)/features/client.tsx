'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import FeaturesSection from '@/components/home/features';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';

type FeaturesProps = object;

const FeaturesClient: React.FC<FeaturesProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Key Features"
        description="Discover the powerful features that make CrystalCode the ultimate solution for developers."
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('FEATURES', 100)}
          >
            Explore Features
            <Icon
              className="flex-none outline-none h-5 w-5"
              icon="mynaui:chevron-down-waves"
            />
          </UIAnimatedButton>
        }
      />
      <UIView id="FEATURES" className="mx-auto w-full px-3 max-w-screen-lg">
        <FeaturesSection />
      </UIView>
    </UIView>
  );
};

export default FeaturesClient;
