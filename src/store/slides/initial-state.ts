import { InitialValues } from '@/typings/editor';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import { BACKGROUND_TYPE, ELEMENTS } from '@/typings/enums';
import { LanguagesEnum } from '@/plugins/codemirror/languages';

const initialState = {
  slides: [
    {
      id: InitialValues.SLIDE_ID,
      name: 'Crystal Slide',
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
          watermark: true,
          aspectRatio: '1:1',
          image: '/images/glow-wallpaper.jpg',
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
            width: '90%',
            fontSize: 16,
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
            input: 'none',
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
                text: 'My Application',
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
