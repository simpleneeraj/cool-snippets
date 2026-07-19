'use client';

import React from 'react';
import { Upload } from 'lucide-react';
import UIView from '@shared/uikit/UIView';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import { Spinner } from '@shared/ui/spinner';
import useSlideEditor from '@/store/hooks/use-editor';
import useImageUpload from '@/lib/assets/use-image-upload';
import useAsset from '@/lib/assets/use-asset';
import { AssetRefType } from '@shared/types/editor';
import { CORNER_RADIUS_RANGE, OPACITY_RANGE } from './values';

const ImageSection = () => {
  const { currentElement, onChangeSlideElement, onReplaceElementProperties } =
    useSlideEditor();
  const { pickImage, uploading } = useImageUpload();

  const properties = currentElement?.properties as AssetRefType | undefined;
  const preview = useAsset(properties);

  const onReplace = React.useCallback(async () => {
    const asset = await pickImage();
    if (!asset) return;
    // Replaces the whole reference: merging would keep the previous assetId
    // alongside the new src and resolve to the wrong image.
    onReplaceElementProperties(asset);
  }, [onReplaceElementProperties, pickImage]);

  return (
    <UIView className="flex flex-col gap-4">
      {preview && (
        <UIView className="overflow-hidden rounded-lg border border-border bg-muted">
          <img
            src={preview}
            alt={properties?.alt ?? ''}
            className="max-h-32 w-full object-contain"
          />
        </UIView>
      )}

      <Button variant="outline" onClick={onReplace} disabled={uploading}>
        {uploading ? <Spinner /> : <Upload className="size-4" />}
        {preview ? 'Replace image' : 'Upload image'}
      </Button>

      <Field>
        <FieldLabel>Alt text</FieldLabel>
        <Input
          value={properties?.alt ?? ''}
          placeholder="Describe the image"
          onChange={(event) =>
            onChangeSlideElement({ properties: { alt: event.target.value } })
          }
        />
      </Field>

      <Field>
        <Slider
          {...CORNER_RADIUS_RANGE}
          value={Number(currentElement?.style?.borderRadius) || 0}
          onValueChange={(borderRadius) =>
            onChangeSlideElement({
              style: { borderRadius: Number(borderRadius) },
            })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">
              Corner radius
            </FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>

      <Field>
        <Slider
          {...OPACITY_RANGE}
          value={
            currentElement?.style?.opacity === undefined
              ? 1
              : Number(currentElement.style.opacity)
          }
          onValueChange={(opacity) =>
            onChangeSlideElement({ style: { opacity: Number(opacity) } })
          }
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

export default ImageSection;
