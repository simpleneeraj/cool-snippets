/* eslint-disable @typescript-eslint/no-explicit-any */
import { APP_PLAN_TYPE, ELEMENTS } from '@/typings/enums';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { SolarCodeSquareLineDuotone } from '@/app-kit/icons/features/SolarCodeSquareLineDuotone';
import { SolarTextFieldFocusLineDuotone } from '@/app-kit/icons/SolarTextFieldFocusLineDuotone';
import { SolarGalleryAddLineDuotone } from '@/app-kit/icons/SolarGalleryAddLineDuotone';
import { SolarFaceScanCircleLineDuotone } from '@/app-kit/icons/SolarFaceScanCircleLineDuotone';
import { SolarCodeScanLineDuotone } from '@/app-kit/icons/SolarCodeScanLineDuotone';
import { SolarUserIdLineDuotone } from '@/app-kit/icons/SolarUserIdLineDuotone';
import { SolarVerifiedCheckLineDuotone } from '@/app-kit/icons/SolarVerifiedCheckLineDuotone';

export const elementLabelMapper: Record<ELEMENTS, string> = {
  [ELEMENTS.CODE]: 'Code Block',
  [ELEMENTS.TEXT]: 'Text Box',
  [ELEMENTS.IMAGE]: 'Image Upload',
  [ELEMENTS.ICON]: 'Graphic Icon',
  [ELEMENTS.USERINFO]: 'User Info',
  [ELEMENTS.WATERMARK]: 'Watermark',
};
/**
 * Watermark
 * Twitter Username shape
 */
export const elements = [
  {
    content: 'Code Block',
    icon: SolarCodeSquareLineDuotone,
    type: ELEMENTS.CODE,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'Text Box',
    icon: SolarTextFieldFocusLineDuotone,
    type: ELEMENTS.TEXT,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'Image',
    icon: SolarGalleryAddLineDuotone,
    type: ELEMENTS.IMAGE,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'Graphic Icon',
    icon: SolarFaceScanCircleLineDuotone,
    type: ELEMENTS.ICON,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'QR Code',
    icon: SolarCodeScanLineDuotone,
    type: ELEMENTS.USERINFO,
    plan: [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM],
  },
  {
    content: 'User Info',
    icon: SolarUserIdLineDuotone,
    type: ELEMENTS.USERINFO,
    plan: [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM],
  },
  {
    content: 'Watermark',
    icon: SolarVerifiedCheckLineDuotone,
    type: ELEMENTS.WATERMARK,
    plan: [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM],
  },
];

const centerElement = {
  top: '50%',
  left: '50%',
  right: 'initial',
  bottom: 'initial',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

const baseElement = {
  style: {
    ...centerElement,
  },
};

export const elementsObject: Record<ELEMENTS, any> = {
  [ELEMENTS.TEXT]: {
    type: ELEMENTS.TEXT,
    content: 'Your text here',
    ...baseElement,
    style: {
      ...baseElement.style,
      fontSize: '16px',
      color: '#000000',
      fontFamily: 'Arial',
      width: 'fit-content',
      height: 'fit-content',
    },
    properties: {},
  },
  [ELEMENTS.CODE]: {
    type: ELEMENTS.CODE,
    content: 'console.log("Hello, World!");',
    ...baseElement,
    style: {
      ...baseElement.style,
      width: 400,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: 0,
      fontFamily: 'SFMonoLigaturized',
      borderRadius: 15,
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: '0',
      display: 'grid',
      overflow: 'hidden',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
    },
    properties: {
      theme: ThemesEnum.DRACULA,
      language: LanguagesEnum.TYPESCRIPT,
      glassmorphism: {
        opacity: 0,
        enabled: true,
        blur: 16,
      },
    },
    header: {
      type: 'unix::terminal',
      variant: 'outline',
      input: 'icon',
      position: 'left',
      style: {
        background: 'rgba(0, 0, 0, 0.75)',
      },
      properties: {
        colors: [
          {
            name: 'Red',
            hex: '#fd4539',
          },
          {
            name: 'Yellow',
            hex: '#ffd213',
          },
          {
            name: 'Green',
            hex: '#21d854',
          },
        ],
        title: {
          text: 'app.py',
          icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg',
        },
      },
    },
  },
  [ELEMENTS.ICON]: {
    type: ELEMENTS.ICON,
    content: '',
    ...baseElement,
    properties: {},
  },
  [ELEMENTS.IMAGE]: {
    type: ELEMENTS.IMAGE,
    ...baseElement,
    properties: {},
  },
  [ELEMENTS.WATERMARK]: undefined,
  [ELEMENTS.USERINFO]: undefined,
};
