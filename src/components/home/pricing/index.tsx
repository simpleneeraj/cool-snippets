import React from 'react';
import json from './data.json';
import PricingCard, { CardType } from './cards';
import UISpotlight from '@/app-kit/components/UISpotlight';

type PricingSectionProps = object;

const PricingSection: React.FC<PricingSectionProps> = ({}) => {
  return (
    <div className="flex items-center  justify-center relative">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UISpotlight
            className="absolute top-0 left-[20%] transform rotate-[15deg] scale-150 opacity-50"
            fill="#cdaff5"
          />
          <UISpotlight
            className="absolute top-0 left-[60%] transform"
            fill="#8290fd"
          />
          {json.map((item, index) => (
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
