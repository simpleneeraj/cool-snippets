'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Section from '@/components/section';
import UIView from '@/ui-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import FaqSection from '@/components/home/faq';
import { scrollToTarget } from '@/utils/elements';
import PricingSection from '@/components/home/pricing';
import { UIAnimatedButton } from '@/ui-kit/components/UIAnimatedButton';

type PricingProps = object;

const PricingClient: React.FC<PricingProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Affordable Plans"
        description="Choose the perfect plan for your needs. Stay ahead with our flexible pricing options and premium features."
        startContent={
          <UIAnimatedButton
            duration={2}
            onClick={() => scrollToTarget('PRICING', 100)}
            className="flex items-center gap-2 text-sm text-default-500"
          >
            Explore Pricing Plans
            <Icon
              className="flex-none outline-none h-5 w-5"
              icon="mynaui:chevron-down-waves"
            />
          </UIAnimatedButton>
        }
      />
      <UIView id="PRICING">
        <PricingSection />
      </UIView>
      <Section
        title="FAQs"
        description="Got Questions? We've Got Answers – Everything You Need to Know About Crystal Code!"
      />
      <FaqSection />
      <span className="pb-16" />
    </UIView>
  );
};

export default PricingClient;
