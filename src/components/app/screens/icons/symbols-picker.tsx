import React from 'react';
import { useImmer } from 'use-immer';
import UIView from '@/ui-kit/source/UIView';
import { PickerProps } from '@/typings/icon-picker';
import icons from '@/json/icons/vscode-symbols.json';
import { capitalize, sortBy, subtract } from 'lodash';
import { Input, Select, SelectItem } from '@nextui-org/react';
import useDynamicHeight from '@/ui-kit/hooks/use-dynamic-height';
import UIVirtualizeGrid from '@/ui-kit/components/UIVirtualizeGrid';

function SymbolsPicker(props: PickerProps) {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 80);
  const [state, updateState] = useImmer({
    selectedType: '',
    searchTerm: '',
  });

  const availableIcons = React.useMemo(() => {
    return icons;
  }, []);

  const filteredIcons = React.useMemo(() => {
    return availableIcons.filter((icon) => {
      const isMatchingType =
        !state.selectedType || icon.name.includes(state.selectedType);

      const isMatchingSearch =
        !state.searchTerm ||
        icon.name.toLowerCase().includes(state.searchTerm.toLowerCase());

      return isMatchingType && isMatchingSearch;
    });
  }, [state, availableIcons]);

  return (
    <UIView className="flex-1 flex flex-col min-h-[300px]">
      <UIView className="py-2 flex gap-2">
        <Select
          size="sm"
          placeholder="Select Type"
          className="max-w-40"
          variant="bordered"
          onChange={(e) =>
            updateState((draft) => {
              draft.selectedType = e.target.value;
            })
          }
        >
          {sortBy(
            [
              { label: 'All', value: '' },
              { label: 'Files', value: 'file' },
              { label: 'Folders', value: 'folder' },
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

export default React.memo(SymbolsPicker);
