'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';
import Content from '@/markdown/privacy.mdx';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import { UIAnimatedButton } from '@/ui-kit/components/UIAnimatedButton';

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
            <Icon
              className="flex-none outline-none h-5 w-5"
              icon="mynaui:chevron-down-waves"
            />
          </UIAnimatedButton>
        }
      />
      <UIView className={cn('prose-sm')}>
        <Content />
      </UIView>
    </UIView>
  );
};

export default PrivacyClient;
