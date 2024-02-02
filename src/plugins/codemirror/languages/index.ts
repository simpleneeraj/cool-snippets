import { languages as codeLanguages } from '@codemirror/language-data';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { python } from '@codemirror/lang-python';
import { xml } from '@codemirror/lang-xml';
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { lezer } from '@codemirror/lang-lezer';
import { php } from '@codemirror/lang-php';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { tcl } from '@codemirror/legacy-modes/mode/tcl';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { vb } from '@codemirror/legacy-modes/mode/vb';
import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
import { brainfuck } from '@codemirror/legacy-modes/mode/brainfuck';
import { clike } from '@codemirror/legacy-modes/mode/clike';
import { stylus } from '@codemirror/legacy-modes/mode/stylus';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { nginx } from '@codemirror/legacy-modes/mode/nginx';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { pascal } from '@codemirror/legacy-modes/mode/pascal';
import { liveScript } from '@codemirror/legacy-modes/mode/livescript';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { toml } from '@codemirror/legacy-modes/mode/toml';
import { vbScript } from '@codemirror/legacy-modes/mode/vbscript';
import { clojure } from '@codemirror/legacy-modes/mode/clojure';
import { coffeeScript } from '@codemirror/legacy-modes/mode/coffeescript';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { r } from '@codemirror/legacy-modes/mode/r';

const languages = {
  brainfuck: () => StreamLanguage.define(brainfuck),
  clike: () =>
    StreamLanguage.define(
      clike({
        name: '',
      })
    ),
  clojure: () => StreamLanguage.define(clojure),
  coffeescript: () => StreamLanguage.define(coffeeScript),
  cpp,
  css,
  dockerfile: () => StreamLanguage.define(dockerFile),
  erlang: () => StreamLanguage.define(erlang),
  go: () => StreamLanguage.define(go),
  html,
  java,
  javascript,
  jsx: () => javascript({ jsx: true }),
  json,
  julia: () => StreamLanguage.define(julia),
  lezer,
  livescript: () => StreamLanguage.define(liveScript),
  lua: () => StreamLanguage.define(lua),
  markdown: () => markdown({ base: markdownLanguage, codeLanguages }),
  mysql: () => sql({ dialect: MySQL }),
  nginx: () => StreamLanguage.define(nginx),
  pascal: () => StreamLanguage.define(pascal),
  perl: () => StreamLanguage.define(perl),
  pgsql: () => sql({ dialect: PostgreSQL }),
  php,
  powershell: () => StreamLanguage.define(powerShell),
  python,
  ruby: () => StreamLanguage.define(ruby),
  rust,
  r: () => StreamLanguage.define(r),
  shell: () => StreamLanguage.define(shell),
  scheme: () => StreamLanguage.define(scheme),
  sql,
  stylus: () => StreamLanguage.define(stylus),
  swift: () => StreamLanguage.define(swift),
  tcl: () => StreamLanguage.define(tcl),
  toml: () => StreamLanguage.define(toml),
  tsx: () => javascript({ jsx: true, typescript: true }),
  typescript: () => javascript({ typescript: true }),
  vb: () => StreamLanguage.define(vb),
  vbscript: () => StreamLanguage.define(vbScript),
  xml,
  yaml: () => StreamLanguage.define(yaml),
};

export const languagesArray = [
  {
    name: 'Brainfuck',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/brainfuck.svg',
    value: 'brainfuck',
  },
  {
    name: 'C',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/c.svg',
    value: 'clike',
  },
  {
    name: 'Clojure',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/clojure.svg',
    value: 'clojure',
  },
  {
    name: 'Coffeescript',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/coffee.svg',
    value: 'coffeescript',
  },
  {
    name: 'CPP',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/cpp.svg',
    value: 'cpp',
  },
  {
    name: 'Css',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/css.svg',
    value: 'css',
  },
  {
    name: 'Dockerfile',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/docker.svg',
    value: 'dockerfile',
  },
  {
    name: 'Erlang',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/erlang.svg',
    value: 'erlang',
  },
  {
    name: 'Go',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/go.svg',
    value: 'go',
  },
  {
    name: 'Html',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/html.svg',
    value: 'html',
  },
  {
    name: 'Java',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/java.svg',
    value: 'java',
  },
  {
    name: 'Javascript',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/javascript.svg',
    value: 'javascript',
  },
  {
    name: 'Jsx',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/react.svg',
    value: 'jsx',
  },
  {
    name: 'Json',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/json.svg',
    value: 'json',
  },
  {
    name: 'Julia',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/julia.svg',
    value: 'julia',
  },
  // {
  //   name: 'Lezer',
  //   icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
  //   value: 'lezer',
  // },
  {
    name: 'Livescript',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/livescript.svg',
    value: 'livescript',
  },
  {
    name: 'Lua',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/lua.svg',
    value: 'lua',
  },
  {
    name: 'Markdown',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/markdown.svg',
    value: 'markdown',
  },
  {
    name: 'Mysql',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/image.svg',
    value: 'mysql',
  },
  {
    name: 'Nginx',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/nginx.svg',
    value: 'nginx',
  },
  {
    name: 'Pascal',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/pascal.svg',
    value: 'pascal',
  },
  {
    name: 'Perl',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/perl.svg',
    value: 'perl',
  },
  {
    name: 'Pgsql',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/image.svg',
    value: 'pgsql',
  },
  {
    name: 'Php',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/php.svg',
    value: 'php',
  },
  {
    name: 'Powershell',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/powershell.svg',
    value: 'powershell',
  },
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/python.svg',
    value: 'python',
  },
  {
    name: 'Ruby',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/ruby.svg',
    value: 'ruby',
  },
  {
    name: 'Rust',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/rust.svg',
    value: 'rust',
  },
  // {
  //   name: 'R',
  //   icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
  //   value: 'r',
  // },
  {
    name: 'Shell',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/image.svg',
    value: 'shell',
  },
  {
    name: 'Scheme',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/scheme.svg',
    value: 'scheme',
  },
  {
    name: 'Sql',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/image.svg',
    value: 'sql',
  },
  {
    name: 'Stylus',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/stylus.svg',
    value: 'stylus',
  },
  {
    name: 'Swift',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg',
    value: 'swift',
  },
  // {
  //   name: 'Tcl',
  //   icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
  //   value: 'tcl',
  // },
  // {
  //   name: 'Toml',
  //   icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
  //   value: 'toml',
  // },
  {
    name: 'Tsx',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/react_ts.svg',
    value: 'tsx',
  },
  {
    name: 'Typescript',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
    value: 'typescript',
  },
  // {
  //   name: 'Vb',
  //   icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
  //   value: 'vb',
  // },
  // {
  //   name: 'Vbscript',
  //   icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/typescript.svg',
  //   value: 'vbscript',
  // },
  {
    name: 'Xml',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/xml.svg',
    value: 'xml',
  },
  {
    name: 'Yaml',
    icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/yaml.svg',
    value: 'yaml',
  },
];

export default languages;
