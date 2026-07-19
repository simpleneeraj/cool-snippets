import { InitialValues } from '@/typings/editor';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import { BACKGROUND_TYPE, ELEMENTS } from '@/typings/enums';
import { LanguagesEnum } from '@/plugins/codemirror/languages';

export const MIN_SLIDE_WIDTH = 520;
export const MAX_SLIDE_WIDTH = 720;

const initialState = {
  slides: [
    {
      id: InitialValues.SLIDE_ID,
      name: 'Cool Snippet',
      background: {
        type: BACKGROUND_TYPE.GRADIENT,
        style: {
          width: 450,
          height: 450,
          size: 'cover',
          position: 'center',
          repeat: 'no-repeat',
        },
        properties: {
          watermark: true,
          aspectRatio: '1:1',
          image:
            'https://lh3.googleusercontent.com/pw/AP1GczP5G2ljtsWIRpFOo37B6dFMu06edq-CZQMZMij-BpJgTgZm3iFIhXYJArjanv3WiOL5Yr1IRz9Y-wviq1tjzxvxuGmQBBLly9J4UB1iNNrZ2AHK2Nmnb5xMFJZ204rCYpnPlcCpW8ndHi01Uy9uRh7C=w1502-h1502-s-no-gm?authuser=0',
          gradient:
            'repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),linear-gradient(90deg, hsl(194,74%,56%),hsl(266,74%,56%),hsl(338,74%,56%),hsl(50,74%,56%),hsl(122,74%,56%))',
        },
      },
      watermark: {
        text: 'Your Watermark Here',
        image: '',
        style: {
          opacity: 0.3,
          fontSize: '12px',
          color: '#ffffff',
          // Can have custom it have custom(120px,50px) pairs
          // position: 'bottom-right',
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
