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
 *   - `next/font/local` for the rest, which live in ./code/ rather than in
 *     public/ — files under public/ are served verbatim and cannot be
 *     fingerprinted, which is exactly what next/font exists to do.
 *
 * `preload` is false throughout. These are picker options: a visitor uses one
 * at a time, and preloading two dozen families would download megabytes nobody
 * asked for. `display: 'swap'` keeps text visible while the chosen face loads.
 */
import localFont from 'next/font/local';
import {
  Cascadia_Code,
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

// Every loader call below is fully literal on purpose. next/font is a compiler
// plugin that reads these options statically: a helper function wrapping the
// call, or a spread of a shared options object, both fail the build with
// "Font loaders must be called and assigned to a const in the module scope" and
// "Unexpected spread". The repetition is the API's requirement, not a style.

/* -------------------------------------------------------------------------- */
/* Google-hosted faces — downloaded at build time, served from our own origin  */
/* -------------------------------------------------------------------------- */

const cascadiaCode = Cascadia_Code({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const firaCode = Fira_Code({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const hachiMaruPop = Hachi_Maru_Pop({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const inconsolata = Inconsolata({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const jetBrainsMono = JetBrains_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const robotoMono = Roboto_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const sourceCodePro = Source_Code_Pro({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const syneMono = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const ubuntuMono = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const victorMono = Victor_Mono({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const victorMonoItalic = Victor_Mono({
  weight: 'variable',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const xanhMono = Xanh_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
const xanhMonoItalic = Xanh_Mono({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

/* -------------------------------------------------------------------------- */
/* Locally bundled faces                                                      */
/* -------------------------------------------------------------------------- */

const almamono = localFont({
  src: './code/Almamono/Almamono.woff2',
  display: 'swap',
  preload: false,
});
const anomaly = localFont({
  src: './code/Anomaly/Anomaly.otf',
  display: 'swap',
  preload: false,
});
const comicMono = localFont({
  src: './code/ComicMono/Comic Mono.ttf',
  display: 'swap',
  preload: false,
});
const hasklig = localFont({
  src: './code/Hasklig/Hasklig-Regular.ttf',
  display: 'swap',
  preload: false,
});
const haskligItalic = localFont({
  src: './code/Hasklig/Hasklig-It.ttf',
  display: 'swap',
  preload: false,
});
const inputMono = localFont({
  src: './code/InputMono/Input Mono.woff2',
  display: 'swap',
  preload: false,
});
const iosevka = localFont({
  src: './code/Iosevka/iosevka-regular.woff2',
  display: 'swap',
  preload: false,
});
const monoidRegular = localFont({
  src: './code/Monoid/Monoid-Regular.ttf',
  display: 'swap',
  preload: false,
});
const monoidItalic = localFont({
  src: './code/Monoid/Monoid-Italic.ttf',
  display: 'swap',
  preload: false,
});
const monoidRetina = localFont({
  src: './code/Monoid/Monoid-Retina.ttf',
  display: 'swap',
  preload: false,
});
const sweet = localFont({
  src: './code/Sweet16/Sweet.ttf',
  display: 'swap',
  preload: false,
});

// Ligature-patched derivatives of other typefaces. See NOTICE.md — the licence
// of each base font governs its patched variant, and several are unrecorded.
const amitLight = localFont({
  src: './code/Ligaturized/Amit Light.otf',
  display: 'swap',
  preload: false,
});
const anymous = localFont({
  src: './code/Ligaturized/Anymous.ttf',
  display: 'swap',
  preload: false,
});
const droidSansMono = localFont({
  src: './code/Ligaturized/DroidSansMono.ttf',
  display: 'swap',
  preload: false,
});
const fantasqueSansMono = localFont({
  src: './code/Ligaturized/FantasqueSansMono.ttf',
  display: 'swap',
  preload: false,
});
const hack = localFont({
  src: './code/Ligaturized/Hack.ttf',
  display: 'swap',
  preload: false,
});
const lexMono = localFont({
  src: './code/Ligaturized/LexMono.ttf',
  display: 'swap',
  preload: false,
});
const lexMonoItalic = localFont({
  src: './code/Ligaturized/LexMono Italic.ttf',
  display: 'swap',
  preload: false,
});
const ligaSrcPro = localFont({
  src: './code/Ligaturized/LigaSrcPro-Regular.ttf',
  display: 'swap',
  preload: false,
});
const robotoMonoX = localFont({
  src: './code/Ligaturized/RobotoMono X.ttf',
  display: 'swap',
  preload: false,
});
const sourceProItalic = localFont({
  src: './code/Ligaturized/SourcePro Italic.ttf',
  display: 'swap',
  preload: false,
});
const spaceMonoX = localFont({
  src: './code/Ligaturized/SpaceMono X.ttf',
  display: 'swap',
  preload: false,
});
const ubuntuMonoX = localFont({
  src: './code/Ligaturized/UbuntuMono X.ttf',
  display: 'swap',
  preload: false,
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
};

const font = (name: string, value: string, loaded: { style: { fontFamily: string } }): CodeFont => ({
  name,
  value,
  family: loaded.style.fontFamily,
});

const CODE_FONTS: CodeFont[] = [
  font('JetBrains Mono', 'JetBrainsMono', jetBrainsMono),
  font('Fira Code', 'FiraCodeRegular', firaCode),
  font('Cascadia Code', 'CascadiaCode', cascadiaCode),
  font('IBM Plex Mono', 'IBMPlexMono', ibmPlexMono),
  font('Source Code Pro', 'SourceCodePro', sourceCodePro),
  font('Roboto Mono', 'RobotoMono', robotoMono),
  font('Ubuntu Mono', 'UbuntuMono', ubuntuMono),
  font('Inconsolata', 'Inconsolata', inconsolata),
  font('Victor Mono', 'VictorMonoRegular', victorMono),
  font('Victor Mono Italic', 'VictorMonoItalic', victorMonoItalic),
  font('Xanh Mono', 'XanhMonoRegular', xanhMono),
  font('Xanh Mono Italic', 'XanhMonoItalic', xanhMonoItalic),
  font('Major Mono Display', 'MajorMonoDisplay', majorMonoDisplay),
  font('Syne Mono', 'SyneMono', syneMono),
  font('Hachi Maru Pop', 'HachiMaruPop', hachiMaruPop),

  font('Iosevka', 'Iosevka', iosevka),
  font('Hasklig', 'Hasklig', hasklig),
  font('Hasklig Italic', 'HaskligItalic', haskligItalic),
  font('Monoid', 'MonoidRegular', monoidRegular),
  font('Monoid Italic', 'MonoidItalic', monoidItalic),
  font('Monoid Retina', 'MonoidRetina', monoidRetina),
  font('Comic Mono', 'ComicMono', comicMono),
  font('Input Mono', 'InputMono', inputMono),
  font('Almamono', 'Almamono', almamono),
  font('Anomaly', 'Anomaly', anomaly),
  font('Sweet 16', 'Sweet', sweet),

  font('Hack', 'Hack', hack),
  font('Droid Sans Mono', 'DroidSansMono', droidSansMono),
  font('Fantasque Sans Mono', 'FantasqueSansMono', fantasqueSansMono),
  font('Lex Mono', 'LexMono', lexMono),
  font('Lex Mono Italic', 'LexMonoItalic', lexMonoItalic),
  font('Liga Source Pro', 'LigaSrcProRegular', ligaSrcPro),
  font('Source Pro Italic', 'SourceProItalic', sourceProItalic),
  font('Roboto Mono X', 'RobotoMonoX', robotoMonoX),
  font('Space Mono X', 'SpaceMonoX', spaceMonoX),
  font('Ubuntu Mono X', 'UbuntuMonoX', ubuntuMonoX),
  font('Anymous', 'Anymous', anymous),
  font('Amit Light', 'AmitLight', amitLight),
];

/** The default when a snippet has no font set, or names one we no longer ship. */
export const DEFAULT_CODE_FONT = 'JetBrainsMono';

const byValue = new Map(CODE_FONTS.map((f) => [f.value, f]));

/**
 * Resolve a persisted font id to the family name CSS understands.
 *
 * next/font generates the family name at build time, so it cannot be stored.
 * Anything unrecognised — a font removed since the snippet was saved — falls
 * back to the default rather than to an unstyled system face.
 */
export function resolveCodeFontFamily(value?: string): string {
  const match = value ? byValue.get(value) : undefined;
  return (match ?? byValue.get(DEFAULT_CODE_FONT))!.family;
}

export default CODE_FONTS;
