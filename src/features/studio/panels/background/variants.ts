import { BACKGROUND_SCREEN } from '@features/studio/model/enums';

const backgroundVariants = [
  {
    label: 'Solid',
    value: BACKGROUND_SCREEN.SOLID,
    description:
      'A timeless and classic choice, representing stability and simplicity.',
    new: false,
  },
  {
    label: 'Gradients',
    value: BACKGROUND_SCREEN.GRADIENTS,
    description:
      'A dynamic blend of colors, symbolizing diversity and creativity.',
    new: false,
  },
  {
    label: 'Images',
    value: BACKGROUND_SCREEN.IMAGES,
    description:
      'Showcase stunning visuals, inspired by breathtaking landscapes.',
    new: false,
  },
  {
    label: 'Mesh',
    value: BACKGROUND_SCREEN.MESH,
    description:
      'Create an artistic and blurred background, evoking a sense of mystery.',
    new: true,
  },
  {
    label: 'Patterns',
    value: BACKGROUND_SCREEN.PATTERNS,
    description:
      'Add intricate patterns for a unique and visually appealing backdrop.',
    new: true,
  },
];

export default backgroundVariants;
