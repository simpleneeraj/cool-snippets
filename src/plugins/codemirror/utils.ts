import moize from 'moize';
import themes, { ThemesEnum } from './themes';
import languages, { LanguagesEnum } from './languages';
import { ReactCodeMirrorProps } from './editor/types';

export const dynamicTheme = moize((theme: ThemesEnum | undefined, alpha = 1) =>
  themes[theme || ThemesEnum.DRACULA](alpha)
);

export const dynamicLanguage = moize(
  (language: LanguagesEnum) =>
    languages[
      language || LanguagesEnum.TYPESCRIPT
    ]() as unknown as ReactCodeMirrorProps['extensions']
);
