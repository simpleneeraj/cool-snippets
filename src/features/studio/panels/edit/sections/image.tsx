'use client';

import React from 'react';
import { Upload } from 'lucide-react';
import UIView from '@shared/uikit/UIView';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Field, FieldLabel } from '@shared/ui/field';
import { Spinner } from '@shared/ui/spinner';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import useImageUpload from '@features/studio/lib/assets/use-image-upload';
import useAsset from '@features/studio/lib/assets/use-asset';
import { AssetRefType } from '@features/studio/model/editor';
import SliderField from './slider-field';
import { FIELD_DEFAULTS } from './defaults';
import { CORNER_RADIUS_RANGE, OPACITY_RANGE } from './values';

const DEFAULTS = FIELD_DEFAULTS.image;

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

      <SliderField
        label="Corner radius"
        range={CORNER_RADIUS_RANGE}
        value={Number(currentElement?.style?.borderRadius) || 0}
        defaultValue={DEFAULTS.borderRadius}
        onValueChange={(borderRadius) =>
          onChangeSlideElement({ style: { borderRadius } })
        }
      />

      <SliderField
        label="Opacity"
        range={OPACITY_RANGE}
        value={
          currentElement?.style?.opacity === undefined
            ? DEFAULTS.opacity
            : Number(currentElement.style.opacity)
        }
        defaultValue={DEFAULTS.opacity}
        onValueChange={(opacity) =>
          onChangeSlideElement({ style: { opacity } })
        }
      />
    </UIView>
  );
};

export default ImageSection;
