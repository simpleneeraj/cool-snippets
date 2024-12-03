import React from 'react';
import { useImmer } from 'use-immer';
import UIView from '@/ui-kit/source/UIView';
import { VirtuosoGrid } from 'react-virtuoso';
import emojis from 'emojibase-data/en/data.json';
import { getEmojiUrl } from '@/utils/getEmojiUrl';
import data from 'emojibase-data/en/messages.json';
import { capitalize, cloneDeep, sortBy } from 'lodash';
import { GridItem, GridList } from './grid-components';
import { Card, Image, Input, Select, SelectItem } from '@nextui-org/react';

export default function EmojiPicker() {
  const [state, updateState] = useImmer({
    selectedGroup: '',
    selectedSkinTone: '',
    searchTerm: '',
  });

  const groups = data.groups.map(({ message, order }: any) => ({
    label: message,
    value: order.toString(),
  }));

  const skinTones = data.skinTones.map(({ message, key }: any) => ({
    label: message,
    value: key,
  }));

  const availableEmojis = cloneDeep(emojis);

  const filteredEmojis = React.useMemo(() => {
    return availableEmojis.filter((emoji) => {
      if (state.selectedGroup && emoji.group !== Number(state.selectedGroup))
        return false;
      if (
        state.selectedSkinTone &&
        (!emoji.skins ||
          !emoji.skins.some(
            (skin: any) => skin?.tone?.toString() === state?.selectedSkinTone
          ))
      ) {
        return false;
      }
      if (
        state.searchTerm &&
        !emoji.label.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [state]);
  return (
    <UIView className="flex-1 flex flex-col min-h-[300px]">
      <UIView className="py-2 flex gap-2">
        <Select
          size="sm"
          placeholder="Select Group"
          className="max-w-44"
          variant="bordered"
          onChange={(e) =>
            updateState((draft) => {
              draft.selectedGroup = e.target.value;
            })
          }
        >
          {sortBy(groups, 'label').map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {capitalize(item.label)}
            </SelectItem>
          ))}
        </Select>

        <Select
          size="sm"
          placeholder="Skin Tone"
          className="max-w-44"
          variant="bordered"
          onChange={(e) =>
            updateState((draft) => {
              draft.selectedSkinTone = e.target.value;
            })
          }
        >
          {sortBy(skinTones, 'label').map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {capitalize(item.label)}
            </SelectItem>
          ))}
        </Select>

        {/* Search input */}
        <Input
          size="sm"
          placeholder="Search emoji..."
          onChange={(e) =>
            updateState((draft) => {
              draft.searchTerm = e.target.value;
            })
          }
        />
      </UIView>

      {/* Emoji display */}
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
                title={filteredEmojis[index]?.label}
              >
                <Image
                  disableAnimation
                  radius="none"
                  removeWrapper
                  src={getEmojiUrl(filteredEmojis[index], '')}
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
