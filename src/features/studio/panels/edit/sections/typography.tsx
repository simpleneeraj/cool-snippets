'use client';

import UIView from '@shared/uikit/UIView';
import CODE_FONTS, { type CodeFont } from '@shared/fonts/code';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { Field, FieldLabel } from '@shared/ui/field';
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@shared/ui/combobox';
import SliderField from './slider-field';
import FieldReset from './field-reset';
import { FIELD_DEFAULTS } from './defaults';
import {
  FONT_SIZE_RANGE,
  LETTER_SPACING_RANGE,
  LINE_HEIGHT_RANGE,
} from './values';

const DEFAULTS = FIELD_DEFAULTS.typography;

const TypographySection = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();
  const style = currentElement?.style;

  const selectedFont = CODE_FONTS.find(
    (font) => font.value === style?.fontFamily,
  );

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <div className="flex items-center justify-between gap-1">
          <FieldLabel>Font family</FieldLabel>
          <FieldReset
            isDefault={style?.fontFamily === DEFAULTS.fontFamily}
            onReset={() =>
              onChangeSlideElement({
                style: { fontFamily: DEFAULTS.fontFamily },
              })
            }
          />
        </div>
        <Combobox<CodeFont>
          items={CODE_FONTS}
          value={selectedFont ?? null}
          itemToStringLabel={(font) => font?.name ?? ''}
          onValueChange={(font) =>
            onChangeSlideElement({
              style: { fontFamily: font?.value },
            })
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

      <SliderField
        label="Font size"
        range={FONT_SIZE_RANGE}
        value={Number(style?.fontSize) || DEFAULTS.fontSize}
        defaultValue={DEFAULTS.fontSize}
        onValueChange={(fontSize) =>
          onChangeSlideElement({ style: { fontSize } })
        }
      />

      <SliderField
        label="Line height"
        range={LINE_HEIGHT_RANGE}
        value={Number(style?.lineHeight) || DEFAULTS.lineHeight}
        defaultValue={DEFAULTS.lineHeight}
        onValueChange={(lineHeight) =>
          onChangeSlideElement({ style: { lineHeight } })
        }
      />

      <SliderField
        label="Letter spacing"
        range={LETTER_SPACING_RANGE}
        value={Number(style?.letterSpacing) || DEFAULTS.letterSpacing}
        defaultValue={DEFAULTS.letterSpacing}
        onValueChange={(letterSpacing) =>
          onChangeSlideElement({ style: { letterSpacing } })
        }
      />
    </UIView>
  );
};

export default TypographySection;
