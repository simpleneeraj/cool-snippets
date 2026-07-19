'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import { Switch } from '@shared/ui/switch';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { resolveEditorOptions } from '@features/studio/store/slides/editor-options';
import { EDITOR_TOGGLES } from './values';

const EditorOptionsSection = () => {
  const { currentElement, onReplaceElementProperties } = useSlideEditor();
  const options = resolveEditorOptions(currentElement?.properties?.editor);

  const onToggle = React.useCallback(
    (key: keyof typeof options, checked: boolean) => {
      onReplaceElementProperties({
        ...currentElement?.properties,
        editor: { ...options, [key]: checked },
      });
    },
    [currentElement?.properties, onReplaceElementProperties, options],
  );

  return (
    <UIView className="flex flex-col gap-1">
      {EDITOR_TOGGLES.map(({ key, label, description }) => (
        <UIView
          key={key}
          className="flex flex-row items-center justify-between gap-3 rounded-lg px-1 py-2"
        >
          <label htmlFor={`editor-${key}`} className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">{label}</span>
            <span className="text-xs text-muted-foreground">{description}</span>
          </label>
          <Switch
            id={`editor-${key}`}
            checked={options[key]}
            onCheckedChange={(checked) => onToggle(key, checked)}
          />
        </UIView>
      ))}
    </UIView>
  );
};

export default EditorOptionsSection;
