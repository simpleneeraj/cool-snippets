import React from 'react';
import useSWR from 'swr';
import { useImmer } from 'use-immer';
import { sortBy } from 'lodash';
import {
  Card,
  Image,
  Input,
  Select,
  Spinner,
  SelectItem,
} from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';
import { VirtuosoGrid } from 'react-virtuoso';
import { GridItem, GridList } from './grid-components';

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

const FluentEmoji: React.FC = () => {
  const [state, updateState] = useImmer<FluentEmojiState>({
    searchTerm: '',
    iconSet: 'modern',
  });

  const { data: emojiList, isLoading } = useSWR(
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
          placeholder="Select set"
          onChange={(e) =>
            updateState((draft) => {
              draft.iconSet = e.target.value;
            })
          }
          className="max-w-28"
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
      {isLoading ? (
        <UIView className="h-full p-1 flex flex-col w-full overflow-auto justify-center items-center border border-default-100 rounded-lg">
          <Spinner />
        </UIView>
      ) : (
        <UIView className="p-1 flex flex-col w-full overflow-auto border border-default-100 rounded-lg">
          {filteredEmojis.length > 0 ? (
            <VirtuosoGrid
              style={{ height: 464 }}
              totalCount={filteredEmojis.length}
              components={{
                List: GridList,
                Item: GridItem,
              }}
              itemContent={(index) => (
                <Card
                  isPressable
                  className="flex items-center justify-center border border-default-100 p-4 h-full bg-transparent"
                  title={filteredEmojis[index]?.name}
                >
                  <Image
                    disableAnimation
                    radius="none"
                    removeWrapper
                    src={filteredEmojis[index]?.source}
                    className="h-14 w-14 object-contain"
                  />
                </Card>
              )}
            />
          ) : (
            <p>Nothing found 😑</p>
          )}
        </UIView>
      )}
    </UIView>
  );
};

export default FluentEmoji;
