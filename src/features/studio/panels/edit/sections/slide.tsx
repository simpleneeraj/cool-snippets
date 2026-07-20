'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { Field, FieldLabel } from '@shared/ui/field';
import { Button } from '@shared/ui/button';
import { useSegment } from '@features/studio/store/segment';
import { SEGMENT_SCREEN } from '@features/studio/model/enums';
import { DEFAULT_SLIDE_PADDING } from '@features/studio/canvas/styles/slide';
import {
  MAX_SLIDE_WIDTH,
  MIN_SLIDE_WIDTH,
} from '@features/studio/store/slides/state';
import SliderField from './slider-field';
import { FIELD_DEFAULTS } from './defaults';
import { SLIDE_PADDING_RANGE } from './values';

const DEFAULTS = FIELD_DEFAULTS.slide;
const CANVAS_WIDTH_RANGE = {
  min: MIN_SLIDE_WIDTH,
  max: MAX_SLIDE_WIDTH,
  step: 10,
};

/**
 * Properties of the artboard itself, shown when the slide — rather than an
 * element — is selected.
 */
const SlideSection = () => {
  const { currentSlide, onChangeSlide } = useSlideEditor();
  const onChangeSegment = useSegment((s) => s.onChangeSegment);

  const background = currentSlide?.background;
  const width = Number(background?.style?.width) || MIN_SLIDE_WIDTH;
  const padding = Number(background?.style?.padding ?? DEFAULT_SLIDE_PADDING);

  // `onChangeSlide` replaces `background` wholesale, so every write has to
  // resend the full object — a partial wipes the type/properties and collapses
  // the artboard.
  const onChangeBackgroundStyle = React.useCallback(
    (patch: Record<string, number>) => {
      onChangeSlide({
        background: {
          ...background,
          style: { ...background?.style, ...patch },
        },
      });
    },
    [background, onChangeSlide],
  );

  return (
    <UIView className="flex flex-col gap-4">
      <SliderField
        label="Canvas width"
        range={CANVAS_WIDTH_RANGE}
        value={width}
        defaultValue={DEFAULTS.width}
        onValueChange={(value) => onChangeBackgroundStyle({ width: value })}
      />

      <SliderField
        label="Padding"
        range={SLIDE_PADDING_RANGE}
        value={padding}
        defaultValue={DEFAULTS.padding}
        onValueChange={(value) => onChangeBackgroundStyle({ padding: value })}
      />

      <Field>
        <FieldLabel className="text-sm font-medium">Background</FieldLabel>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onChangeSegment('screen', SEGMENT_SCREEN.BACKGROUNDS)}
        >
          Browse backgrounds
        </Button>
      </Field>
    </UIView>
  );
};

export default SlideSection;
