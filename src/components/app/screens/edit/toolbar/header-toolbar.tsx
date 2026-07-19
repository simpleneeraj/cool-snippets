/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import IconPicker from './modal';
import CodeHeaderDropdown from './code-header';
import useSlideEditor from '@/store/hooks/use-editor';
import { HEADER_INPUT_TYPES, HEADER_VARIANTS, SEGMENT_OPTIONS } from './values';
import { SlideHeaderType } from '@/typings/editor';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@/app-kit/ui/select';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '@/app-kit/ui/toolbar';
import { Button } from '@/app-kit/ui/button';
import { Toggle, ToggleGroup } from '@/app-kit/ui/toggle-group';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/app-kit/ui/tooltip';

const HeaderToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onOpen = React.useCallback(() => setIsOpen(true), []);
  const onClose = React.useCallback(() => setIsOpen(false), []);
  const onOpenChange = React.useCallback((open: boolean) => setIsOpen(open), []);
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

  const defaultIcon =
    'https://cdn.statically.io/gh/simpleneeraj/vscode-symbols@main/src/icons/files/proto.svg';

  return (
    <Toolbar>
      <ToolbarGroup className="flex items-center gap-1">
        {/* Icon */}
        <Button
          variant="outline"
          onClick={onOpen}
          title="Change icon"
          className="h-8 w-8 p-0"
        >
          {properties?.title?.icon && (
            <img
              src={properties?.title?.icon || defaultIcon}
              alt="App icon"
              width={16}
              height={16}
              className="h-4 w-4"
            />
          )}
        </Button>

        {/* Header Type */}
        <CodeHeaderDropdown
          value={type || ''}
          onAction={(key) => onChangeValues('type', key)}
        />
        <ToolbarSeparator />
        <Select
          value={variant || ''}
          items={HEADER_VARIANTS}
          onValueChange={(value) => onChangeValues('variant', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectPopup>
            {HEADER_VARIANTS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>

        {/* Input Type */}

        <Select
          value={input || ''}
          items={HEADER_INPUT_TYPES}
          onValueChange={(value) => onChangeValues('input', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Input" />
          </SelectTrigger>
          <SelectPopup>
            {HEADER_INPUT_TYPES.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
        <ToolbarSeparator />
        <TooltipProvider>
          <ToggleGroup
            value={[position]}
            onValueChange={(key) => onChangeValues('position', key[0])}
          >
            {SEGMENT_OPTIONS.map((item) => (
              <Tooltip key={item.value}>
                <TooltipTrigger
                  render={
                    <ToolbarButton
                      aria-label={item.value}
                      render={<Toggle value={item.value} />}
                    >
                      <item.icon />
                    </ToolbarButton>
                  }
                />
                <TooltipPopup sideOffset={8}>Align {item.value}</TooltipPopup>
              </Tooltip>
            ))}
          </ToggleGroup>
        </TooltipProvider>
      </ToolbarGroup>

      {/* Icon Picker Modal */}
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
    </Toolbar>
  );
};

export default HeaderToolbar;

{
  /* <Input
            value={properties?.title?.text || ''}
            size="sm"
            variant="flat"
            onChange={(e) =>
              onChangeValues('properties', { title: { text: e.target.value } })
            }
          /> */
}
