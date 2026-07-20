import nord from './nord';
import abcdef from './abcdef';
import bespin from './bespin';
import dracula from './dracula';
import eclipse from './eclipse';
import sublime from './sublime';
import okaidia from './okaidia';
import oneDark from './one-dark';
import basicDark from './basic-dark';
import basicLight from './basic-light';
import gruvboxDark from './gruvbox-dark';
import gruvboxLight from './gruvbox-light';
import materialDark from './material-dark';
import solarizedDark from './solarized-dark';
import solarizedLight from './solarized-light';
import { duotoneDark, duotoneLight } from './duotone';
import {
  xcodeDarkInit,
  xcodeLightInit,
  defaultSettingsXcodeDark,
  defaultSettingsXcodeLight,
} from '@uiw/codemirror-theme-xcode';
import { withAlpha } from './with-alpha';
const themes = {
  Abcdef: abcdef,
  'Basic Dark': basicDark,
  'Basic Light': basicLight,
  Bespin: bespin,
  Dracula: dracula,
  'Duotone Dark': duotoneDark,
  'Duotone Light': duotoneLight,
  Eclipse: eclipse,
  'Gruvbox Dark': gruvboxDark,
  'Gruvbox Light': gruvboxLight,
  'Material Dark': materialDark,
  Nord: nord,
  Okaidia: okaidia,
  'One Dark': oneDark,
  'Solarized Dark': solarizedDark,
  'Solarized Light': solarizedLight,
  Sublime: sublime,
  // These ship as prebuilt extensions, so they used to ignore `alpha` entirely
  // and stayed opaque no matter where the glassmorphism slider sat. Rebuilding
  // them through their `*Init` factories applies the same alpha as every other
  // theme in the registry.
  xcodeDark: (alpha: string | number = 1) =>
    xcodeDarkInit({
      settings: {
        ...defaultSettingsXcodeDark,
        background: withAlpha(defaultSettingsXcodeDark!.background!, alpha),
        gutterBackground: withAlpha(
          defaultSettingsXcodeDark!.gutterBackground!,
          alpha,
        ),
      },
    }),
  xcodeLight: (alpha: string | number = 1) =>
    xcodeLightInit({
      settings: {
        ...defaultSettingsXcodeLight,
        background: withAlpha(defaultSettingsXcodeLight!.background!, alpha),
        gutterBackground: withAlpha(
          defaultSettingsXcodeLight!.gutterBackground!,
          alpha,
        ),
      },
    }),
};

export enum ThemesEnum {
  ABCDEF = 'Abcdef',
  BASIC_DARK = 'Basic Dark',
  BASIC_LIGHT = 'Basic Light',
  BESPIN = 'Bespin',
  DRACULA = 'Dracula',
  DUOTONE_DARK = 'Duotone Dark',
  DUOTONE_LIGHT = 'Duotone Light',
  ECLIPSE = 'Eclipse',
  GRUVBOX_DARK = 'Gruvbox Dark',
  GRUVBOX_LIGHT = 'Gruvbox Light',
  MATERIAL_DARK = 'Material Dark',
  NORD = 'Nord',
  OKAIDIA = 'Okaidia',
  ONE_DARK = 'One Dark',
  SOLARIZED_DARK = 'Solarized Dark',
  SOLARIZED_LIGHT = 'Solarized Light',
  SUBLIME = 'Sublime',
  xcodeDark = 'xcodeDark',
  xcodeLight = 'xcodeLight',
}

export default themes;
