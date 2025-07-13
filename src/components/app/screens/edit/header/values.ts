import { SolarAlignHorizontalCenterLineDuotone } from '@/app-kit/icons/SolarAlignHorizontalCenterLineDuotone';
import { SolarAlignLeftLineDuotone } from '@/app-kit/icons/SolarAlignLeftLineDuotone';
import { SolarAlignRightLineDuotone } from '@/app-kit/icons/SolarAlignRightLineDuotone';
import { HeaderInputType, HeaderVariants } from '@/typings/templates';

export const SEGMENT_OPTIONS = [
  { key: 'left', icon: SolarAlignLeftLineDuotone },
  { key: 'center', icon: SolarAlignHorizontalCenterLineDuotone },
  { key: 'right', icon: SolarAlignRightLineDuotone },
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
