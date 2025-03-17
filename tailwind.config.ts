import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';
import typography from '@tailwindcss/typography';

const widgetWidth = {
  'widget-sm': '280px',
  'widget-md': '320px',
  'widget-lg': '425px',
};

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: widgetWidth,
      maxWidth: widgetWidth,
      minWidth: widgetWidth,
      fontFamily: {
        'app-kablammo': 'var(--kablammo)',
        'app-nothing-you-could-do': 'var(--nothing-you-could-do)',
      },
      colors: {
        'lavender-frost': {
          DEFAULT: '#cdaff5',
        },
        'periwinkle-glow': {
          DEFAULT: '#8290fd',
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui(), typography()],
};
export default config;
