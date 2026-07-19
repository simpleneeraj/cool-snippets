'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Field, FieldLabel } from '@/app-kit/ui/field';
import { Slider, SliderValue } from '@/app-kit/ui/slider';
import UIColorPicker from '@/app-kit/source/UIColorPicker';
import useSlideEditor from '@/store/hooks/use-editor';
import { FONT_SIZE_RANGE, LETTER_SPACING_RANGE, LINE_HEIGHT_RANGE } from './values';

const TextSection = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();
  const style = currentElement?.style;

  return (
    <UIView className="flex flex-col gap-4">
      {/* Standalone note — not tied to a control, so it must not be a
          Field.Description (Base UI requires a Field.Root ancestor). */}
      <p className="text-xs text-muted-foreground">
        Bold, italics and alignment live in the floating toolbar above the text
        box.
      </p>

      <Field>
        <FieldLabel>Colour</FieldLabel>
        <UIColorPicker
          value={String(style?.color ?? '#000000')}
          onSelect={(color) => onChangeSlideElement({ style: { color } })}
        />
      </Field>

      <Field>
        <Slider
          {...FONT_SIZE_RANGE}
          value={Number(style?.fontSize) || 16}
          onValueChange={(fontSize) =>
            onChangeSlideElement({ style: { fontSize: Number(fontSize) } })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Font size</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>

      <Field>
        <Slider
          {...LINE_HEIGHT_RANGE}
          value={Number(style?.lineHeight) || 1.4}
          onValueChange={(lineHeight) =>
            onChangeSlideElement({ style: { lineHeight: Number(lineHeight) } })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Line height</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>

      <Field>
        <Slider
          {...LETTER_SPACING_RANGE}
          value={Number(style?.letterSpacing) || 0}
          onValueChange={(letterSpacing) =>
            onChangeSlideElement({
              style: { letterSpacing: Number(letterSpacing) },
            })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">
              Letter spacing
            </FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
    </UIView>
  );
};

export default TextSection;
