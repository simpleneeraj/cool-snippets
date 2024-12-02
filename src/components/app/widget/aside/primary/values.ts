import { ELEMENTS } from '@/typings/enums';
import TextBoxIcon from '@/ui-kit/icons/elements/TextBoxIcon';
import TerminalIcon from '@/ui-kit/icons/elements/TerminalIcon';
import AddImageIcon from '@/ui-kit/icons/elements/AddImageIcon';
import AddIcon from '@/ui-kit/icons/elements/AddIcon';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import UserInfo from '@/ui-kit/icons/elements/UserInfo';
import CheckBadge from '@/ui-kit/icons/elements/CheckBadge';

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
    icon: TerminalIcon,
    type: ELEMENTS.CODE,
  },
  {
    content: 'Text Box',
    icon: TextBoxIcon,
    type: ELEMENTS.TEXT,
  },
  {
    content: 'Image',
    icon: AddImageIcon,
    type: ELEMENTS.IMAGE,
  },
  {
    content: 'Graphic Icon',
    icon: AddIcon,
    type: ELEMENTS.ICON,
  },
  {
    content: 'User Info',
    icon: UserInfo,
    type: ELEMENTS.USERINFO,
  },
  {
    content: 'Watermark',
    icon: CheckBadge,
    type: ELEMENTS.WATERMARK,
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
  },
  [ELEMENTS.WATERMARK]: undefined,
  [ELEMENTS.USERINFO]: undefined,
};
