/* eslint-disable @typescript-eslint/no-explicit-any */
import appConfig from '@shared/config/site';
import {
  ASSET_SOURCE,
  ELEMENTS,
  QR_ERROR_LEVEL,
  WATERMARK_MODE,
} from '@features/studio/model/enums';
import { ThemesEnum } from '@vendor/codemirror/themes';
import { LanguagesEnum } from '@vendor/codemirror/languages';
import { defaultFontFace } from '@shared/fonts/client';
import {
  CodeSquareOutlineIcon,
  TextFieldFocusOutlineIcon,
  GalleryAddOutlineIcon,
  SmileCircleOutlineIcon,
  QrCodeOutlineIcon,
  UserIdOutlineIcon,
  VerifiedCheckOutlineIcon,
} from '@solar-icons/react';

export const elementLabelMapper: Record<ELEMENTS, string> = {
  [ELEMENTS.CODE]: 'Code Block',
  [ELEMENTS.TEXT]: 'Text Box',
  [ELEMENTS.IMAGE]: 'Image',
  [ELEMENTS.ICON]: 'Graphic Icon',
  [ELEMENTS.QRCODE]: 'QR Code',
  [ELEMENTS.USERINFO]: 'User Info',
  [ELEMENTS.WATERMARK]: 'Watermark',
};

export const elementIconMapper = {
  [ELEMENTS.CODE]: CodeSquareOutlineIcon,
  [ELEMENTS.TEXT]: TextFieldFocusOutlineIcon,
  [ELEMENTS.IMAGE]: GalleryAddOutlineIcon,
  [ELEMENTS.ICON]: SmileCircleOutlineIcon,
  [ELEMENTS.QRCODE]: QrCodeOutlineIcon,
  [ELEMENTS.USERINFO]: UserIdOutlineIcon,
  [ELEMENTS.WATERMARK]: VerifiedCheckOutlineIcon,
};

export const elements = (
  [
    ELEMENTS.CODE,
    ELEMENTS.TEXT,
    ELEMENTS.IMAGE,
    ELEMENTS.ICON,
    ELEMENTS.QRCODE,
    ELEMENTS.USERINFO,
    ELEMENTS.WATERMARK,
  ] as const
).map((type) => ({
  type,
  content: elementLabelMapper[type],
  icon: elementIconMapper[type],
}));

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
      // Default must stay an openly-licensed face — SF Mono was removed.
      fontFamily: defaultFontFace,
      borderRadius: 15,
      background: 'rgba(0, 0, 0, 0.5)',
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
    style: {
      ...baseElement.style,
      width: 96,
      height: 96,
    },
    properties: {
      source: ASSET_SOURCE.URL,
      src: '',
      alt: 'Graphic icon',
    },
  },
  [ELEMENTS.IMAGE]: {
    type: ELEMENTS.IMAGE,
    ...baseElement,
    style: {
      ...baseElement.style,
      width: 100,
      height: 100,
      borderRadius: 12,
      overflow: 'hidden',
    },
    properties: {
      source: ASSET_SOURCE.URL,
      src: '',
      alt: 'Image',
    },
  },
  [ELEMENTS.QRCODE]: {
    type: ELEMENTS.QRCODE,
    ...baseElement,
    style: {
      ...baseElement.style,
      borderRadius: 12,
      overflow: 'hidden',
    },
    properties: {
      value: appConfig.links.repo,
      size: 128,
      fgColor: '#000000',
      bgColor: '#ffffff',
      level: QR_ERROR_LEVEL.MEDIUM,
      marginSize: 2,
    },
  },
  [ELEMENTS.USERINFO]: {
    type: ELEMENTS.USERINFO,
    ...baseElement,
    style: {
      ...baseElement.style,
      color: '#ffffff',
      fontSize: 14,
      gap: 10,
    },
    properties: {
      name: 'Your Name',
      handle: '@yourhandle',
      showAvatar: true,
      avatar: {
        source: ASSET_SOURCE.URL,
        src: '',
      },
    },
  },
  [ELEMENTS.WATERMARK]: {
    type: ELEMENTS.WATERMARK,
    ...baseElement,
    style: {
      ...baseElement.style,
      color: '#ffffff',
      fontSize: 12,
    },
    properties: {
      mode: WATERMARK_MODE.TEXT,
      text: `Made with ${appConfig.name}`,
      opacity: 0.6,
      image: {
        source: ASSET_SOURCE.URL,
        src: '',
      },
    },
  },
};
