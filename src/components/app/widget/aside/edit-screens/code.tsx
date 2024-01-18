import React from 'react';
import UISlider from '@/ui-kit/source/UISlider';
import UISwitch from '@/ui-kit/source/UISwitch';
import { Frame, FrameItem } from '@/components/elements/frame';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { capitalize } from 'lodash';
import themes from '@/plugins/codemirror/themes';

const CodeScreen = () => {
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
          >
            <UIView className="w-full flex items-center justify-between">
              <UIView className="flex flex-col">
                <span className="text-tiny text-default-400">Customize</span>
                <h4 className="text-small text-default-500">Themes</h4>
              </UIView>
              <UIView>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-default-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </UIView>
            </UIView>
          </UIButton>
        </UIView>
      </FrameItem>
      <FrameItem label="Themes">
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
          placeholder="Choose a theme"
        >
          {(item) => (
            <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
          )}
        </Autocomplete>
      </FrameItem>
      <FrameItem label="Glssmorphism" className="py-2">
        <UISwitch color="success" />
      </FrameItem>
      <FrameItem label="Draggable" className="py-2">
        <UISwitch color="success" />
      </FrameItem>
      <FrameItem label="Draggable" className="py-2">
        <UISwitch color="success" />
      </FrameItem>
      {/* <FrameItem label="Padding">
        <UISlider size="sm" />
      </FrameItem> */}

      <FrameItem label="Radius">
        <UISlider size="sm" />
      </FrameItem>
      <FrameItem label="Blur">
        <UISlider size="sm" />
      </FrameItem>
    </Frame>
  );
};
export default CodeScreen;
