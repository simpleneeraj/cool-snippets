'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { resolveEditorOptions } from '@features/studio/store/slides/editor-options';
import ColorField from './color-field';
import SliderField from './slider-field';
import { FIELD_DEFAULTS } from './defaults';
import { CORNER_RADIUS_RANGE, PADDING_RANGE } from './values';

const DEFAULTS = FIELD_DEFAULTS.appearance;

const AppearanceSection = () => {
  const { currentElement, onChangeSlideElement, onReplaceElementProperties } =
    useSlideEditor();
  const style = currentElement?.style;
  const options = resolveEditorOptions(currentElement?.properties?.editor);

  const onChangePadding = React.useCallback(
    (padding: number) => {
      onReplaceElementProperties({
        ...currentElement?.properties,
        editor: { ...options, padding },
      });
    },
    [currentElement?.properties, onReplaceElementProperties, options],
  );

  return (
    <UIView className="flex flex-col gap-4">
      <SliderField
        label="Corner radius"
        range={CORNER_RADIUS_RANGE}
        value={Number(style?.borderRadius) || 0}
        defaultValue={DEFAULTS.borderRadius}
        onValueChange={(borderRadius) =>
          onChangeSlideElement({ style: { borderRadius } })
        }
      />

      <SliderField
        label="Padding"
        range={PADDING_RANGE}
        value={options.padding}
        defaultValue={DEFAULTS.padding}
        onValueChange={onChangePadding}
      />

      <ColorField
        label="Block background"
        value={String(style?.background ?? DEFAULTS.background)}
        defaultValue={DEFAULTS.background}
        onSelect={(background) => onChangeSlideElement({ style: { background } })}
      />
    </UIView>
  );
};

export default AppearanceSection;
