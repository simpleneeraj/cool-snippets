import {
  Kablammo,
  Nothing_You_Could_Do,
  Delius,
  Cabin_Sketch,
} from 'next/font/google';
import { cn } from '@shared/lib/utils';
import { codefontsArray } from './server';

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
const delius = Delius({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--delius',
});

const cabinSketch = Cabin_Sketch({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--cabin-sketch',
});

export default cn(
  kablammo.variable,
  nothingYouCouldDo.variable,
  delius.variable,
  cabinSketch.variable,
  'font-sans',
  'font-mono',
  'font-heading',
  ...codefontsArray,
);
