import { cn } from '@heroui/react';
import { Kablammo, Nothing_You_Could_Do } from 'next/font/google';

const kablammo = Kablammo({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--kablammo',
});
const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--nothing-you-could-do',
});

export default cn(kablammo.variable, nothingYouCouldDo.variable);
