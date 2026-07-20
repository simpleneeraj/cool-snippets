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
import { primaryFontFamily } from './source';
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

// Every loader call below is fully literal on purpose. next/font is a compiler
// plugin that reads these options statically: a helper function wrapping the
// call, or a spread of a shared options object, both fail the build with
// "Font loaders must be called and assigned to a const in the module scope" and
// "Unexpected spread". The repetition is the API's requirement, not a style.

/* -------------------------------------------------------------------------- */
/* Google-hosted faces — downloaded at build time, served from our own origin  */
/* -------------------------------------------------------------------------- */

// DM Mono is the studio default, so it is the one face here that preloads.
// It ships as static weights only — `weight: 'variable'` fails the build.
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
  // Cascadia has no published size-adjust metrics; skip fallback generation.
  adjustFontFallback: false,
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

/* -------------------------------------------------------------------------- */
/* Locally bundled faces                                                      */
/* -------------------------------------------------------------------------- */

export const calSansUI = localFont({
  src: '../../../public/fonts/cal-sans/ui-variable.woff2',
  display: 'swap',
  variable: '----font-sans',
});

export const paperMono = localFont({
  src: '../../../public/fonts/paper-mono/regular.woff2',
  display: 'swap',
  variable: '----font-mono',
});

export const calSans = localFont({
  src: '../../../public/fonts/cal-sans/semi-bold.woff2',
  display: 'swap',
  variable: '--font-heading',
});

const almamono = localFont({
  src: '../../../public/fonts/code/almamono/regular.woff2',
  display: 'swap',
  variable: '--font-almamono',
});

const anomaly = localFont({
  src: '../../../public/fonts/code/anomaly/regular.otf',
  display: 'swap',
  variable: '--font-anomaly',
});

const comicMono = localFont({
  src: '../../../public/fonts/code/comic-mono/regular.ttf',
  display: 'swap',
  variable: '--font-comic-mono',
});

const hasklig = localFont({
  src: '../../../public/fonts/code/hasklig/regular.ttf',
  display: 'swap',
  variable: '--font-hasklig',
});

const haskligItalic = localFont({
  src: '../../../public/fonts/code/hasklig/italic.ttf',
  display: 'swap',
  variable: '--font-hasklig-italic',
});

const inputMono = localFont({
  src: '../../../public/fonts/code/input-mono/regular.woff2',
  display: 'swap',
  variable: '--font-input-mono',
});

const iosevka = localFont({
  src: '../../../public/fonts/code/iosevka/regular.woff2',
  display: 'swap',
  variable: '--font-iosevka',
});

const monoidRegular = localFont({
  src: '../../../public/fonts/code/monoid/regular.ttf',
  display: 'swap',
  variable: '--font-monoid-regular',
});

const monoidItalic = localFont({
  src: '../../../public/fonts/code/monoid/italic.ttf',
  display: 'swap',
  variable: '--font-monoid-italic',
});

const monoidRetina = localFont({
  src: '../../../public/fonts/code/monoid/retina.ttf',
  display: 'swap',
  variable: '--font-monoid-retina',
});

const sweet = localFont({
  src: '../../../public/fonts/code/sweet16/regular.ttf',
  display: 'swap',
  variable: '--font-sweet',
});

// Ligature-patched derivatives of other typefaces.
const amitLight = localFont({
  src: '../../../public/fonts/code/ligaturized/amit-light.otf',
  display: 'swap',
  variable: '--font-amit-light',
});

const anymous = localFont({
  src: '../../../public/fonts/code/ligaturized/anonymous.ttf',
  display: 'swap',
  variable: '--font-anymous',
});

const droidSansMono = localFont({
  src: '../../../public/fonts/code/ligaturized/droid-sans-mono.ttf',
  display: 'swap',
  variable: '--font-droid-sans-mono',
});

const fantasqueSansMono = localFont({
  src: '../../../public/fonts/code/ligaturized/fantasque-sans-mono.ttf',
  display: 'swap',
  variable: '--font-fantasque-sans-mono',
});

