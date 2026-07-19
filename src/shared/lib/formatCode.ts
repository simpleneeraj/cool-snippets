import { LanguagesEnum } from '@vendor/codemirror/languages';

const parsers = {
  [LanguagesEnum.JAVASCRIPT]: {
    import: () => import('prettier/plugins/babel'),
    name: 'babel',
  },
  [LanguagesEnum.TYPESCRIPT]: {
    import: () => import('prettier/plugins/typescript'),
    name: 'typescript',
  },
  [LanguagesEnum.TSX]: {
    import: () => import('prettier/plugins/typescript'),
    name: 'typescript',
  },
  [LanguagesEnum.MARKDOWN]: {
    import: () => import('prettier/plugins/markdown'),
    name: 'markdown',
  },
  [LanguagesEnum.HTML]: {
    import: () => import('prettier/plugins/html'),
    name: 'html',
  },
  [LanguagesEnum.CSS]: {
    import: () => import('prettier/plugins/postcss'),
    name: 'css',
  },
  // [LanguagesEnum.CSS]: { import: () => import('prettier/plugins/postcss'), name: 'css' },
  [LanguagesEnum.YAML]: {
    import: () => import('prettier/plugins/yaml'),
    name: 'yaml',
  },
  [LanguagesEnum.PYTHON]: {
    import: () => Promise.resolve({ default: {} }),
    name: 'python',
  },
};

export const formatterSupportedLanguages = Object.keys(parsers);

const prettierConfig = {
  singleQuote: false,
  printWidth: 80,
};

const formatCode = async (code: string, language: any | null) => {
  if (!language || !formatterSupportedLanguages.includes(language.name)) {
    return code;
  }

  if (language.name === LanguagesEnum.PYTHON) {
    const {
      default: initRuff,
      Workspace,
      PositionEncoding,
    } = await import('@astral-sh/ruff-wasm-web');
    await initRuff();

    const workspace = new Workspace(
      Workspace.defaultSettings(),
      PositionEncoding.Utf32
    );
    const formatted = workspace.format(code);
    return formatted.replace(/\n$/, '');
  }

  const prettier = await import('prettier/standalone');

  const parser = parsers[language.name as keyof typeof parsers];
  if (!parser) {
    throw new Error(`No parser found for language: ${language.name}`);
  }
  const parserModule = (await parser.import()).default;

  const formatted = await prettier.format(code, {
    parser: parser.name,
    plugins: [
      parserModule,
      ...([
        LanguagesEnum.TSX,
        LanguagesEnum.TYPESCRIPT,
        LanguagesEnum.JAVASCRIPT,
      ].includes(language.name)
        ? [(await import('prettier/plugins/estree')).default]
        : []),
    ],
    ...prettierConfig,
  });

  // remove trailing newline added by prettier
  // https://github.com/prettier/prettier/issues/6360#issuecomment-520368783
  return formatted.replace(/\n$/, '');
};

export default formatCode;
