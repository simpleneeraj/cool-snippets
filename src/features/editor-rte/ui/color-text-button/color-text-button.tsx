'use client';

import { forwardRef, useCallback, useMemo } from 'react';

// --- Hooks ---
import { useTiptapEditor } from '@features/editor-rte/hooks/use-tiptap-editor';

// --- Tiptap UI ---
import type { UseColorTextConfig } from '@features/editor-rte/ui/color-text-button/use-color-text';
import { useColorText } from '@features/editor-rte/ui/color-text-button/use-color-text';

// --- UI Primitives ---
import type { ButtonProps } from '@features/editor-rte/primitives/button';
import { Button } from '@features/editor-rte/primitives/button';

// --- Icons ---
import { TypeIcon } from '@features/editor-rte/icons/type-icon';

// --- Styles ---
import '@features/editor-rte/ui/color-text-button/color-text-button.scss';

export interface ColorTextButtonProps
  extends Omit<ButtonProps, 'type'>, UseColorTextConfig {}

export const ColorTextButton = forwardRef<
  HTMLButtonElement,
  ColorTextButtonProps
>(
  (
    {
      editor: providedEditor,
      textColor,
      hideWhenUnavailable = false,
      onApplied,
      onClick,
      children,
      style,
      useColorValue = false,
      ...buttonProps
    },
    ref,
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canColorText: canColor,
      isActive,
      handleColorText,
      label,
    } = useColorText({
      editor,
      textColor,
      useColorValue,
      label: `Set text color (${textColor})`,
      hideWhenUnavailable,
      onApplied,
    });

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleColorText();
      },
      [handleColorText, onClick],
    );

    const buttonStyle = useMemo(
      () =>
        ({
          ...style,
          '--text-color': textColor,
        }) as React.CSSProperties,
      [textColor, style],
    );

    if (!isVisible) {
      return null;
    }

    return (
      <Button
        type="button"
        variant="ghost"
        data-active-state={isActive ? 'on' : 'off'}
        role="button"
        tabIndex={-1}
        disabled={!canColor}
        data-disabled={!canColor}
        aria-label={label}
        aria-pressed={isActive}
        tooltip={label}
        onClick={handleClick}
        style={buttonStyle}
        {...buttonProps}
        ref={ref}
      >
        {children ?? (
          <span
            className="tiptap-button-color-text"
            style={{ '--text-color': textColor } as React.CSSProperties}
          />
        )}
      </Button>
    );
  },
);

ColorTextButton.displayName = 'ColorTextButton';
