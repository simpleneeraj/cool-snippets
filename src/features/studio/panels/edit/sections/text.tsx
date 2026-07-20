'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import ColorField from './color-field';
import SliderField from './slider-field';
import { FIELD_DEFAULTS } from './defaults';
import { FONT_SIZE_RANGE, LETTER_SPACING_RANGE, LINE_HEIGHT_RANGE } from './values';

const DEFAULTS = FIELD_DEFAULTS.text;

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

      <ColorField
        label="Colour"
        value={String(style?.color ?? DEFAULTS.color)}
        defaultValue={DEFAULTS.color}
        onSelect={(color) => onChangeSlideElement({ style: { color } })}
      />

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

export default TextSection;
