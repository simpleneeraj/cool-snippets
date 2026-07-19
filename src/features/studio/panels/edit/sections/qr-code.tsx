'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import { Input } from '@shared/ui/input';
import { Field, FieldDescription, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import UIColorPicker from '@shared/uikit/UIColorPicker';
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
import { QR_ERROR_LEVELS, QR_MARGIN_RANGE, QR_SIZE_RANGE } from './values';

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

      <Field>
        <Slider
          {...QR_SIZE_RANGE}
          value={properties?.size ?? 128}
          onValueChange={(size) => update({ size: Number(size) })}
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Size</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>

      <Field>
        <FieldLabel>Foreground</FieldLabel>
        <UIColorPicker
          value={properties?.fgColor ?? '#000000'}
          onSelect={(fgColor) => update({ fgColor })}
        />
      </Field>

      <Field>
        <FieldLabel>Background</FieldLabel>
        <UIColorPicker
          value={properties?.bgColor ?? '#ffffff'}
          onSelect={(bgColor) => update({ bgColor })}
        />
      </Field>

      <Field>
        <FieldLabel>Error correction</FieldLabel>
        <FieldDescription>
          Higher levels stay scannable when partly covered, at the cost of
          density.
        </FieldDescription>
        <Select
          value={properties?.level ?? QR_ERROR_LEVEL.MEDIUM}
          onValueChange={(level) =>
            update({ level: level as QR_ERROR_LEVEL })
          }
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

      <Field>
        <Slider
          {...QR_MARGIN_RANGE}
          value={properties?.marginSize ?? 2}
          onValueChange={(marginSize) =>
            update({ marginSize: Number(marginSize) })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Quiet zone</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
    </UIView>
  );
};

export default QrCodeSection;
