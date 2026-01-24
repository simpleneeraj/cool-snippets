'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import UIView from '@/app-kit/source/UIView';
import Content from '@/markdown/privacy.mdx';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import UIAuraBox from '@/app-kit/components/UIAuraBox';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';
import { MynauiChevronDownWaves } from '@/app-kit/icons/MynauiChevronDownWaves';

type PrivacyClientProps = object;

const PrivacyClient: React.FC<PrivacyClientProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Privacy Policy"
        description="Learn how we keep your data safe and respect your privacy. Get all the details about our commitment to protecting your personal information."
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('details-section', 100)}
          >
            Read Our Privacy Policy
            <MynauiChevronDownWaves className="flex-none outline-hidden h-5 w-5" />
          </UIAnimatedButton>
        }
      />
      <UIAuraBox
        id="details-section"
        className="z-50 relative mx-auto w-full px-2 max-w-(--breakpoint-lg) p-4 overflow-hidden sm:overflow-visible my-4 sm:my-8"
      >
        <UIView className={cn('prose-sm dark:prose-invert rounded-xl')}>
          <Content />
        </UIView>
      </UIAuraBox>
    </UIView>
  );
};

export default PrivacyClient;
