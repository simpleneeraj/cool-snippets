import flatFluentuiIcons from './fluentui/flat.json';
import fileIcons from './material-icons/fileIcons.json';
import modernFluentuiIcons from './fluentui/modern.json';
import { NextRequest, NextResponse } from 'next/server';
import folderIcons from './material-icons/folderIcons.json';
import languageIcons from './material-icons/languageIcons.json';
import vscodeSymbols from './vscode-symbols/vscode-symbols.json';
import { IconProviders, IconType } from '@/typings/icon-picker';
import { map, sortBy, filter, includes, toLower, concat, merge } from 'lodash';

function createDatabase(provider: IconProviders) {
  switch (provider) {
    case IconProviders.VSCODE_SYMBOLS:
      return map(vscodeSymbols, (icon) =>
        merge({}, icon, {
          category: [icon?.name],
        })
      );
    case IconProviders.MATERIAL_ICONS:
      return concat([], fileIcons, folderIcons, languageIcons);
    case IconProviders.FLUENTUI:
      const flatIcons = map(flatFluentuiIcons, (icon) =>
        merge({}, icon, {
          category: [IconType.FLAT, icon?.name],
          size: undefined,
        })
      );
      const modernIcons = map(modernFluentuiIcons, (icon) =>
        merge({}, icon, {
          category: [IconType.MODERN, icon?.name],
          size: undefined,
        })
      );
      return concat([], flatIcons, modernIcons);
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}

export const GET = async (request: NextRequest) => {
  const query = request.nextUrl.searchParams.get('query')?.toLowerCase() || '';
  const type =
    (request.nextUrl.searchParams.get('type') as IconType) || IconType.ALL;
  const provider = request.nextUrl.searchParams.get(
    'provider'
  ) as IconProviders;

  if (!provider) {
    return NextResponse.json(
      { error: 'Valid provider is required.' },
      { status: 400 }
    );
  }
  try {
    const data = createDatabase(provider);
    const filteredData = filter(data, (item) => {
      if (type === IconType.ALL) return true;
      return item?.category?.includes(type);
    });
    const results = query
      ? filter(
          filteredData,
          (item) =>
            includes(toLower(item?.name), query) ||
            item?.category?.some((cat) => cat.toLowerCase().includes(query))
        )
      : filteredData;
    const sortedResults = sortBy(results, 'name');
    const metadata = {
      icons: sortedResults,
      types: Object.values(IconType),
    };
    return NextResponse.json(metadata, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export default GET;
