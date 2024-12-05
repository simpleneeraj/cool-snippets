// https://cdn.statically.io/gh/simpleneeraj/vscode-material-icon-theme/main/icons/3d.svg

import { camelCase, startCase } from 'lodash';
import { fileIcons } from './fileIcons';
import { folderIcons } from './folderIcons';
import { languageIcons } from './languageIcons';

const BASE_URL = `https://cdn.statically.io/gh/simpleneeraj/vscode-material-icon-theme/main/icons`;

export const _fileIcons = languageIcons.map((item) => ({
  name: startCase(item?.icon?.name),
  source: BASE_URL + '/' + item?.icon?.name + '.svg',
  category: [item?.icon?.name]?.filter(Boolean),
}));
