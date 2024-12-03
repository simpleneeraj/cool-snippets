import React from 'react';
import { useImmer } from 'use-immer';
import UIView from '@/ui-kit/source/UIView';
import { VirtuosoGrid } from 'react-virtuoso';
import { capitalize, sortBy } from 'lodash';
import { GridItem, GridList } from './grid-components';
import { Card, Image, Input, Select, SelectItem } from '@nextui-org/react';
import icons from '@/json/icons/vscode-symbols.json';

// Enum for icon types
const IconTypes = Object.freeze({
  FILE: 'file',
  FOLDER: 'folder',
});

export default function SymbolsPicker() {
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
      {/* Filters */}
      <UIView className="py-2 flex gap-2">
        <Select
          size="sm"
          placeholder="Select Type"
          className="max-w-44"
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
              { label: 'Files', value: IconTypes.FILE },
              { label: 'Folders', value: IconTypes.FOLDER },
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

      {/* Icon display */}
      <UIView className="p-1 flex flex-col w-full overflow-auto border border-default-100 rounded-lg">
        {filteredIcons.length > 0 ? (
          <VirtuosoGrid
            style={{ height: 464 }}
            totalCount={filteredIcons.length}
            components={{
              List: GridList,
              Item: GridItem,
            }}
            itemContent={(index) => (
              <Card
                isPressable
                className="flex items-center justify-center border border-default-100 p-4 h-full bg-transparent"
                title={filteredIcons[index]?.name}
                // onPress={() =>
                //   console.log({ src: filteredIcons[index].source })
                // }
              >
                <Image
                  disableAnimation
                  radius="none"
                  removeWrapper
                  src={filteredIcons[index].source}
                  className="h-14 w-14 object-contain"
                />
              </Card>
            )}
          />
        ) : (
          <p>Nothing found 😑</p>
        )}
      </UIView>
    </UIView>
  );
}
