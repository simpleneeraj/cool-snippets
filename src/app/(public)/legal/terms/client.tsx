'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import Content from '@/markdown/terms-of-service.mdx';
import UIAuraBox from '@/app-kit/components/UIAuraBox';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';
import { MynauiChevronDownWaves } from '@/app-kit/icons/MynauiChevronDownWaves';

type TermsClientProps = object;

const TermsClient: React.FC<TermsClientProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Terms and Conditions"
        description="Review the terms and conditions for using our service. Understand your rights, responsibilities, and legal guidelines."
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-muted-foreground"
            onClick={() => scrollToTarget('details-section', 100)}
          >
            Read Our Terms
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

export default TermsClient;
