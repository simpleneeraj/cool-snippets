import { AlignHorizontalCenterLineDuotoneIcon, AlignLeftLineDuotoneIcon, AlignRightLineDuotoneIcon } from '@solar-icons/react';
import { HeaderInputType, HeaderVariants } from '@features/studio/model/templates';

export const SEGMENT_OPTIONS = [
  { value: 'left', icon: AlignLeftLineDuotoneIcon },
  { value: 'center', icon: AlignHorizontalCenterLineDuotoneIcon },
  { value: 'right', icon: AlignRightLineDuotoneIcon },
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
