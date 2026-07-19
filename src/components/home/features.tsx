import FeatureCard from '@/app-kit/components/UIFeatureCard';
import { SolarAtomLineDuotone } from '@/app-kit/icons/features/SolarAtomLineDuotone';
import { SolarCodeSquareLineDuotone } from '@/app-kit/icons/features/SolarCodeSquareLineDuotone';
import { SolarGhostSmileLineDuotone } from '@/app-kit/icons/features/SolarGhostSmileLineDuotone';
import { SolarHeartLineDuotone } from '@/app-kit/icons/features/SolarHeartLineDuotone';
import { SolarHistoryLineDuotone } from '@/app-kit/icons/features/SolarHistoryLineDuotone';
import { SolarPaletteLineDuotone } from '@/app-kit/icons/features/SolarPaletteLineDuotone';
import { SolarRadialBlurLineDuotone } from '@/app-kit/icons/features/SolarRadialBlurLineDuotone';
import { SolarUsersGroupTwoRoundedLineDuotone } from '@/app-kit/icons/features/SolarUsersGroupTwoRoundedLineDuotone';

type FeaturesSectionProps = object;

const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

export default FeaturesSection;

// Exactly 8 entries — UIFeatureCard's border logic assumes two rows of four.
const features = [
  {
    title: 'Designed for Developers',
    description:
      'Built for coders, creators, and problem-solvers who push the limits.',
    icon: SolarCodeSquareLineDuotone,
  },
  {
    title: 'Multi-Language Support',
    description:
      'From Python to JavaScript, every language you write is covered.',
    icon: SolarAtomLineDuotone,
  },
  {
    title: 'Fun Themes',
    description: 'Pick colors and designs that you like.',
    icon: SolarPaletteLineDuotone,
  },
  {
    title: 'Gaussian Blur',
    description: 'Beautiful blur effects for a sleek and modern look.',
    icon: SolarRadialBlurLineDuotone,
  },
  {
    title: 'Colorful Code',
    description: 'Your code looks great with smart highlights.',
    icon: SolarGhostSmileLineDuotone,
  },
  {
    title: 'Undo Anytime',
    description: 'Go back and fix changes with version history.',
    icon: SolarHistoryLineDuotone,
  },
  {
    title: 'Built in the Open',
    description:
      'MIT licensed and public on GitHub. Open an issue, send a patch, or fork it.',
    icon: SolarUsersGroupTwoRoundedLineDuotone,
  },
  {
    title: 'Free, No Catch',
    description:
      'Every theme and export option unlocked. No account, no paywall.',
    icon: SolarHeartLineDuotone,
  },
];
