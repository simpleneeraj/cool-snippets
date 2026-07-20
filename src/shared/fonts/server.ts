/**
 * Code-block typefaces for the studio.
 *
 * Every face here is loaded through `next/font`, which fingerprints the file,
 * self-hosts it and emits the `@font-face` rule at build time. Nothing is
 * fetched from Google at runtime, so there is no third-party request on page
 * load and no layout shift from a late-arriving stylesheet.
 *
 * Two loaders are in play:
 *   - `next/font/google` for faces Google Fonts publishes. The bytes are
 *     downloaded during the build and served from our own origin.
 *   - `next/font/local` for the rest, which live in public/fonts — files
 *     loaded via localFont are fingerprinted and automatically set up with CSS variables.
 *
 * `preload` is false throughout. These are picker options: a visitor uses one
 * at a time, and preloading two dozen families would download megabytes nobody
 * asked for. `display: 'swap'` keeps text visible while the chosen face loads.
 */

import {
  Cascadia_Code,
  DM_Mono,
  Fira_Code,
  Hachi_Maru_Pop,
  IBM_Plex_Mono,
  Inconsolata,
  JetBrains_Mono,
  Major_Mono_Display,
  Roboto_Mono,
  Source_Code_Pro,
  Syne_Mono,
  Ubuntu_Mono,
  Victor_Mono,
  Xanh_Mono,
} from 'next/font/google';
import localFont from 'next/font/local';

// Google Fonts
const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
});
const cascadiaCode = Cascadia_Code({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-cascadia-code',
});
const firaCode = Fira_Code({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-fira-code',
});
const hachiMaruPop = Hachi_Maru_Pop({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-hachi-maru-pop',
});
const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-ibm-plex-mono',
});
const inconsolata = Inconsolata({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-inconsolata',
});
const jetBrainsMono = JetBrains_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-jetbrains-mono',
});
const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-major-mono-display',
});
const robotoMono = Roboto_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-roboto-mono',
});
const sourceCodePro = Source_Code_Pro({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-source-code-pro',
});
const syneMono = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-syne-mono',
});
const ubuntuMono = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-ubuntu-mono',
});
const victorMono = Victor_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-victor-mono',
});
const victorMonoItalic = Victor_Mono({
  weight: 'variable',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-victor-mono-italic',
});
const xanhMono = Xanh_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-xanh-mono',
});
const xanhMonoItalic = Xanh_Mono({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-xanh-mono-italic',
});

// Local Fonts
export const calSansUI = localFont({
  src: './cal-sans/ui-variable.woff2',
  display: 'swap',
  variable: '----font-sans',
});

export const paperMono = localFont({
  src: './paper-mono/regular.woff2',
  display: 'swap',
  variable: '----font-mono',
});

export const calSans = localFont({
  src: './cal-sans/semi-bold.woff2',
  display: 'swap',
  variable: '--font-heading',
});

const almamono = localFont({
  src: './code/almamono/regular.woff2',
  display: 'swap',
  variable: '--font-almamono',
});

const anomaly = localFont({
  src: './code/anomaly/regular.otf',
  display: 'swap',
  variable: '--font-anomaly',
});

const comicMono = localFont({
  src: './code/comic-mono/regular.ttf',
  display: 'swap',
  variable: '--font-comic-mono',
});

const hasklig = localFont({
  src: './code/hasklig/regular.ttf',
  display: 'swap',
  variable: '--font-hasklig',
});

const haskligItalic = localFont({
  src: './code/hasklig/italic.ttf',
  display: 'swap',
  variable: '--font-hasklig-italic',
});

const inputMono = localFont({
  src: './code/input-mono/regular.woff2',
  display: 'swap',
  variable: '--font-input-mono',
});

const iosevka = localFont({
  src: './code/iosevka/regular.woff2',
  display: 'swap',
  variable: '--font-iosevka',
});

const monoidRegular = localFont({
  src: './code/monoid/regular.ttf',
  display: 'swap',
  variable: '--font-monoid-regular',
});

const monoidItalic = localFont({
  src: './code/monoid/italic.ttf',
  display: 'swap',
  variable: '--font-monoid-italic',
});

const monoidRetina = localFont({
  src: './code/monoid/retina.ttf',
  display: 'swap',
  variable: '--font-monoid-retina',
});

const sweet = localFont({
  src: './code/sweet16/regular.ttf',
  display: 'swap',
  variable: '--font-sweet',
});

// Ligature-patched derivatives of other typefaces.
const amitLight = localFont({
  src: './code/ligaturized/amit-light.otf',
  display: 'swap',
  variable: '--font-amit-light',
});

const anymous = localFont({
  src: './code/ligaturized/anonymous.ttf',
  display: 'swap',
  variable: '--font-anymous',
});

const droidSansMono = localFont({
  src: './code/ligaturized/droid-sans-mono.ttf',
  display: 'swap',
  variable: '--font-droid-sans-mono',
});

const fantasqueSansMono = localFont({
  src: './code/ligaturized/fantasque-sans-mono.ttf',
  display: 'swap',
  variable: '--font-fantasque-sans-mono',
});

const hack = localFont({
  src: './code/ligaturized/hack.ttf',
  display: 'swap',
  variable: '--font-hack',
});

const lexMono = localFont({
  src: './code/ligaturized/lex-mono.ttf',
  display: 'swap',
  variable: '--font-lex-mono',
});

const lexMonoItalic = localFont({
  src: './code/ligaturized/lex-mono-italic.ttf',
  display: 'swap',
  variable: '--font-lex-mono-italic',
});

const ligaSrcPro = localFont({
  src: './code/ligaturized/liga-src-pro-regular.ttf',
  display: 'swap',
  variable: '--font-liga-src-pro',
});

const robotoMonoX = localFont({
  src: './code/ligaturized/roboto-mono-x.ttf',
  display: 'swap',
  variable: '--font-roboto-mono-x',
});

const sourceProItalic = localFont({
  src: './code/ligaturized/source-pro-italic.ttf',
  display: 'swap',
  variable: '--font-source-pro-italic',
});

const spaceMonoX = localFont({
  src: './code/ligaturized/space-mono-x.ttf',
  display: 'swap',
  variable: '--font-space-mono-x',
});

const ubuntuMonoX = localFont({
  src: './code/ligaturized/ubuntu-mono-x.ttf',
  display: 'swap',
  variable: '--font-ubuntu-mono-x',
});

export const codefontsArray = [
  calSansUI.variable,
  paperMono.variable,
  calSans.variable,
  dmMono.variable,
  cascadiaCode.variable,
  firaCode.variable,
  hachiMaruPop.variable,
  ibmPlexMono.variable,
  inconsolata.variable,
  jetBrainsMono.variable,
  majorMonoDisplay.variable,
  robotoMono.variable,
  sourceCodePro.variable,
  syneMono.variable,
  ubuntuMono.variable,
  victorMono.variable,
  victorMonoItalic.variable,
  xanhMono.variable,
  xanhMonoItalic.variable,
  almamono.variable,
  anomaly.variable,
  comicMono.variable,
  hasklig.variable,
  haskligItalic.variable,
  inputMono.variable,
  iosevka.variable,
  monoidRegular.variable,
  monoidItalic.variable,
  monoidRetina.variable,
  sweet.variable,
  amitLight.variable,
  anymous.variable,
  droidSansMono.variable,
  fantasqueSansMono.variable,
  hack.variable,
  lexMono.variable,
  lexMonoItalic.variable,
  ligaSrcPro.variable,
  robotoMonoX.variable,
  sourceProItalic.variable,
  spaceMonoX.variable,
  ubuntuMonoX.variable,
];
