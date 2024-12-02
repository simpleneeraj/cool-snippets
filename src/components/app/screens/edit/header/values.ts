import CircumAlignLeft from '@/ui-kit/icons/alignment/CircumAlignLeft';
import CircumAlignRight from '@/ui-kit/icons/alignment/CircumAlignRight';
import CircumAlignCenterH from '@/ui-kit/icons/alignment/CircumAlignCenterH';
import { HeaderInputType, HeaderVariants } from '@/typings/templates';

export const SEGMENT_OPTIONS = [
  { key: 'left', icon: CircumAlignLeft },
  { key: 'center', icon: CircumAlignCenterH },
  { key: 'right', icon: CircumAlignRight },
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
