'use client';

import React from 'react';
import CtaSection from './cta';
import Section from '../section';
import HeroSection from './hero';
import FeaturesSection from './features';
import UIView from '@/app-kit/source/UIView';
import OpenSourceSection from './open-source';

type HomePageClientProps = object;

const HomePageClient: React.FC<HomePageClientProps> = ({}) => {
  return (
    <UIView className="flex flex-1 flex-col">
      <HeroSection />
      <UIView className="mx-auto w-full px-2 max-w-(--breakpoint-lg)">
        <Section
          title="Features"
          description="Everything You Need, Exactly Where You Need It."
        />
        <FeaturesSection />
        <Section
          title="Free and Open Source"
          description="Built in the open, MIT licensed, and funded by sponsors instead of paywalls."
        />
        <OpenSourceSection />
      </UIView>
      {/* Outside the max-w wrapper so the closing band can go full-bleed. */}
      <CtaSection />
    </UIView>
  );
};

export default HomePageClient;
