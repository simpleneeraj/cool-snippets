'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Separator } from '@/app-kit/ui/separator';
import NeonText from '../../elements/neon';
import Glassmorphism from '../../elements/glassmorphism';

const EffectsSection = () => (
  <UIView className="flex flex-col gap-3">
    <NeonText />
    <Separator />
    <Glassmorphism />
  </UIView>
);

export default EffectsSection;
