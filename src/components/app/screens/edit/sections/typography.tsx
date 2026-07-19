'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import CODE_FONTS, { type CodeFont } from '@shared/fonts/code';
import useSlideEditor from '@/store/hooks/use-editor';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@shared/ui/combobox';
import {
  FONT_SIZE_RANGE,
  LETTER_SPACING_RANGE,
  LINE_HEIGHT_RANGE,
} from './values';

const TypographySection = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();
  const style = currentElement?.style;

  const selectedFont = CODE_FONTS.find(
    (font) => font.value === style?.fontFamily,
  );

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Font family</FieldLabel>
        <Combobox<CodeFont>
          items={CODE_FONTS}
          value={selectedFont ?? null}
          itemToStringLabel={(font) => font?.name ?? ''}
          onValueChange={(font) =>
            onChangeSlideElement({ style: { fontFamily: font?.value } })
          }
        >
          <ComboboxInput aria-label="Choose font" placeholder="Choose a font" />
          <ComboboxPopup>
            <ComboboxEmpty>No fonts found.</ComboboxEmpty>
            <ComboboxList>
              {(font: CodeFont) => (
                // Each option previews itself in its own typeface — the whole
                // point of the choice is how it looks.
                <ComboboxItem
                  key={font.value}
                  value={font}
                  style={{ fontFamily: font.family }}
                >
                  {font.name}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </Combobox>
      </Field>

      <Field>
        <Slider
          {...FONT_SIZE_RANGE}
          value={Number(style?.fontSize) || 14}
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
          value={Number(style?.lineHeight) || 1.6}
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

export default TypographySection;
