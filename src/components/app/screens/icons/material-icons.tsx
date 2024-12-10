import React from 'react';
import { useImmer } from 'use-immer';
import UIView from '@/ui-kit/source/UIView';
import { PickerProps } from '@/typings/icon-picker';
import { capitalize, sortBy, subtract } from 'lodash';
import { Input, Select, SelectItem } from '@nextui-org/react';
import files from '@/plugins/material-icons/fileIcons.json';
import folder from '@/plugins/material-icons/folderIcons.json';
import language from '@/plugins/material-icons/languageIcons.json';
import UIVirtualizeGrid from '@/ui-kit/components/UIVirtualizeGrid';
import useDynamicHeight from '@/ui-kit/hooks/use-dynamic-height';

type Icon = {
  name: string;
  source: string;
  category: string[];
};
// Enum for icon types
enum IconTypes {
  ALL = '',
  FILE = 'file',
  FOLDER = 'folder',
  LANGUAGE = 'language',
}

export default function MaterialIconsPicker(props: PickerProps) {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 80);
  const [state, updateState] = useImmer({
    selectedType: '',
    searchTerm: '',
  });

  // Combine all datasets into a unified format
  const availableIcons = React.useMemo(() => {
    const transformData = (data: Icon[], category: string) =>
      data.map((icon) => ({
        ...icon,
        category: [...icon?.category, category].filter?.(Boolean),
      }));

    return [
      ...transformData(files, 'file'),
      ...transformData(folder, 'folder'),
      ...transformData(language, 'language'),
    ];
  }, []);

  // Filter icons based on selected type and search term
  const filteredIcons = React.useMemo(() => {
    return availableIcons.filter((icon) => {
      const isMatchingType =
        !state.selectedType || icon?.category?.includes(state.selectedType);

      const isMatchingSearch =
        !state.searchTerm ||
        icon.name.toLowerCase().includes(state.searchTerm.toLowerCase());

      return isMatchingType && isMatchingSearch;
    });
  }, [state, availableIcons]);

  return (
    <UIView className="flex-1 flex flex-col min-h-[300px]">
      {/* Filters */}
      <UIView className="py-2 flex gap-2">
        <Select
          size="sm"
          placeholder="Select Type"
          className="max-w-44"
          variant="bordered"
          onChange={(e) =>
            updateState((draft) => {
              draft.selectedType = e.target.value as IconTypes;
            })
          }
        >
          {sortBy(
            [
              { label: 'All', value: IconTypes.ALL },
              { label: 'Files', value: IconTypes.FILE },
              { label: 'Folders', value: IconTypes.FOLDER },
              { label: 'Languages', value: IconTypes.LANGUAGE },
            ],
            'label'
          ).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {capitalize(item.label)}
            </SelectItem>
          ))}
        </Select>
        <Input
          size="sm"
          placeholder="Search icon..."
          onChange={(e) =>
            updateState((draft) => {
              draft.searchTerm = e.target.value;
            })
          }
        />
      </UIView>

      <UIView className="flex flex-col flex-1" ref={ref}>
        <UIVirtualizeGrid
          {...props}
          items={filteredIcons}
          height={calculatedHeight}
          emptyContent={
            <UIView className="flex-1 flex flex-col items-center justify-center">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                No items available
              </span>
            </UIView>
          }
        />
      </UIView>
    </UIView>
  );
}
