import FeatureCard from '@/app-kit/components/UIFeatureCard';

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
    icon: 'solar:code-square-line-duotone',
  },
  {
    title: 'Effortless Code Sharing',
    description:
      'Share snippets as easily as copying and pasting, with extra flair.',
    icon: 'solar:share-circle-line-duotone',
  },
  {
    title: 'Multi-Language Support',
    description: 'From Python to JavaScript, CrystalCode has you covered.',
    icon: 'solar:atom-line-duotone',
  },
  {
    title: 'Fun Themes',
    description: 'Pick colors and designs that you like.',
    icon: 'solar:palette-line-duotone',
  },
  {
    title: 'Gaussian Blur',
    description: 'Beautiful blur effects for a sleek and modern look.',
    icon: 'solar:monitor-line-duotone',
  },
  {
    title: 'Colorful Code',
    description: 'Your code looks great with smart highlights.',
    icon: 'solar:ghost-smile-line-duotone',
  },
  {
    title: 'Snippets Management',
    description: 'Organize and keep track of your snippets easily.',
    icon: 'solar:folder-line-duotone',
  },
  {
    title: 'Undo Anytime',
    description: 'Go back and fix changes with version history.',
    icon: 'solar:history-line-duotone',
  },

  {
    title: 'Save in the Cloud',
    description: 'Your code is always safe and easy to access.',
    icon: 'solar:cloud-line-duotone',
  },
  {
    title: 'Community',
    description: 'Join a huge community of passionate coders and creators.',
    icon: 'solar:users-group-rounded-line-duotone',
  },
  {
    title: 'Affordable Plans',
    description: 'CrystalCode offers unmatched value with plans for everyone.',
    icon: 'solar:dollar-minimalistic-line-duotone',
  },
  {
    title: 'Not Just a Tool',
    description: 'Crystal Code is your buddy for coding.',
    icon: 'solar:heart-line-duotone',
  },
];
