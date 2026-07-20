'use client';

import { useCallback, useEffect, useState } from 'react';
import { type Editor } from '@tiptap/react';

// --- Hooks ---
import { useTiptapEditor } from '@features/editor-rte/hooks/use-tiptap-editor';

// --- Lib ---
import { isMarkInSchema, isNodeTypeSelected } from '@features/editor-rte/lib/tiptap-utils';

// --- Icons ---
import { TypeIcon } from '@features/editor-rte/icons/type-icon';

export const TEXT_COLORS = [
  {
    label: 'Default',
    value: 'var(--tt-text-color)',
    colorValue: 'inherit',
  },
  {
    label: 'Gray',
    value: 'var(--tt-color-text-gray)',
    colorValue: '#9ca3af',
  },
  {
    label: 'Brown',
    value: 'var(--tt-color-text-brown)',
    colorValue: '#a8856c',
  },
  {
    label: 'Orange',
    value: 'var(--tt-color-text-orange)',
    colorValue: '#f97316',
  },
  {
    label: 'Yellow',
    value: 'var(--tt-color-text-yellow)',
    colorValue: '#eab308',
  },
  {
    label: 'Green',
    value: 'var(--tt-color-text-green)',
    colorValue: '#22c55e',
  },
  {
    label: 'Blue',
    value: 'var(--tt-color-text-blue)',
    colorValue: '#3b82f6',
  },
  {
    label: 'Purple',
    value: 'var(--tt-color-text-purple)',
    colorValue: '#a855f7',
  },
  {
    label: 'Pink',
    value: 'var(--tt-color-text-pink)',
    colorValue: '#ec4899',
  },
  {
    label: 'Red',
    value: 'var(--tt-color-text-red)',
    colorValue: '#ef4444',
  },
];

export type TextColor = (typeof TEXT_COLORS)[number];

export interface UseColorTextConfig {
  editor?: Editor | null;
  textColor?: string;
  label?: string;
  hideWhenUnavailable?: boolean;
  useColorValue?: boolean;
  onApplied?: ({ color, label }: { color: string; label: string }) => void;
}

export function pickTextColorsByValue(values: string[]) {
  const colorMap = new Map(TEXT_COLORS.map((color) => [color.value, color]));
  return values
    .map((value) => colorMap.get(value))
    .filter((color): color is TextColor => !!color);
}

export function getTextColorValue(
  color: string,
  useColorValue: boolean = false,
): string {
  if (!useColorValue) return color;
  const colorItem = TEXT_COLORS.find(
    (c) => c.value === color || c.colorValue === color,
  );
  return colorItem?.colorValue || color;
}

export function canColorText(editor: Editor | null): boolean {
  if (!editor || !editor.isEditable) return false;
  if (
    !isMarkInSchema('textStyle', editor) ||
    isNodeTypeSelected(editor, ['image'])
  )
    return false;
  return true;
}

export function isColorTextActive(
  editor: Editor | null,
  textColor?: string,
): boolean {
  if (!editor || !editor.isEditable) return false;
  if (!textColor) return !!editor.getAttributes('textStyle')?.color;
  return editor.getAttributes('textStyle')?.color === textColor;
}

export function removeTextColor(editor: Editor | null): boolean {
  if (!editor || !editor.isEditable) return false;
  return editor.chain().focus().unsetColor().run();
}

function shouldShowButton(props: {
  editor: Editor | null;
  hideWhenUnavailable: boolean;
}): boolean {
  const { editor, hideWhenUnavailable } = props;
  if (!editor || !editor.isEditable) return false;
  if (!hideWhenUnavailable) return true;
  if (!isMarkInSchema('textStyle', editor)) return false;
  return canColorText(editor);
}

export function useColorText(config: UseColorTextConfig) {
  const {
    editor: providedEditor,
    label,
    textColor,
    hideWhenUnavailable = false,
    useColorValue = false,
    onApplied,
  } = config;

  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const canColorTextState = canColorText(editor);
  const actualColor = textColor
    ? getTextColorValue(textColor, useColorValue)
    : textColor;
  const isActive = isColorTextActive(editor, actualColor);

  useEffect(() => {
    if (!editor) return;

    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor, hideWhenUnavailable }));
    };

    handleSelectionUpdate();
    editor.on('selectionUpdate', handleSelectionUpdate);

    return () => {
      editor.off('selectionUpdate', handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable]);

  const handleColorText = useCallback(() => {
    if (!editor || !canColorTextState || !actualColor) return false;

    if (actualColor === 'inherit' || actualColor === 'var(--tt-text-color)') {
      const success = editor.chain().focus().unsetColor().run();
      if (success) onApplied?.({ color: '', label: label || 'Default' });
      return success;
    }

    const success = editor.chain().focus().setColor(actualColor).run();
    if (success) onApplied?.({ color: actualColor, label: label || '' });
    return success;
  }, [canColorTextState, actualColor, editor, label, onApplied]);

  const handleRemoveTextColor = useCallback(() => {
    const success = removeTextColor(editor);
    if (success) onApplied?.({ color: '', label: 'Remove text color' });
    return success;
  }, [editor, onApplied]);

  return {
    isVisible,
    isActive,
    handleColorText,
    handleRemoveTextColor,
    canColorText: canColorTextState,
    label: label || 'Text color',
    Icon: TypeIcon,
  };
}
