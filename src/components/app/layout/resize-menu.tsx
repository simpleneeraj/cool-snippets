'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { ScaleLineDuotoneIcon, LockLineDuotoneIcon } from '@solar-icons/react';

import UIView from '@/app-kit/source/UIView';
import { Button } from '@/app-kit/ui/button';
import { Input } from '@/app-kit/ui/input';
import { Toggle } from '@/app-kit/ui/toggle';
import { Spinner } from '@/app-kit/ui/spinner';
import { Separator } from '@/app-kit/ui/separator';
import { Field, FieldLabel } from '@/app-kit/ui/field';

import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '@/app-kit/ui/popover';

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@/app-kit/ui/select';

import aspectRatioArray from '@data/resize.json';
import useSlideEditor from '@/store/hooks/use-editor';

type ResizeType = {
  ratio: string;
  width: number;
  height: number;
};

const ResizeMenu: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const { currentSlide, onChangeSlide } = useSlideEditor();
  const [locked, setLocked] = React.useState(true);

  const { handleSubmit, setValue, watch, reset } = useForm<ResizeType>({
    defaultValues: {
      ratio: '',
      width: 900,
      height: 600,
    },
  });

  const width = watch('width');
  const height = watch('height');
  const ratio = watch('ratio');

  // derive aspect ratio safely
  const aspect = React.useMemo(() => {
    if (ratio) {
      const r = aspectRatioArray.find((a) => a.value === ratio);
      if (r) return r.resolution.width / r.resolution.height;
    }

    if (width && height) {
      return width / height;
    }

    return null;
  }, [ratio, width, height]);

  // Sync resize form state when the active slide changes
  React.useEffect(() => {
    // Guard: no slide or no background styles → nothing to sync
    if (!currentSlide?.background?.style) return;

    // Normalize width & height from slide styles (ensure numbers)
    const width = Number(currentSlide.background.style.width);
    const height = Number(currentSlide.background.style.height);

    // Try to find a matching preset based on exact dimensions
    // This allows the Select to auto-fill when slide size matches a preset
    const matchedPreset = aspectRatioArray.find(
      (preset) =>
        preset.resolution.width === width &&
        preset.resolution.height === height,
    );

    // Reset the form with slide values
    // - ratio: preset value if matched, otherwise empty (custom size)
    // - width/height: authoritative values from the slide
    reset({
      ratio: matchedPreset?.value ?? '',
      width,
      height,
    });
  }, [currentSlide, reset]);

  // Apply aspect ratio → auto update width/height
  React.useEffect(() => {
    if (!ratio) return;

    const aspect = aspectRatioArray.find((r) => r.value === ratio);
    if (!aspect) return;

    setValue('width', aspect.resolution.width);
    setValue('height', aspect.resolution.height);
  }, [ratio, setValue]);

  const onSubmit = async (values: ResizeType) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);

    // `onChangeSlide` replaces `background` wholesale rather than merging, so we
    // must resend the full background (type + properties) with only the size
    // changed — otherwise applying a preset wipes the gradient/wallpaper and
    // padding, and the artboard renders with no background.
    onChangeSlide({
      background: {
        ...currentSlide?.background,
        style: {
          ...currentSlide?.background?.style,
          width: Number(values.width),
          height: Number(values.height),
        },
      },
    });
  };

  const onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValue('width', value);

    if (locked && aspect) {
      setValue('height', Math.round(value / aspect));
    }
  };

  const onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValue('height', value);

    if (locked && aspect) {
      setValue('width', Math.round(value * aspect));
    }
  };

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <ScaleLineDuotoneIcon />
        Resize
      </PopoverTrigger>

      <PopoverPopup className="w-80">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <PopoverTitle className="text-base">Resize Canvas</PopoverTitle>
            <PopoverDescription>
              Adjust the aspect ratio or set a custom width and height.
            </PopoverDescription>
          </div>

          <UIView className="flex flex-col gap-3">
            {/* Aspect Ratio */}
            <Field>
              <FieldLabel>Aspect Ratio</FieldLabel>
              <Select
                items={aspectRatioArray}
                value={ratio}
                onValueChange={(value) =>
                  setValue('ratio', value!, { shouldDirty: true })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select ratio" />
                </SelectTrigger>
                <SelectPopup>
                  {aspectRatioArray.map(({ value, label, resolution }) => (
                    <SelectItem key={value} value={value}>
                      {label}{' '}
                      <span className="text-muted-foreground">
                        ({resolution.width} × {resolution.height})
                      </span>
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>
            </Field>

            <UIView className="flex items-end gap-2">
              <Field>
                <FieldLabel>Width (px)</FieldLabel>
                <Input type="number" value={width} onChange={onWidthChange} />
              </Field>

              <Toggle
                pressed={locked}
                onPressedChange={setLocked}
                variant="outline"
                aria-label="Lock aspect ratio"
              >
                <LockLineDuotoneIcon
                  className={locked ? 'opacity-100' : 'opacity-40'}
                />
              </Toggle>

              <Field>
                <FieldLabel>Height (px)</FieldLabel>
                <Input type="number" value={height} onChange={onHeightChange} />
              </Field>
            </UIView>
          </UIView>

          <Separator className="my-3" />

          <Button className="w-full" type="submit" disabled={loading}>
            {loading && <Spinner />}
            Apply Resize
          </Button>
        </form>
      </PopoverPopup>
    </Popover>
  );
};

export default ResizeMenu;
