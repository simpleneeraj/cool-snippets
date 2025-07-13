/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import IconPicker from './modal';
import CodeHeaderDropdown from './code-header';
import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from '@heroui/react';
import useSlideEditor from '@/store/hooks/use-editor';
import { Frame, FrameItem } from '@/components/elements/frame';
import UISegmentedControl from '@/app-kit/source/UISegmentedControl';
import UISegmentButton from '@/app-kit/source/UISegmentedControl/button';
import { HEADER_INPUT_TYPES, HEADER_VARIANTS, SEGMENT_OPTIONS } from './values';
import { SlideHeaderType } from '@/typings/editor';

const HeaderScreen: React.FC = () => {
  const { onOpen, onClose, onOpenChange, isOpen } = useDisclosure();
  const { currentElement, onChangeSlideElement } = useSlideEditor();
  const { header } = currentElement || {};
  const { type, position, input, variant, properties } = header || {};

  const onChangeValues = (key: keyof SlideHeaderType, value: any) => {
    onChangeSlideElement({
      header: {
        [key]: value,
      },
    });
  };

  const renderSelectOptions = (options: { key: string; label: string }[]) =>
    options.map(({ key, label }) => <SelectItem key={key}>{label}</SelectItem>);

  return (
    <Frame title="CODE HEADER">
      <IconPicker
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        value={{
          name: '',
          source: properties?.title?.icon as string,
        }}
        onSelectIcon={(value) =>
          onChangeValues('properties', { title: { icon: value?.source } })
        }
      />
      <FrameItem divider className="flex-1 justify-between">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            isIconOnly
            variant="flat"
            onClick={onOpen}
            title="Change the icon"
          >
            <Image
              src={properties?.title?.icon || ''}
              alt="App Icon"
              width={16}
              height={16}
              className="h-4 w-4"
            />
          </Button>
          <Input
            value={properties?.title?.text || ''}
            size="sm"
            variant="flat"
            onChange={(e) =>
              onChangeValues('properties', { title: { text: e.target.value } })
            }
          />
        </div>
        <CodeHeaderDropdown
          value={type || ''}
          onAction={(key) => onChangeValues('type', key)}
        />
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
          selectedKeys={[variant || '']}
          onChange={(e) => onChangeValues('variant', e.target.value)}
        >
          {renderSelectOptions(HEADER_VARIANTS)}
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
          selectedKeys={[input || '']}
          onChange={(e) => onChangeValues('input', e.target.value)}
        >
          {renderSelectOptions(HEADER_INPUT_TYPES)}
        </Select>
      </FrameItem>

      <FrameItem label="Alignment">
        <UISegmentedControl
          size="sm"
          selectedKey={position || ''}
          onSelectionChange={(key) => onChangeValues('position', key)}
        >
          {SEGMENT_OPTIONS.map(({ key, icon: Icon }) => (
            <UISegmentButton key={key} title={<Icon className="h-5 w-5" />} />
          ))}
        </UISegmentedControl>
      </FrameItem>
    </Frame>
  );
};

export default React.memo(HeaderScreen);
