/* eslint-disable @typescript-eslint/no-explicit-any */
import { APP_PLAN_TYPE, ELEMENTS } from '@/typings/enums';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import { LanguagesEnum } from '@/plugins/codemirror/languages';

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
    icon: 'solar:code-square-line-duotone',
    type: ELEMENTS.CODE,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'Text Box',
    icon: 'solar:text-field-focus-line-duotone',
    type: ELEMENTS.TEXT,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'Image',
    icon: 'solar:gallery-add-line-duotone',
    type: ELEMENTS.IMAGE,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'Graphic Icon',
    icon: 'solar:face-scan-circle-line-duotone',
    type: ELEMENTS.ICON,
    plan: [APP_PLAN_TYPE.FREE],
  },
  {
    content: 'QR Code',
    icon: 'solar:code-scan-line-duotone',
    type: ELEMENTS.USERINFO,
    plan: [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM],
  },
  {
    content: 'User Info',
    icon: 'solar:user-id-line-duotone',
    type: ELEMENTS.USERINFO,
    plan: [APP_PLAN_TYPE.PRO, APP_PLAN_TYPE.PREMIUM],
  },
  {
    content: 'Watermark',
    icon: 'solar:verified-check-line-duotone',
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
    content: 'Hello, World!',
    ...baseElement,
    style: {
      ...baseElement.style,
      minWidth: '200px',
      minHeight: '100px',
      fontSize: '16px',
      color: '#000000',
      fontFamily: 'Arial',
    },
    properties: {},
  },
  [ELEMENTS.CODE]: {
    type: ELEMENTS.CODE,
    content: 'console.log("Hello, World!");',
    ...baseElement,
    properties: {
      language: LanguagesEnum.TYPESCRIPT,
      theme: ThemesEnum.BASIC_DARK,
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
