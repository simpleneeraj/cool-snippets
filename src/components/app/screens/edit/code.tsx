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

type Props = {
  openLanguages: () => void;
};
const CodeScreen = ({ openLanguages }: Props) => {
  const { activeElement, onChangeSlideElement } = useSlideEditor();
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
                  {capitalize(activeElement?.properties?.language)}
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
          value={activeElement?.properties?.theme}
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
          defaultItems={fontsNames.map((item, index) => {
            return item;
          })}
          className="max-w-xs"
          variant="flat"
          placeholder="Choose a typeface"
          value={activeElement?.style?.fontFamily}
          onSelectionChange={(fontFamily: any) =>
            onChangeSlideElement({
              style: {
                fontFamily,
              },
            })
          }
        >
          {(item) => (
            <AutocompleteItem
              endContent={
                item.new && (
                  <Chip size="sm" variant="light" color="success">
                    New
                  </Chip>
                )
              }
              aria-label={item.name}
              key={item.value}
            >
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </FrameItem>
      <FrameItem label="Neon Text" className="py-2">
        <UISwitch color="success" />
      </FrameItem>
      <FrameItem label="Glssmorphism" className="py-2">
        <UISwitch color="success" />
      </FrameItem>
      <FrameItem label="Draggable" className="py-2">
        <UISwitch color="success" />
      </FrameItem>{' '}
      <FrameItem label="Shadow">
        <UISlider size="sm" className="sm:w-1/2" />
      </FrameItem>
      <FrameItem label="Radius">
        <UISlider size="sm" className="sm:w-1/2" />
      </FrameItem>
      <FrameItem label="Blur">
        <UISlider size="sm" className="sm:w-1/2" />
      </FrameItem>
    </Frame>
  );
};
export default CodeScreen;
