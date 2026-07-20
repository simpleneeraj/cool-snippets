import { InitialValues } from '@features/studio/model/editor';
import { ThemesEnum } from '@vendor/codemirror/themes';
import {
  BACKGROUND_TYPE,
  ELEMENTS,
  Terminal,
} from '@features/studio/model/enums';
import { LanguagesEnum } from '@vendor/codemirror/languages';
import { defaultFontFace } from '@shared/fonts/client';
import {
  HeaderInputType,
  HeaderPositions,
  HeaderVariants,
} from '@features/studio/model/templates';

export const MIN_SLIDE_WIDTH = 520;
export const MAX_SLIDE_WIDTH = 720;

const initialState = {
  slides: [
    {
      id: InitialValues.SLIDE_ID,
      name: 'Cool Snippet',
      background: {
        type: BACKGROUND_TYPE.IMAGE,
        style: {
          width: 450,
          height: 450,
          size: 'cover',
          position: 'center',
          repeat: 'no-repeat',
        },
        properties: {
          image: '/images/glow-wallpaper.jpg',
          gradient: '',
        },
      },
      elements: [
        {
          id: InitialValues.ELEMENT_ID,
          type: ELEMENTS.CODE,
          content:
            "import SwiftUI\n\nstruct CircleImage: View {\n  var body: some View {\n    Image('turtlerock')\n      .clipShape(Circle())\n  }\n}",
          style: {
            minWidth: 400,
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
          } as React.CSSProperties,
          properties: {
            theme: ThemesEnum.DRACULA,
            language: LanguagesEnum.SWIFT,
            glassmorphism: {
              opacity: 0,
              enabled: true,
              blur: 16,
            },
          },
          header: {
            type: Terminal.Unix,
            variant: HeaderVariants.OUTLINE,
            input: HeaderInputType.ICON,
            position: HeaderPositions.DEFAULT,
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
                text: 'app.swift',
                icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg',
              },
            },
          },
        },
      ],
    },
  ],
};

export default initialState;
