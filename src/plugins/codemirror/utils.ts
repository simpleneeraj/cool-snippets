import moize from 'moize';
import themes, { ThemesEnum } from './themes';
import languages, { LanguagesEnum } from './languages';
import { ReactCodeMirrorProps } from './editor/types';

export const generatedCodeTheme = moize(
  (theme: ThemesEnum | undefined, alpha = 1) =>
    themes[theme || ThemesEnum.DRACULA](alpha)
);

export const generatedCodeLanguage = moize(
  (language: LanguagesEnum | undefined) =>
    languages[
      language || LanguagesEnum.TYPESCRIPT
    ]() as unknown as ReactCodeMirrorProps['extensions']
);
