import React from 'react';
import { capitalize } from 'lodash';
import UIView from '@/ui-kit/source/UIView';
import UISlider from '@/ui-kit/source/UISlider';
import themes from '@/plugins/codemirror/themes';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import {
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';

const TextScreen = () => {
  return (
    <Frame title="TEXT">
      <FrameItem>
        <UIView className="flex gap-2 flex-col flex-1">
          <Autocomplete
            labelPlacement="outside"
            size={'sm'}
            defaultItems={Object.keys(themes).map((item, index) => {
              return {
                name: capitalize(item),
                id: index,
              };
            })}
            className="max-w-xs"
            variant="flat"
            placeholder="Choose a typeface"
          >
            {(item) => (
              <AutocompleteItem startContent="→" key={item.id}>
                {item.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <UISegmentedControl size="sm" fullWidth>
            <UISegmentButton title="L" />
            <UISegmentButton title="C" />
            <UISegmentButton title="R" />
            <UISegmentButton title="J" />
          </UISegmentedControl>
          <UIView className="flex gap-2">
            <UIView className="w-4/6">
              <Select
                size={'sm'}
                labelPlacement="outside"
                className="max-w-xs"
                placeholder="Weight"
              >
                {weights.map((weight) => (
                  <SelectItem
                    aria-label={String(weight)}
                    key={weight}
                    value={weight}
                  >
                    {weight}
                  </SelectItem>
                ))}
              </Select>
            </UIView>
            <UIView className="w-1/3">
              <Select
                size={'sm'}
                labelPlacement="outside"
                className="max-w-xs"
                placeholder="20"
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <SelectItem
                    key={index}
                    classNames={{
                      title: 'text-tiny',
                    }}
                    value={index + 10}
                    aria-label={`${index}`}
                  >
                    {index + 10} Px
                  </SelectItem>
                ))}
              </Select>
            </UIView>
          </UIView>
          <UIButtonGroup variant="flat" size="sm" fullWidth>
            <UIButton variant={'solid'} color={'primary'}>
              B
            </UIButton>
            <UIButton>I</UIButton>
            <UIButton>U</UIButton>
            <UIButton>S</UIButton>
          </UIButtonGroup>
        </UIView>
      </FrameItem>
    </Frame>
  );
};
export default TextScreen;

const weights = Array.from({ length: 9 }, (_, index) => (index + 1) * 100);
