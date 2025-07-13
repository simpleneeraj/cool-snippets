import { SolarBoltCircleLineDuotone } from '@/app-kit/icons/SolarBoltCircleLineDuotone';
import { SolarCodeCircleLineDuotone } from '@/app-kit/icons/SolarCodeCircleLineDuotone';
import { SolarStarCircleLineDuotone } from '@/app-kit/icons/SolarStarCircleLineDuotone';

export const plans = [
  {
    visual: {
      icon: SolarCodeCircleLineDuotone,
      className: 'h-7 w-7 text-default-500',
    },
    name: 'Free',
    description: 'Basic plan with limited access. Requires signup.',
    price: {
      unit: 'month',
      amount: 0,
      offer: 'Free',
    },
    features: [
      {
        label: 'Access to basic code snippet generation',
      },
      {
        label: 'Limited customization options',
      },
      {
        label: 'Community support',
      },
      {
        label: 'Basic color themes',
      },
      {
        label: 'Watermarked code snippets',
      },
    ],
  },
  {
    visual: {
      icon: SolarBoltCircleLineDuotone,
      className: 'h-7 w-7 text-default-500',
    },
    name: 'Pro',
    description: 'Unlimited access except some features.',
    price: {
      unit: 'month',
      amount: 9,
      offer: '10% discount for yearly plan',
    },
    features: [
      {
        label: 'Unlimited code snippet generation',
      },
      {
        label: 'Advanced customization options',
      },
      {
        label: 'Priority support',
      },
      {
        label: 'Access to exclusive color palettes',
      },
      {
        label: 'Remove watermarks from snippets',
      },
      {
        label: 'Export snippets in HD formats (PNG, SVG)',
      },
      {
        label: 'Early access to new features',
      },
    ],
  },
  {
    visual: {
      icon: SolarStarCircleLineDuotone,
      className: 'h-7 w-7 text-default-500',
    },
    name: 'Premium',
    description: 'Includes AI and all features from other plans.',
    price: {
      unit: 'month',
      amount: 25,
      offer: '15% discount for yearly plan',
    },
    features: [
      {
        label: 'All Pro features included',
      },
      {
        label: 'AI-assisted code generation',
      },
      {
        label: 'Exclusive premium templates',
      },
      {
        label: 'Custom branding options',
      },
      {
        label: 'Real-time AI to improving code snippets',
      },
    ],
  },
];
