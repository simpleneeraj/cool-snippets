import FeatureCard from '@/app-kit/components/UIFeatureCard';
import { SolarAtomLineDuotone } from '@/app-kit/icons/features/SolarAtomLineDuotone';
import { SolarCloudLineDuotone } from '@/app-kit/icons/features/SolarCloudLineDuotone';
import { SolarCodeSquareLineDuotone } from '@/app-kit/icons/features/SolarCodeSquareLineDuotone';
import { SolarDollarMinimalisticLineDuotone } from '@/app-kit/icons/features/SolarDollarMinimalisticLineDuotone';
import { SolarFolderWithFilesLineDuotone } from '@/app-kit/icons/features/SolarFolderWithFilesLineDuotone';
import { SolarGhostSmileLineDuotone } from '@/app-kit/icons/features/SolarGhostSmileLineDuotone';
import { SolarHeartLineDuotone } from '@/app-kit/icons/features/SolarHeartLineDuotone';
import { SolarHistoryLineDuotone } from '@/app-kit/icons/features/SolarHistoryLineDuotone';
import { SolarPaletteLineDuotone } from '@/app-kit/icons/features/SolarPaletteLineDuotone';
import { SolarRadialBlurLineDuotone } from '@/app-kit/icons/features/SolarRadialBlurLineDuotone';
import { SolarShareCircleLineDuotone } from '@/app-kit/icons/features/SolarShareCircleLineDuotone';
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

const features = [
  {
    title: 'Designed for Developers',
    description:
      'Built for coders, creators, and problem-solvers who push the limits.',
    icon: SolarCodeSquareLineDuotone,
  },
  {
    title: 'Effortless Code Sharing',
    description:
      'Share snippets as easily as copying and pasting, with extra flair.',
    icon: SolarShareCircleLineDuotone,
  },
  {
    title: 'Multi-Language Support',
    description: 'From Python to JavaScript, CrystalCode has you covered.',
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
    title: 'Snippets Management',
    description: 'Organize and keep track of your snippets easily.',
    icon: SolarFolderWithFilesLineDuotone,
  },
  {
    title: 'Undo Anytime',
    description: 'Go back and fix changes with version history.',
    icon: SolarHistoryLineDuotone,
  },

  {
    title: 'Save in the Cloud',
    description: 'Your code is always safe and easy to access.',
    icon: SolarCloudLineDuotone,
  },
  {
    title: 'Community',
    description: 'Join a huge community of passionate coders and creators.',
    icon: SolarUsersGroupTwoRoundedLineDuotone,
  },
  {
    title: 'Affordable Plans',
    description: 'CrystalCode offers unmatched value with plans for everyone.',
    icon: SolarDollarMinimalisticLineDuotone,
  },
  {
    title: 'Not Just a Tool',
    description: 'Crystal Code is your buddy for coding.',
    icon: SolarHeartLineDuotone,
  },
];
