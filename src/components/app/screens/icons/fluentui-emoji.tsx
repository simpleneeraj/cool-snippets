import React from 'react';
import useSWR from 'swr';
import { useImmer } from 'use-immer';
import { sortBy, subtract } from 'lodash';
import UIView from '@/ui-kit/source/UIView';
import { PickerProps } from '@/typings/icon-picker';
import UIVirtualizeGrid from '@/ui-kit/components/UIVirtualizeGrid';
import useDynamicHeight from '@/ui-kit/hooks/use-dynamic-height';
import { Input, Select, SelectItem } from '@nextui-org/react';

interface Emoji {
  name: string;
  source: string;
}

interface FluentEmojiState {
  searchTerm: string;
  iconSet: string;
}

const fetcher = (url: string): Promise<Emoji[]> =>
  fetch(url).then((res) => res.json());

const FluentEmoji: React.FC<PickerProps> = (props) => {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 80);
  const [state, updateState] = useImmer<FluentEmojiState>({
    searchTerm: '',
    iconSet: 'modern',
  });

  const { data: emojiList } = useSWR(
    state.iconSet === 'flat'
      ? '/json/fluentui/flat.json'
      : '/json/fluentui/modern.json',
    fetcher
  );

  // Filter emojis based on the search term
  const filteredEmojis = React.useMemo(() => {
    return sortBy(
      emojiList?.filter((emoji) =>
        state.searchTerm
          ? emoji.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          : true
      ),
      'name'
    );
  }, [state.searchTerm, emojiList]);

  return (
    <UIView className="flex-1 flex flex-col">
      {/* Search and Select Filters */}
      <UIView className="py-2 flex gap-2">
        <Select
          size="sm"
          className="max-w-40"
          placeholder="Select set"
          onChange={(e) =>
            updateState((draft) => {
              draft.iconSet = e.target.value;
            })
          }
          variant="bordered"
          aria-label="Icon set selector"
        >
          <SelectItem key="modern" value="modern">
            Modern
          </SelectItem>
          <SelectItem key="flat" value="flat">
            Flat
          </SelectItem>
        </Select>

        <Input
          size="sm"
          placeholder="Search emoji..."
          onChange={(e) =>
            updateState((draft) => {
              draft.searchTerm = e.target.value;
            })
          }
          isClearable
          onClear={() =>
            updateState((draft) => {
              draft.searchTerm = '';
            })
          }
        />
      </UIView>
      <UIView className="flex flex-col flex-1" ref={ref}>
        <UIVirtualizeGrid
          {...props}
          items={filteredEmojis}
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
};

export default FluentEmoji;
