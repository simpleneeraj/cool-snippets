'use client';

import React from 'react';
import appConfig from '@/constants/site';
import { Card, CardBody } from '@heroui/react';
import { TokenBrandedCrystal } from '@/app-kit/icons/layout/TokenBrandedCrystal';

export const CompaniesDropdown = () => {
  return (
    <Card fullWidth className="w-full bg-transparent shadow-none">
      <CardBody className="w-full flex flex-row items-center gap-2">
        <span className="h-10 w-10 flex items-center justify-center">
          <TokenBrandedCrystal className="h-8 w-8" />
        </span>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl m-0 text-default-900 -mb-4 whitespace-nowrap font-app-serif font-light bg-gradient-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text">
            {appConfig.short_name}
          </h3>
          <span className="text-xs font-medium text-default-500">
            {'New York, NY'}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};
