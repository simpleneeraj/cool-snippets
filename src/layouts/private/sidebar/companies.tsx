'use client';

import React from 'react';
import appConfig from '@/constants/site';
import { Card, CardContent } from '@/app-kit/ui/card';
import { TokenBrandedCrystal } from '@/app-kit/icons/layout/TokenBrandedCrystal';

export const CompaniesDropdown = () => {
  return (
    <Card className="w-full bg-transparent shadow-none">
      <CardContent className="flex w-full flex-row items-center gap-2">
        <span className="h-10 w-10 flex items-center justify-center">
          <TokenBrandedCrystal className="h-8 w-8" />
        </span>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl m-0 text-foreground -mb-4 whitespace-nowrap font-app-serif font-light bg-linear-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text">
            {appConfig.short_name}
          </h3>
          <span className="text-xs font-medium text-muted-foreground">
            {'New York, NY'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