const hack = localFont({
  src: '../../../public/fonts/code/ligaturized/hack.ttf',
  display: 'swap',
  variable: '--font-hack',
});

const lexMono = localFont({
  src: '../../../public/fonts/code/ligaturized/lex-mono.ttf',
  display: 'swap',
  variable: '--font-lex-mono',
});

const lexMonoItalic = localFont({
  src: '../../../public/fonts/code/ligaturized/lex-mono-italic.ttf',
  display: 'swap',
  variable: '--font-lex-mono-italic',
});

const ligaSrcPro = localFont({
  src: '../../../public/fonts/code/ligaturized/liga-src-pro-regular.ttf',
  display: 'swap',
  variable: '--font-liga-src-pro',
});

const robotoMonoX = localFont({
  src: '../../../public/fonts/code/ligaturized/roboto-mono-x.ttf',
  display: 'swap',
  variable: '--font-roboto-mono-x',
});

const sourceProItalic = localFont({
  src: '../../../public/fonts/code/ligaturized/source-pro-italic.ttf',
  display: 'swap',
  variable: '--font-source-pro-italic',
});

const spaceMonoX = localFont({
  src: '../../../public/fonts/code/ligaturized/space-mono-x.ttf',
  display: 'swap',
  variable: '--font-space-mono-x',
});

const ubuntuMonoX = localFont({
  src: '../../../public/fonts/code/ligaturized/ubuntu-mono-x.ttf',
  display: 'swap',
  variable: '--font-ubuntu-mono-x',
});

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export type CodeFont = {
  /** Shown in the picker. */
  name: string;
  /** Stable id persisted in localStorage. Never change these — an existing
   *  store holding an unknown id falls back to the browser default face. */
  value: string;
  /** The generated family name to hand to CSS, e.g. `__JetBrains_Mono_a1b2c3`. */
  family: string;
  /** Custom variable name suffix used in typography dropdown */
  variable: string;
};

const font = (
  name: string,
  value: string,
  loaded: { style: { fontFamily: string } },
  variable: string,
): CodeFont => ({
  name,
  value,
  family: loaded.style.fontFamily,
  variable,
});

