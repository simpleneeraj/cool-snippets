'use client';

import React from 'react';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import FieldReset from './field-reset';

type Range = { min: number; max: number; step: number };

type Props = {
  label: string;
  range: Range;
  value: number;
  /** The value the field snaps back to when reset. */
  defaultValue: number;
  onValueChange: (value: number) => void;
};

/**
 * A slider row with its label, live value and an inline reset button — the
 * shared shape for every numeric field in the inspector.
 */
const SliderField = ({
  label,
  range,
  value,
  defaultValue,
  onValueChange,
}: Props) => (
  <Field>
    <Slider
      min={range.min}
      max={range.max}
      step={range.step}
      value={value}
      onValueChange={(next) => onValueChange(Number(next))}
    >
      <div className="mb-2 flex items-center justify-between gap-1">
        <FieldLabel className="text-sm font-medium">{label}</FieldLabel>
        <div className="flex items-center gap-1">
          <SliderValue />
          <FieldReset
            isDefault={value === defaultValue}
            onReset={() => onValueChange(defaultValue)}
          />
        </div>
      </div>
    </Slider>
  </Field>
);

export default SliderField;
