import { ELEMENTS } from '@/typings/enums';
import InputBoxIcon from '@/ui-kit/icons/elements/InputBoxIcon';
import TextBoxIcon from '@/ui-kit/icons/elements/TextBoxIcon';
import TerminalIcon from '@/ui-kit/icons/elements/TerminalIcon';
import AddImageIcon from '@/ui-kit/icons/elements/AddImageIcon';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { ThemesEnum } from '@/plugins/codemirror/themes';

/**
 * Watermark
 * Twitter Username shape
 */
export const elements = [
  {
    content: 'Add Code',
    icon: TerminalIcon,
    type: ELEMENTS.CODE,
  },
  {
    content: 'Add Text',
    icon: TextBoxIcon,
    type: ELEMENTS.TEXT,
  },
  {
    content: 'Add Input',
    icon: InputBoxIcon,
    type: ELEMENTS.TEXT,
  },
  {
    content: 'Add Image',
    icon: AddImageIcon,
    type: ELEMENTS.IMAGE,
  },
  {
    content: 'Add Icon',
    icon: InputBoxIcon,
    type: ELEMENTS.ICON,
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

export const elementsObject = {
  [ELEMENTS.TEXT]: {
    type: ELEMENTS.TEXT,
    content: 'Hello, World!',
    ...baseElement,
    style: {
      ...baseElement.style,
      minWidth: '200px',
      minHeight: '100px',
    },
    properties: {
      fontSize: '16px',
      color: '#000000',
      fontFamily: 'Arial',
    },
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
};
