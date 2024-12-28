'use client';

import React from 'react';
import HeroSection from './hero';
import UIView from '@/ui-kit/source/UIView';
import FeaturesSection from './features';
import Section from '../section';
import Testimonials from './testimonials';
import FaqSection from './faq';
import PricingSection from './pricing';
import UIFireflies from '@/ui-kit/components/UIFireflies';
import FeedSection from './feed';

type HomePageClientProps = object;

const HomePageClient: React.FC<HomePageClientProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <HeroSection />
      <UIFireflies />
      <UIView className="mx-auto w-full px-3 max-w-screen-lg">
        <Section
          title="Features"
          description="Everything You Need, Exactly Where You Need It."
        />
        <FeaturesSection />
        <Section
          title="What Our Users Say"
          description="Real Stories, Real Impact – See How Crystal Code is Changing the Game!"
        />
        <Testimonials />
        <Section
          title="Pricing"
          description="Choose the Plan That Fits You Best – Simple, Transparent, and Value-Packed!"
        />
        <PricingSection />
        <Section
          title="FAQs"
          description="Got Questions? We've Got Answers – Everything You Need to Know About Crystal Code!"
        />
        <FaqSection />

        <Section
          title="Code Snippets Showcase"
          description="Explore beautifully crafted code snippets generated effortlessly with our Crystal Code app – Simplify, Share, and Inspire!"
        />

        <FeedSection />
      </UIView>
    </UIView>
  );
};

export default HomePageClient;
