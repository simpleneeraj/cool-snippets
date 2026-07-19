import FeatureCard from '@/app-kit/components/UIFeatureCard';
import {
  AtomLineDuotoneIcon,
  CodeSquareLineDuotoneIcon,
  GhostSmileLineDuotoneIcon,
  HeartLineDuotoneIcon,
  HistoryLineDuotoneIcon,
  PaletteLineDuotoneIcon,
  RadialBlurLineDuotoneIcon,
  UsersGroupTwoRoundedLineDuotoneIcon,
} from '@solar-icons/react';

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
    icon: CodeSquareLineDuotoneIcon,
  },
  {
    title: 'Multi-Language Support',
    description:
      'From Python to JavaScript, every language you write is covered.',
    icon: AtomLineDuotoneIcon,
  },
  {
    title: 'Fun Themes',
    description: 'Pick colors and designs that you like.',
    icon: PaletteLineDuotoneIcon,
  },
  {
    title: 'Gaussian Blur',
    description: 'Beautiful blur effects for a sleek and modern look.',
    icon: RadialBlurLineDuotoneIcon,
  },
  {
    title: 'Colorful Code',
    description: 'Your code looks great with smart highlights.',
    icon: GhostSmileLineDuotoneIcon,
  },
  {
    title: 'Undo Anytime',
    description: 'Go back and fix changes with version history.',
    icon: HistoryLineDuotoneIcon,
  },
  {
    title: 'Built in the Open',
    description:
      'MIT licensed and public on GitHub. Open an issue, send a patch, or fork it.',
    icon: UsersGroupTwoRoundedLineDuotoneIcon,
  },
  {
    title: 'Free, No Catch',
    description:
      'Every theme and export option unlocked. No account, no paywall.',
    icon: HeartLineDuotoneIcon,
  },
];
