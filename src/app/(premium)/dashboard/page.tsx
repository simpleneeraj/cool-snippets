'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Card } from '@/app-kit/ui/card';
import { Badge } from '@/app-kit/ui/badge';
import { cn } from '@/lib/utils';

type DashboardProps = object;

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <UIView className="p-4 h-full">
      <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data.map(
          (
            { title, value, change, changeType, iconName, trendChipPosition },
            index,
          ) => (
            <Card
              key={index}
              className="border border-transparent dark:border-muted"
            >
              <div className="flex p-4">
                <div
                  className={cn(
                    'mt-1 flex h-8 w-8 items-center justify-center rounded-md',
                    {
                      'bg-emerald-500/10': changeType === 'positive',
                      'bg-amber-500/10': changeType === 'neutral',
                      'bg-destructive/10': changeType === 'negative',
                    },
                  )}
                >
                  {/* {changeType === 'positive' ? (
                    <Icon className="text-emerald-500" icon={iconName} width={20} />
                  ) : changeType === 'neutral' ? (
                    <Icon className="text-amber-500" icon={iconName} width={20} />
                  ) : (
                    <Icon className="text-destructive" icon={iconName} width={20} />
                  )} */}
                </div>

                <div className="flex flex-col gap-y-2">
                  <dt className="mx-4 text-sm font-medium text-muted-foreground">
                    {title}
                  </dt>
                  <dd className="px-4 text-2xl font-semibold text-foreground">
                    {value}
                  </dd>
                </div>

                <Badge
                  variant="outline"
                  className={cn(
                    'absolute right-4 rounded-sm text-[0.65rem] font-semibold',
                    {
                      'top-4': trendChipPosition === 'top',
                      'bottom-4': trendChipPosition === 'bottom',
                    },
                    changeType === 'positive' &&
                      'border-emerald-500/30 bg-emerald-500/10 text-emerald-600',
                    changeType === 'neutral' &&
                      'border-amber-500/30 bg-amber-500/10 text-amber-600',
                    changeType === 'negative' &&
                      'border-destructive/30 bg-destructive/10 text-destructive',
                  )}
                >
                  {change}
                </Badge>
              </div>

              {/* <div className="bg-muted">
                <Button
                  fullWidth
                  className="flex justify-start text-xs text-muted-foreground data-pressed:scale-100"
                  radius="none"
                  variant="light"
                >
                  View All
                </Button>
              </div> */}
            </Card>
          ),
        )}
      </dl>
    </UIView>
  );
};

export default Dashboard;

const data = [
  {
    title: 'Total Users',
    value: '5,400',
    change: '33%',
    changeType: 'positive',
    trendChipPosition: 'top',
    iconName: 'solar:users-group-rounded-linear',
  },
  {
    title: 'Total Sales',
    value: '$15,400',
    change: '0.0%',
    changeType: 'neutral',
    trendChipPosition: 'top',
    iconName: 'solar:wallet-money-outline',
  },
  {
    title: 'Net Profit',
    value: '$10,400',
    change: '3.3%',
    changeType: 'negative',
    trendChipPosition: 'top',
    iconName: 'solar:hand-money-linear',
  },
];
