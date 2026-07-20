'use client';

import { forwardRef, useMemo, useRef, useState } from 'react';
import { type Editor } from '@tiptap/react';

// --- Hooks ---
import { useMenuNavigation } from '@features/editor-rte/hooks/use-menu-navigation';
import { useIsBreakpoint } from '@features/editor-rte/hooks/use-is-breakpoint';
import { useTiptapEditor } from '@features/editor-rte/hooks/use-tiptap-editor';

// --- Icons ---
import { BanIcon } from '@features/editor-rte/icons/ban-icon';
import { TypeIcon } from '@features/editor-rte/icons/type-icon';

// --- UI Primitives ---
import type { ButtonProps } from '@features/editor-rte/primitives/button';
import { Button, ButtonGroup } from '@features/editor-rte/primitives/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@features/editor-rte/primitives/popover';
import { Separator } from '@features/editor-rte/primitives/separator';
import {
  Card,
  CardBody,
  CardItemGroup,
} from '@features/editor-rte/primitives/card';

// --- Tiptap UI ---
import type {
  TextColor,
  UseColorTextConfig,
} from '@features/editor-rte/ui/color-text-button/use-color-text';
import {
  pickTextColorsByValue,
  useColorText,
} from '@features/editor-rte/ui/color-text-button/use-color-text';
import { ColorTextButton } from '@features/editor-rte/ui/color-text-button/color-text-button';

export interface ColorTextPopoverContentProps {
  editor?: Editor | null;
  colors?: TextColor[];
  useColorValue?: boolean;
}

export interface ColorTextPopoverProps
  extends
    Omit<ButtonProps, 'type'>,
    Pick<UseColorTextConfig, 'editor' | 'hideWhenUnavailable' | 'onApplied'> {
  colors?: TextColor[];
  useColorValue?: boolean;
}

export const ColorTextPopoverButton = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => (
  <Button
    type="button"
    className={className}
    variant="ghost"
    data-appearance="default"
    role="button"
    tabIndex={-1}
    aria-label="Text color"
    tooltip="Text color"
    ref={ref}
    {...props}
  >
    {children ?? <TypeIcon className="tiptap-button-icon" />}
  </Button>
));

ColorTextPopoverButton.displayName = 'ColorTextPopoverButton';

export function ColorTextPopoverContent({
  editor,
  colors = pickTextColorsByValue([
    'var(--tt-color-text-gray)',
    'var(--tt-color-text-orange)',
    'var(--tt-color-text-yellow)',
    'var(--tt-color-text-green)',
    'var(--tt-color-text-blue)',
    'var(--tt-color-text-purple)',
    'var(--tt-color-text-pink)',
    'var(--tt-color-text-red)',
  ]),
  useColorValue = false,
}: ColorTextPopoverContentProps) {
  const { handleRemoveTextColor } = useColorText({ editor });
  const isMobile = useIsBreakpoint();
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems = useMemo(
    () => [...colors, { label: 'Remove text color', value: 'none' }],
    [colors],
  );

  const { selectedIndex } = useMenuNavigation({
    containerRef,
    items: menuItems,
    orientation: 'both',
    onSelect: (item) => {
      if (!containerRef.current) return false;
      const highlightedElement = containerRef.current.querySelector(
        '[data-highlighted="true"]',
      ) as HTMLElement;
      if (highlightedElement) highlightedElement.click();
      if (item.value === 'none') handleRemoveTextColor();
      return true;
    },
    autoSelectFirstItem: false,
  });

  return (
    <Card
      ref={containerRef}
      tabIndex={0}
      style={isMobile ? { boxShadow: 'none', border: 0 } : {}}
    >
      <CardBody style={isMobile ? { padding: 0 } : {}}>
        <CardItemGroup orientation="horizontal">
          <ButtonGroup orientation="horizontal">
            {colors.map((color, index) => (
              <ColorTextButton
                key={color.value}
                editor={editor}
                textColor={useColorValue ? color.colorValue : color.value}
                tooltip={color.label}
                aria-label={`${color.label} text color`}
                tabIndex={index === selectedIndex ? 0 : -1}
                data-highlighted={selectedIndex === index}
                useColorValue={useColorValue}
              />
            ))}
          </ButtonGroup>
          <Separator />
          <ButtonGroup orientation="horizontal">
            <Button
              onClick={handleRemoveTextColor}
              aria-label="Remove text color"
              tooltip="Remove text color"
              tabIndex={selectedIndex === colors.length ? 0 : -1}
              type="button"
              role="menuitem"
              variant="ghost"
              data-highlighted={selectedIndex === colors.length}
            >
              <BanIcon className="tiptap-button-icon" />
            </Button>
          </ButtonGroup>
        </CardItemGroup>
      </CardBody>
    </Card>
  );
}

export function ColorTextPopover({
  editor: providedEditor,
  colors = pickTextColorsByValue([
    'var(--tt-color-text-gray)',
    'var(--tt-color-text-orange)',
    'var(--tt-color-text-yellow)',
    'var(--tt-color-text-green)',
    'var(--tt-color-text-blue)',
    'var(--tt-color-text-purple)',
    'var(--tt-color-text-pink)',
    'var(--tt-color-text-red)',
  ]),
  hideWhenUnavailable = false,
  useColorValue = false,
  onApplied,
  ...props
}: ColorTextPopoverProps) {
  const { editor } = useTiptapEditor(providedEditor);
  const [isOpen, setIsOpen] = useState(false);
  const {
    isVisible,
    canColorText: canColor,
    isActive,
    label,
    Icon,
  } = useColorText({
    editor,
    hideWhenUnavailable,
    onApplied,
  });

  if (!isVisible) return null;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <ColorTextPopoverButton
          disabled={!canColor}
          data-active-state={isActive ? 'on' : 'off'}
          data-disabled={!canColor}
          aria-pressed={isActive}
          aria-label={label}
          tooltip={label}
          {...props}
        >
          <Icon className="tiptap-button-icon" />
        </ColorTextPopoverButton>
      </PopoverTrigger>
      <PopoverContent aria-label="Text colors">
        <ColorTextPopoverContent
          editor={editor}
          colors={colors}
          useColorValue={useColorValue}
        />
      </PopoverContent>
    </Popover>
  );
}

export default ColorTextPopover;
