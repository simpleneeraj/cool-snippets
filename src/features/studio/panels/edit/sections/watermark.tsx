'use client';

import React from 'react';
import { Upload } from 'lucide-react';
import UIView from '@shared/uikit/UIView';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Spinner } from '@shared/ui/spinner';
import { Field, FieldLabel } from '@shared/ui/field';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import useImageUpload from '@features/studio/lib/assets/use-image-upload';
import { WatermarkPropertiesType } from '@features/studio/model/editor';
import { WATERMARK_MODE } from '@features/studio/model/enums';
import { ToggleGroup, ToggleGroupItem } from '@shared/ui/toggle-group';
import ColorField from './color-field';
import SliderField from './slider-field';
import { FIELD_DEFAULTS } from './defaults';
import { FONT_SIZE_RANGE, OPACITY_RANGE, WATERMARK_MODES } from './values';

const DEFAULTS = FIELD_DEFAULTS.watermark;

const WatermarkSection = () => {
  const { currentElement, onChangeSlideElement, onReplaceElementProperties } =
    useSlideEditor();
  const { pickImage, uploading } = useImageUpload();

  const properties = currentElement?.properties as
    | WatermarkPropertiesType
    | undefined;
  const mode = properties?.mode ?? WATERMARK_MODE.TEXT;

  const update = (patch: WatermarkPropertiesType) =>
    onChangeSlideElement({ properties: patch });

  const onPickImage = React.useCallback(async () => {
    const image = await pickImage();
    if (!image) return;
    onReplaceElementProperties({ ...properties, image });
  }, [onReplaceElementProperties, pickImage, properties]);

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Type</FieldLabel>
        <ToggleGroup
          value={[mode]}
          onValueChange={(value) => {
            const next = value[0] as WATERMARK_MODE | undefined;
            if (next) update({ mode: next });
          }}
        >
          {WATERMARK_MODES.map((option) => (
            <ToggleGroupItem key={option.value} value={option.value}>
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </Field>

      {mode === WATERMARK_MODE.TEXT ? (
        <React.Fragment>
          <Field>
            <FieldLabel>Text</FieldLabel>
            <Input
              value={properties?.text ?? ''}
              placeholder="Made with Cool Snippets"
              onChange={(event) => update({ text: event.target.value })}
            />
          </Field>

          <ColorField
            label="Colour"
            value={String(currentElement?.style?.color ?? DEFAULTS.color)}
            defaultValue={DEFAULTS.color}
            onSelect={(color) => onChangeSlideElement({ style: { color } })}
          />

          <SliderField
            label="Font size"
            range={FONT_SIZE_RANGE}
            value={Number(currentElement?.style?.fontSize) || DEFAULTS.fontSize}
            defaultValue={DEFAULTS.fontSize}
            onValueChange={(fontSize) =>
              onChangeSlideElement({ style: { fontSize } })
            }
          />
        </React.Fragment>
      ) : (
        <Button variant="outline" onClick={onPickImage} disabled={uploading}>
          {uploading ? <Spinner /> : <Upload className="size-4" />}
          {properties?.image?.assetId || properties?.image?.src
            ? 'Replace logo'
            : 'Upload logo'}
        </Button>
      )}

      <SliderField
        label="Opacity"
        range={OPACITY_RANGE}
        value={properties?.opacity ?? DEFAULTS.opacity}
        defaultValue={DEFAULTS.opacity}
        onValueChange={(opacity) => update({ opacity })}
      />
    </UIView>
  );
};

export default WatermarkSection;
