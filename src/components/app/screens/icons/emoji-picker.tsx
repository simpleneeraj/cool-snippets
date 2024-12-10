/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useImmer } from 'use-immer';
import UIView from '@/ui-kit/source/UIView';
import emojis from 'emojibase-data/en/data.json';
import { getEmojiUrl } from '@/utils/getEmojiUrl';
import data from 'emojibase-data/en/messages.json';
import { capitalize, cloneDeep, sortBy, subtract } from 'lodash';
import { Input, Select, SelectItem } from '@nextui-org/react';
import UIVirtualizeGrid from '@/ui-kit/components/UIVirtualizeGrid';
import { PickerIconType, PickerProps } from '@/typings/icon-picker';
import useDynamicHeight from '@/ui-kit/hooks/use-dynamic-height';

export default function EmojiPicker(props: PickerProps) {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = subtract(height, 80);
  const [state, updateState] = useImmer({
    selectedGroup: '',
    selectedSkinTone: '',
    searchTerm: '',
  });

  const groups = data.groups.map(({ message, order }: any) => ({
    label: message,
    value: order.toString(),
  }));

  // const skinTones = data.skinTones.map(({ message, key }: any) => ({
  //   label: message,
  //   value: key,
  // }));

  const availableEmojis = cloneDeep(emojis);

  const filteredEmojis = React.useMemo(() => {
    return availableEmojis
      .filter((emoji) => {
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
      })
      .map((emoji) => {
        const pickerIcon: PickerIconType = {
          name: emoji.label,
          source: getEmojiUrl(emoji, ''),
          category: emoji.tags,
        };
        return pickerIcon;
      });
  }, [availableEmojis, state]);

  return (
    <UIView className="flex-1 flex flex-col min-h-[300px]">
      <UIView className="py-2 flex gap-2">
        <Select
          size="sm"
          placeholder="Select group"
          className="max-w-40"
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
        {/* <Select
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
        </Select> */}

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
}
