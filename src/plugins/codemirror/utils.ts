import themes, { ThemesEnum } from './themes';
import languages, { LanguagesEnum } from './languages';
import { ReactCodeMirrorProps } from './editor/types';

export const dynamicTheme = (theme: ThemesEnum | undefined, alpha = 1) =>
  themes[theme || ThemesEnum.DRACULA](alpha);

export const dynamicLanguage = (language: LanguagesEnum) =>
  languages[
    language || LanguagesEnum.TYPESCRIPT
  ]() as unknown as ReactCodeMirrorProps['extensions'];
