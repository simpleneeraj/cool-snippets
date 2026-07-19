'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@/store/hooks/use-editor';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import UIColorPicker from '@shared/uikit/UIColorPicker';
import { resolveEditorOptions } from '@/store/slides/editor-options';
import { CORNER_RADIUS_RANGE, PADDING_RANGE } from './values';

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
      <Field>
        <Slider
          {...CORNER_RADIUS_RANGE}
          value={Number(style?.borderRadius) || 0}
          onValueChange={(borderRadius) =>
            onChangeSlideElement({
              style: { borderRadius: Number(borderRadius) },
            })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">
              Corner radius
            </FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>

      <Field>
        <Slider
          {...PADDING_RANGE}
          value={options.padding}
          onValueChange={(padding) => onChangePadding(Number(padding))}
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Padding</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>

      <Field>
        <FieldLabel>Block background</FieldLabel>
        <UIColorPicker
          value={String(style?.background ?? 'rgba(0, 0, 0, 0.5)')}
          onSelect={(background) =>
            onChangeSlideElement({ style: { background } })
          }
        />
      </Field>
    </UIView>
  );
};

export default AppearanceSection;
