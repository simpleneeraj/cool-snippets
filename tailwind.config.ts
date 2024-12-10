import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const widgetWidth = {
  'widget-sm': '280px',
  'widget-md': '320px',
  'widget-lg': '425px',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui-kit/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: widgetWidth,
      maxWidth: widgetWidth,
      minWidth: widgetWidth,
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
