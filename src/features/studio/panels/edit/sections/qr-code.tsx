'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import { Input } from '@shared/ui/input';
import { Field, FieldDescription, FieldLabel } from '@shared/ui/field';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import { QrCodePropertiesType } from '@features/studio/model/editor';
import { QR_ERROR_LEVEL } from '@features/studio/model/enums';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@shared/ui/select';
import ColorField from './color-field';
import SliderField from './slider-field';
import FieldReset from './field-reset';
import { FIELD_DEFAULTS } from './defaults';
import { QR_ERROR_LEVELS, QR_MARGIN_RANGE, QR_SIZE_RANGE } from './values';

const DEFAULTS = FIELD_DEFAULTS.qrCode;

const QrCodeSection = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();
  const properties = currentElement?.properties as
    | QrCodePropertiesType
    | undefined;

  const update = (patch: QrCodePropertiesType) =>
    onChangeSlideElement({ properties: patch });

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Content</FieldLabel>
        <FieldDescription>
          A URL, or any text you want encoded.
        </FieldDescription>
        <Input
          value={properties?.value ?? ''}
          placeholder="https://example.com"
          onChange={(event) => update({ value: event.target.value })}
        />
      </Field>

      <SliderField
        label="Size"
        range={QR_SIZE_RANGE}
        value={properties?.size ?? DEFAULTS.size}
        defaultValue={DEFAULTS.size}
        onValueChange={(size) => update({ size })}
      />

      <ColorField
        label="Foreground"
        value={properties?.fgColor ?? DEFAULTS.fgColor}
        defaultValue={DEFAULTS.fgColor}
        onSelect={(fgColor) => update({ fgColor })}
      />

      <ColorField
        label="Background"
        value={properties?.bgColor ?? DEFAULTS.bgColor}
        defaultValue={DEFAULTS.bgColor}
        onSelect={(bgColor) => update({ bgColor })}
      />

      <Field>
        <div className="flex items-center justify-between gap-1">
          <FieldLabel>Error correction</FieldLabel>
          <FieldReset
            isDefault={(properties?.level ?? DEFAULTS.level) === DEFAULTS.level}
            onReset={() => update({ level: DEFAULTS.level })}
          />
        </div>
        <FieldDescription>
          Higher levels stay scannable when partly covered, at the cost of
          density.
        </FieldDescription>
        <Select
          value={properties?.level ?? QR_ERROR_LEVEL.MEDIUM}
          onValueChange={(level) => update({ level: level as QR_ERROR_LEVEL })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a level" />
          </SelectTrigger>
          <SelectPopup>
            {QR_ERROR_LEVELS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </Field>

      <SliderField
        label="Quiet zone"
        range={QR_MARGIN_RANGE}
        value={properties?.marginSize ?? DEFAULTS.marginSize}
        defaultValue={DEFAULTS.marginSize}
        onValueChange={(marginSize) => update({ marginSize })}
      />
    </UIView>
  );
};

export default QrCodeSection;
