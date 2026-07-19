/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useImmer } from 'use-immer';
import UIView from '@shared/uikit/UIView';
import emojis from 'emojibase-data/en/data.json';
import { getEmojiUrl } from '@shared/lib/getEmojiUrl';
import data from 'emojibase-data/en/messages.json';
import { capitalize, cloneDeep, sortBy, subtract } from 'lodash';
import { Input } from '@shared/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@shared/ui/select';
import UIVirtualizeGrid from '@shared/motion/UIVirtualizeGrid';
import { PickerIconType, PickerProps } from '@shared/types/icon-picker';

export default function EmojiPicker(props: PickerProps) {
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
              (skin: any) => skin?.tone?.toString() === state?.selectedSkinTone,
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
    <UIView className="flex-1 flex flex-col min-h-75">
      <UIView className="py-2 flex gap-2">
        <Select
          value={state.selectedGroup}
          onValueChange={(value) =>
            updateState((draft) => {
              draft.selectedGroup = value as string;
            })
          }
        >
          <SelectTrigger className="max-w-40" aria-label="Emoji group selector">
            <SelectValue placeholder="Select group" />
          </SelectTrigger>
          <SelectContent>
            {sortBy(groups, 'label').map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {capitalize(item.label)}
              </SelectItem>
            ))}
          </SelectContent>
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
          placeholder="Search emoji..."
          onChange={(e) =>
            updateState((draft) => {
              draft.searchTerm = e.target.value;
            })
          }
        />
      </UIView>
      <UIView className="layout-fill">
        <UIVirtualizeGrid
          {...props}
          items={filteredEmojis}
          emptyContent={
            <UIView className="flex-1 flex flex-col items-center justify-center">
              <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                No items available
              </span>
            </UIView>
          }
        />
      </UIView>
    </UIView>
  );
}
