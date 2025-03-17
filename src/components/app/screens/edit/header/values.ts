import { HeaderInputType, HeaderVariants } from '@/typings/templates';

export const SEGMENT_OPTIONS = [
  { key: 'left', icon: 'solar:align-left-line-duotone' },
  { key: 'center', icon: 'solar:align-horizontal-center-line-duotone' },
  { key: 'right', icon: 'solar:align-right-line-duotone' },
];

export const HEADER_VARIANTS = [
  { key: HeaderVariants.FLAT, label: 'Flat' },
  { key: HeaderVariants.FILLED, label: 'Filled' },
  { key: HeaderVariants.OUTLINE, label: 'Outline' },
];
export const HEADER_INPUT_TYPES = [
  { key: HeaderInputType.ICON, label: 'Icon' },
  { key: HeaderInputType.INPUT, label: 'Input' },
  { key: HeaderInputType.ICON_AND_INPUT, label: 'Icon and Input' },
  { key: HeaderInputType.NONE, label: 'None' },
];
