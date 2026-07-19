/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import IconPopover from './icon-popover';
import CodeHeaderDropdown from './code-header';
import useSlideEditor from '@/store/hooks/use-editor';
import { HEADER_INPUT_TYPES, HEADER_VARIANTS, SEGMENT_OPTIONS } from './values';
import { SlideHeaderType } from '@shared/types/editor';
import { HeaderInputType } from '@shared/types/templates';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@shared/ui/select';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '@shared/ui/toolbar';
import { Input } from '@shared/ui/input';
import { Toggle, ToggleGroup } from '@shared/ui/toggle-group';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/ui/tooltip';

const HeaderToolbar: React.FC = () => {
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

  // The icon picker and the filename field are only meaningful for the input
  // modes that actually render them — showing them in the other modes gives the
  // user dead controls. Gate each on the active input type.
  const showIcon =
    input === HeaderInputType.ICON || input === HeaderInputType.ICON_AND_INPUT;
  const showFilename =
    input === HeaderInputType.INPUT || input === HeaderInputType.ICON_AND_INPUT;

  return (
    <Toolbar>
      <ToolbarGroup className="flex items-center gap-1">
        {/* Icon — inline symbol picker (vscode-symbols) */}
        {showIcon && (
          <IconPopover
            value={properties?.title?.icon}
            onSelect={(icon) =>
              onChangeValues('properties', { title: { icon: icon.source } })
            }
          />
        )}

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
        {/* Filename shown in the header (e.g. index.tsx) */}
        {showFilename && (
          <Input
            value={properties?.title?.text ?? ''}
            placeholder="index.tsx"
            className="h-8 w-28"
            onChange={(e) =>
              onChangeValues('properties', { title: { text: e.target.value } })
            }
          />
        )}

        <ToolbarSeparator />
        <TooltipProvider>
          <ToggleGroup
            value={position ? [position] : []}
            // Alignment always has a value — ignore the empty array that a
            // second click on the active option would otherwise produce.
            onValueChange={(key) => key[0] && onChangeValues('position', key[0])}
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
    </Toolbar>
  );
};

export default HeaderToolbar;
