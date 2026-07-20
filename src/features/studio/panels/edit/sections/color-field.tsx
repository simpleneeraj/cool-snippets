'use client';

import React from 'react';
import { Field, FieldLabel } from '@shared/ui/field';
import UIColorPicker from '@shared/uikit/UIColorPicker';
import FieldReset from './field-reset';

type Props = {
  label: string;
  value: string;
  /** The colour the field snaps back to when reset. */
  defaultValue: string;
  onSelect: (value: string) => void;
};

/** A colour picker row with its label and an inline reset button. */
const ColorField = ({ label, value, defaultValue, onSelect }: Props) => (
  <Field>
    <div className="flex items-center justify-between gap-1">
      <FieldLabel>{label}</FieldLabel>
      <FieldReset
        isDefault={value === defaultValue}
        onReset={() => onSelect(defaultValue)}
      />
    </div>
    <UIColorPicker value={value} onSelect={onSelect} />
  </Field>
);

export default ColorField;
