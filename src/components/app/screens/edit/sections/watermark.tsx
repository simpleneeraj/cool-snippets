'use client';

import React from 'react';
import { Upload } from 'lucide-react';
import UIView from '@shared/uikit/UIView';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Spinner } from '@shared/ui/spinner';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import UIColorPicker from '@shared/uikit/UIColorPicker';
import useSlideEditor from '@/store/hooks/use-editor';
import useImageUpload from '@/lib/assets/use-image-upload';
import { WatermarkPropertiesType } from '@shared/types/editor';
import { WATERMARK_MODE } from '@shared/types/enums';
import { ToggleGroup, ToggleGroupItem } from '@shared/ui/toggle-group';
import { FONT_SIZE_RANGE, OPACITY_RANGE, WATERMARK_MODES } from './values';

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

          <Field>
            <FieldLabel>Colour</FieldLabel>
            <UIColorPicker
              value={String(currentElement?.style?.color ?? '#ffffff')}
              onSelect={(color) => onChangeSlideElement({ style: { color } })}
            />
          </Field>

          <Field>
            <Slider
              {...FONT_SIZE_RANGE}
              value={Number(currentElement?.style?.fontSize) || 12}
              onValueChange={(fontSize) =>
                onChangeSlideElement({ style: { fontSize: Number(fontSize) } })
              }
            >
              <div className="mb-2 flex items-center justify-between gap-1">
                <FieldLabel className="text-sm font-medium">
                  Font size
                </FieldLabel>
                <SliderValue />
              </div>
            </Slider>
          </Field>
        </React.Fragment>
      ) : (
        <Button variant="outline" onClick={onPickImage} disabled={uploading}>
          {uploading ? <Spinner /> : <Upload className="size-4" />}
          {properties?.image?.assetId || properties?.image?.src
            ? 'Replace logo'
            : 'Upload logo'}
        </Button>
      )}

      <Field>
        <Slider
          {...OPACITY_RANGE}
          value={properties?.opacity ?? 0.6}
          onValueChange={(opacity) => update({ opacity: Number(opacity) })}
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Opacity</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
    </UIView>
  );
};

export default WatermarkSection;
