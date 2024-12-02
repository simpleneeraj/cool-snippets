import React from 'react';
import Image from 'next/image';
import CodeHeaderDropdown from './code-header';
import { HEADER_INPUT_TYPES, HEADER_VARIANTS, SEGMENT_OPTIONS } from './values';
import { Frame, FrameItem } from '@/components/elements/frame';
import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { HeaderInputType, HeaderVariants } from '@/typings/templates';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import IconApp from './modal';

type Props = {};

const HEADER_CONFIG = {
  type: 'unix::terminal',
  variant: HeaderVariants.OUTLINE,
  input: HeaderInputType.NONE,
  position: 'left',
  style: {
    background: 'rgba(0, 0, 0, 0.75)',
  },
  properties: {
    colors: [
      { name: 'Red', hex: '#fd4539' },
      { name: 'Yellow', hex: '#ffd213' },
      { name: 'Green', hex: '#21d854' },
    ],
    title: {
      text: 'My Application',
      icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg',
    },
  },
};

const HeaderScreen: React.FC<Props> = () => {
  const { properties } = HEADER_CONFIG;

  return (
    <Frame title="CODE HEADER">
      <IconApp />
      <FrameItem divider className="flex-1 justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Button size="sm" isIconOnly variant="flat">
              <Image
                src={properties.title.icon}
                alt="App Icon"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </Button>
            <Input value={properties.title.text} size="sm" variant="flat" />
          </div>
        </div>
        <CodeHeaderDropdown />
      </FrameItem>

      <FrameItem label="Header Style">
        <Select
          size="sm"
          className="max-w-36"
          placeholder="Choose header style"
          classNames={{
            popoverContent:
              'p-0 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
          }}
        >
          {HEADER_VARIANTS.map((variant) => (
            <SelectItem key={variant.key}>{variant.label}</SelectItem>
          ))}
        </Select>
      </FrameItem>

      <FrameItem label="Input Type">
        <Select
          size="sm"
          className="max-w-36"
          placeholder="Select input type"
          classNames={{
            popoverContent:
              'p-0 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
          }}
        >
          {HEADER_INPUT_TYPES.map((variant) => (
            <SelectItem key={variant.key}>{variant.label}</SelectItem>
          ))}
        </Select>
      </FrameItem>

      <FrameItem label="Alignment">
        <UISegmentedControl size="sm">
          {SEGMENT_OPTIONS.map((segment) => (
            <UISegmentButton
              key={segment.key}
              title={<segment.icon className="h-5 w-5" />}
            />
          ))}
        </UISegmentedControl>
      </FrameItem>
    </Frame>
  );
};

export default HeaderScreen;