const CODE_FONTS: CodeFont[] = [
  font('DM Mono', 'DMMono', dmMono, '-font-dm-mono'),
  font(
    'JetBrains Mono',
    'JetBrainsMono',
    jetBrainsMono,
    '-font-jetbrains-mono',
  ),
  font('Fira Code', 'FiraCodeRegular', firaCode, '-font-fira-code'),
  font('Cascadia Code', 'CascadiaCode', cascadiaCode, '-font-cascadia-code'),
  font('IBM Plex Mono', 'IBMPlexMono', ibmPlexMono, '-font-ibm-plex-mono'),
  font(
    'Source Code Pro',
    'SourceCodePro',
    sourceCodePro,
    '-font-source-code-pro',
  ),
  font('Roboto Mono', 'RobotoMono', robotoMono, '-font-roboto-mono'),
  font('Ubuntu Mono', 'UbuntuMono', ubuntuMono, '-font-ubuntu-mono'),
  font('Inconsolata', 'Inconsolata', inconsolata, '-font-inconsolata'),
  font('Victor Mono', 'VictorMonoRegular', victorMono, '-font-victor-mono'),
  font(
    'Victor Mono Italic',
    'VictorMonoItalic',
    victorMonoItalic,
    '-font-victor-mono-italic',
  ),
  font('Xanh Mono', 'XanhMonoRegular', xanhMono, '-font-xanh-mono'),
  font(
    'Xanh Mono Italic',
    'XanhMonoItalic',
    xanhMonoItalic,
    '-font-xanh-mono-italic',
  ),
  font(
    'Major Mono Display',
    'MajorMonoDisplay',
    majorMonoDisplay,
    '-font-major-mono-display',
  ),
  font('Syne Mono', 'SyneMono', syneMono, '-font-syne-mono'),
  font('Hachi Maru Pop', 'HachiMaruPop', hachiMaruPop, '-font-hachi-maru-pop'),

  font('Iosevka', 'Iosevka', iosevka, '-font-iosevka'),
  font('Hasklig', 'Hasklig', hasklig, '-font-hasklig'),
  font(
    'Hasklig Italic',
    'HaskligItalic',
    haskligItalic,
    '-font-hasklig-italic',
  ),
  font('Monoid', 'MonoidRegular', monoidRegular, '-font-monoid-regular'),
  font('Monoid Italic', 'MonoidItalic', monoidItalic, '-font-monoid-italic'),
  font('Monoid Retina', 'MonoidRetina', monoidRetina, '-font-monoid-retina'),
  font('Comic Mono', 'ComicMono', comicMono, '-font-comic-mono'),
  font('Input Mono', 'InputMono', inputMono, '-font-input-mono'),
  font('Almamono', 'Almamono', almamono, '-font-almamono'),
  font('Anomaly', 'Anomaly', anomaly, '-font-anomaly'),
  font('Sweet 16', 'Sweet', sweet, '-font-sweet'),

  font('Hack', 'Hack', hack, '-font-hack'),
  font(
    'Droid Sans Mono',
    'DroidSansMono',
    droidSansMono,
    '-font-droid-sans-mono',
  ),
  font(
    'Fantasque Sans Mono',
    'FantasqueSansMono',
    fantasqueSansMono,
    '-font-fantasque-sans-mono',
  ),
  font('Lex Mono', 'LexMono', lexMono, '-font-lex-mono'),
  font(
    'Lex Mono Italic',
    'LexMonoItalic',
    lexMonoItalic,
    '-font-lex-mono-italic',
  ),
  font(
    'Liga Source Pro',
    'LigaSrcProRegular',
    ligaSrcPro,
    '-font-liga-src-pro',
  ),
  font(
    'Source Pro Italic',
    'SourceProItalic',
    sourceProItalic,
    '-font-source-pro-italic',
  ),
  font('Roboto Mono X', 'RobotoMonoX', robotoMonoX, '-font-roboto-mono-x'),
  font('Space Mono X', 'SpaceMonoX', spaceMonoX, '-font-space-mono-x'),
  font('Ubuntu Mono X', 'UbuntuMonoX', ubuntuMonoX, '-font-ubuntu-mono-x'),
  font('Anymous', 'Anymous', anymous, '-font-anymous'),
  font('Amit Light', 'AmitLight', amitLight, '-font-amit-light'),
];

export const CODE_FONTS_VARIABLES = [
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

/** The default when a snippet has no font set, or names one we no longer ship. */
export const DEFAULT_CODE_FONT = 'DMMono';

const byValue = new Map(CODE_FONTS.map((f) => [f.value, f]));

/**
 * Resolve a persisted font id to the family name CSS understands.
 *
 * next/font generates the family name at build time, so it cannot be stored.
 * Anything unrecognised — a font removed since the snippet was saved — falls
 * back to the default rather than to an unstyled system face.
 */
export function resolveCodeFontFamily(value?: string): string {
  if (!value)
    return `'${primaryFontFamily(byValue.get(DEFAULT_CODE_FONT)!.family)}'`;

  // Try direct lookup (e.g. "DMMono")
  let match = byValue.get(value);

  // If not found, check if it starts with `--var` and find matching font
  if (!match && value.startsWith('--var')) {
    match = CODE_FONTS.find((f) => `--var${f.variable}` === value);
  }

  // Fallback check: see if the value contains any of our variables
  if (!match) {
    match = CODE_FONTS.find((f) => value.includes(f.variable));
  }

  const family = (match ?? byValue.get(DEFAULT_CODE_FONT))!.family;
  return `'${primaryFontFamily(family)}'`;
}

export default CODE_FONTS;
