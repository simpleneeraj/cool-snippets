'use client';

import React from 'react';
import { Upload } from 'lucide-react';
import UIView from '@shared/uikit/UIView';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Switch } from '@shared/ui/switch';
import { Spinner } from '@shared/ui/spinner';
import { Field, FieldLabel } from '@shared/ui/field';
import { Slider, SliderValue } from '@shared/ui/slider';
import UIColorPicker from '@shared/uikit/UIColorPicker';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import useImageUpload from '@features/studio/lib/assets/use-image-upload';
import { UserInfoPropertiesType } from '@features/studio/model/editor';
import { FONT_SIZE_RANGE } from './values';

const UserInfoSection = () => {
  const { currentElement, onChangeSlideElement, onReplaceElementProperties } =
    useSlideEditor();
  const { pickImage, uploading } = useImageUpload();

  const properties = currentElement?.properties as
    | UserInfoPropertiesType
    | undefined;

  const update = (patch: UserInfoPropertiesType) =>
    onChangeSlideElement({ properties: patch });

  const onPickAvatar = React.useCallback(async () => {
    const avatar = await pickImage();
    if (!avatar) return;
    // The avatar reference is swapped wholesale so a previous assetId cannot
    // survive alongside the new one.
    onReplaceElementProperties({ ...properties, avatar });
  }, [onReplaceElementProperties, pickImage, properties]);

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input
          value={properties?.name ?? ''}
          placeholder="Your Name"
          onChange={(event) => update({ name: event.target.value })}
        />
      </Field>

      <Field>
        <FieldLabel>Handle</FieldLabel>
        <Input
          value={properties?.handle ?? ''}
          placeholder="@yourhandle"
          onChange={(event) => update({ handle: event.target.value })}
        />
      </Field>

      <UIView className="flex flex-row items-center justify-between gap-3">
        <label htmlFor="user-info-avatar" className="text-sm font-medium">
          Show avatar
        </label>
        <Switch
          id="user-info-avatar"
          checked={properties?.showAvatar ?? true}
          onCheckedChange={(showAvatar) => update({ showAvatar })}
        />
      </UIView>

      {(properties?.showAvatar ?? true) && (
        <Button variant="outline" onClick={onPickAvatar} disabled={uploading}>
          {uploading ? <Spinner /> : <Upload className="size-4" />}
          {properties?.avatar?.assetId || properties?.avatar?.src
            ? 'Replace avatar'
            : 'Upload avatar'}
        </Button>
      )}

      <Field>
        <FieldLabel>Text colour</FieldLabel>
        <UIColorPicker
          value={String(currentElement?.style?.color ?? '#ffffff')}
          onSelect={(color) => onChangeSlideElement({ style: { color } })}
        />
      </Field>

      <Field>
        <Slider
          {...FONT_SIZE_RANGE}
          value={Number(currentElement?.style?.fontSize) || 14}
          onValueChange={(fontSize) =>
            onChangeSlideElement({ style: { fontSize: Number(fontSize) } })
          }
        >
          <div className="mb-2 flex items-center justify-between gap-1">
            <FieldLabel className="text-sm font-medium">Font size</FieldLabel>
            <SliderValue />
          </div>
        </Slider>
      </Field>
    </UIView>
  );
};

export default UserInfoSection;
