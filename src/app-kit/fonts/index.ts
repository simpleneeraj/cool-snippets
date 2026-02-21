import localFont from 'next/font/local';
import {
  Kablammo,
  Nothing_You_Could_Do,
  Delius,
  Cabin_Sketch,
} from 'next/font/google';
import { cn } from '@/lib/utils';

const fontMono = localFont({
  display: 'swap',
  src: './PaperMono-Regular.woff2',
  variable: '--font-mono',
});

const fontSans = localFont({
  display: 'swap',
  src: './CalSansUI[MODE,wght].woff2',
  variable: '--font-sans',
});

const fontHeading = localFont({
  display: 'swap',
  src: './CalSans-SemiBold.woff2',
  variable: '--font-heading',
  weight: '600',
});

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
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable
);
