import React from 'react';
import { Button, Card, cn } from '@heroui/react';
import UIMeteors from '@/app-kit/components/UIMeteors';
import { ProiconsArrowReply } from '@/app-kit/icons/ProiconsArrowReply';
import { SolarCheckCircleLineDuotone } from '@/app-kit/icons/SolarCheckCircleLineDuotone';

export enum CardType {
  BORDERED = 'bordered',
  FILLED = 'filled',
}

type Feature = {
  label: string;
};

type PricingCardProps = {
  type: CardType;
  name: string;
  description: string;
  price: {
    unit: string;
    amount: number | string;
    offer?: string;
  };
  features: Feature[];
  visual: {
    icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
    className: string;
  };
};

const PricingCard: React.FC<PricingCardProps> = ({
  type,
  name,
  description,
  price,
  features,
  visual,
}) => {
  const isFilled = type === CardType.FILLED;

  const formatPrice = (amount: number | string) => {
    if (typeof amount === 'number') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    }
    return amount;
  };
  return (
    <Card
      radius="lg"
      className={cn(
        'shadow-2xl justify-between border-none p-1',
        isFilled
          ? 'bg-gradient-to-r from-lavender-frost to-periwinkle-glow'
          : 'bg-transparent'
      )}
    >
      <div
        className={cn(
          'flex flex-1 gap-1 text-sm rounded-full text-primary-foreground items-center justify-center py-4 relative',
          isFilled ? 'opacity-1' : 'opacity-0'
        )}
      >
        {isFilled && (
          <React.Fragment>
            <UIMeteors />
            <ProiconsArrowReply className="flex-none outline-none h-4 w-4 -rotate-90" />
            <p>Best Deals</p>
          </React.Fragment>
        )}
      </div>
      <div className="bg-default-50/90 rounded-2xl backdrop-blur border border-default-200">
        <div className="p-3 z-10 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex flex-col items-start gap-2 pb-6">
          <h2 className="text-xl font-medium text-primary-foreground flex items-center gap-1">
            <visual.icon className={visual.className} />
            {name}
          </h2>
          <p className="text-medium text-primary-foreground/70">
            {description}
          </p>
        </div>
        <hr
          className="shrink-0 border-none w-full h-divider bg-primary-foreground/20"
          role="separator"
        />
        <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased justify-between">
          <div className="flex flex-col gap-8">
            <p className="flex items-baseline gap-1 pt-2">
              <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-primary-foreground">
                {formatPrice(price.amount)}
              </span>
              <span className="text-sm font-medium text-primary-foreground/50">
                /{price.unit}
              </span>
            </p>
            {price.offer && (
              <p className="text-sm font-medium text-primary-foreground/50">
                {price.offer}
              </p>
            )}
            <ul className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <SolarCheckCircleLineDuotone className="h-4 w-4 text-default-500" />
                  <p className="text-primary-foreground/70">{feature.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large">
          <Button
            fullWidth
            className={cn(
              isFilled
                ? 'bg-gradient-to-r from-lavender-frost to-periwinkle-glow'
                : ''
            )}
          >
            Get started
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PricingCard;
