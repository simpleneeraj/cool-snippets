/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import UISlider from '@/ui-kit/source/UISlider';
import UISwitch from '@/ui-kit/source/UISwitch';
import { Frame, FrameItem } from '@/components/elements/frame';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Autocomplete, AutocompleteItem, Chip } from '@nextui-org/react';
import capitalize from 'lodash/capitalize';
import themes from '@/plugins/codemirror/themes';
import ChevronRightIcon from '@/ui-kit/icons/ChevronRightIcon';
import fontsNames from '@/json/fonts.json';
import useSlideEditor from '@/store/hooks/use-editor';
import Glassmorphism from '../elements/glassmorphism';
import NeonText from '../elements/neon';

type Props = {
  openLanguages: () => void;
};
const CodeScreen = ({ openLanguages }: Props) => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  return (
    <Frame title="CODE">
      <FrameItem>
        <UIView className="flex gap-3 flex-col w-full">
          <UIButton
            radius={'md'}
            className={'px-2 justify-start text-left'}
            fullWidth
            size={'lg'}
            variant={'flat'}
            onPress={openLanguages}
          >
            <UIView className="w-full flex items-center justify-between">
              <UIView className="flex flex-col">
                <span className="text-tiny text-default-400">Languages</span>
                <h4 className="text-small text-default-500">
                  {capitalize(currentElement?.properties?.language)}
                </h4>
              </UIView>
              <UIView>
                <ChevronRightIcon />
              </UIView>
            </UIView>
          </UIButton>
        </UIView>
      </FrameItem>
      <FrameItem>
        <Autocomplete
          labelPlacement="outside"
          size={'sm'}
          defaultItems={Object.keys(themes).map((item) => {
            return {
              name: capitalize(item),
              value: item,
            };
          })}
          className="max-w-xs"
          variant="flat"
          placeholder="Choose a theme"
          value={currentElement?.properties?.theme}
          onSelectionChange={(theme: any) =>
            onChangeSlideElement({
              properties: {
                theme,
              },
            })
          }
        >
          {(item) => (
            <AutocompleteItem key={item.value}>{item.name}</AutocompleteItem>
          )}
        </Autocomplete>
      </FrameItem>
      <FrameItem>
        <Autocomplete
          size={'sm'}
          labelPlacement="outside"
          defaultItems={fontsNames}
          className="max-w-xs"
          variant="flat"
          placeholder="Choose a typeface"
          value={currentElement?.style?.fontFamily}
          onSelectionChange={(fontFamily: any) =>
            onChangeSlideElement({
              style: {
                fontFamily,
              },
            })
          }
          scrollShadowProps={{
            isEnabled: false,
          }}
        >
          {(item) => (
            <AutocompleteItem
              endContent={
                <Chip size="sm" variant="light" color="success">
                  New
                </Chip>
              }
              aria-label={item.name}
              key={item.value}
            >
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </FrameItem>
      <NeonText />
      <Glassmorphism />
      <FrameItem label="Draggable" className="py-2">
        <UISwitch color="success" size={'sm'} />
      </FrameItem>
      <FrameItem label="Border Radius">
        <UISlider
          size={'sm'}
          className="sm:w-1/2"
          minValue={0}
          maxValue={32}
          step={1}
          value={Number(currentElement?.style?.borderRadius)}
          onChange={(borderRadius) =>
            onChangeSlideElement({
              style: {
                borderRadius: Number(borderRadius),
              },
            })
          }
        />
      </FrameItem>
      {/* <FrameItem label="Color Picker">
        <UIColorPicker
          value={currentElement?.style?.backgroundColor}
          onSelect={(backgroundColor) =>
            onChangeSlideElement({
              style: {
                backgroundColor,
              },
            })
          }
        />
      </FrameItem> */}
    </Frame>
  );
};
export default CodeScreen;
