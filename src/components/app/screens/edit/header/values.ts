import { SolarAlignHorizontalCenterLineDuotone } from '@/app-kit/icons/SolarAlignHorizontalCenterLineDuotone';
import { SolarAlignLeftLineDuotone } from '@/app-kit/icons/SolarAlignLeftLineDuotone';
import { SolarAlignRightLineDuotone } from '@/app-kit/icons/SolarAlignRightLineDuotone';
import { HeaderInputType, HeaderVariants } from '@/typings/templates';

export const SEGMENT_OPTIONS = [
  { value: 'left', icon: SolarAlignLeftLineDuotone },
  { value: 'center', icon: SolarAlignHorizontalCenterLineDuotone },
  { value: 'right', icon: SolarAlignRightLineDuotone },
];

export const HEADER_VARIANTS = [
  { value: HeaderVariants.FLAT, label: 'Flat' },
  { value: HeaderVariants.FILLED, label: 'Filled' },
  { value: HeaderVariants.OUTLINE, label: 'Outline' },
];
export const HEADER_INPUT_TYPES = [
  { value: HeaderInputType.ICON, label: 'Icon' },
  { value: HeaderInputType.INPUT, label: 'Input' },
  { value: HeaderInputType.ICON_AND_INPUT, label: 'Icon and Input' },
  { value: HeaderInputType.NONE, label: 'None' },
];
