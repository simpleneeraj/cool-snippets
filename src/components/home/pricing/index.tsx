import React from 'react';
import { plans } from './plans';
import { Tab, Tabs } from '@heroui/react';
import UIView from '@/app-kit/source/UIView';
import PricingCard, { CardType } from './cards';
import UISpotlight from '@/app-kit/components/UISpotlight';

type PricingSectionProps = object;

const PricingSection: React.FC<PricingSectionProps> = ({}) => {
  return (
    <div className="flex items-center justify-center relative z-10">
      <div className="flex flex-col items-center gap-8">
        <UIView>
          <Tabs>
            <Tab key="monthly" title="Monthly" />
            <Tab key="yearly" title="Yearly – 15% off" />
          </Tabs>
        </UIView>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UISpotlight
            className="absolute top-0 left-[20%] transform rotate-15 scale-150 opacity-50"
            fill="#cdaff5"
          />
          <UISpotlight
            className="absolute top-0 left-[60%] transform"
            fill="#8290fd"
          />
          {plans.map((item, index) => (
            <PricingCard
              key={index}
              type={index === 1 ? CardType.FILLED : CardType.BORDERED}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
