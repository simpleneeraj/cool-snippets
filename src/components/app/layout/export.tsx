'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { format } from 'date-fns';
import appConfig from '@/constants/site';
import { resolveCodeFontFamily } from '@/app-kit/fonts/code';
import { resolveFontSource } from '@/app-kit/fonts/source';
import { useCapture } from '@/plugins/capture';
import useSlideEditor from '@/store/hooks/use-editor';
import UIView from '@/app-kit/source/UIView';
import { SolarLockLineDuotone } from '@/app-kit/icons/SolarLockLineDuotone';
import { SolarCopyLineDuotone } from '@/app-kit/icons/SolarCopyLineDuotone';
import { SolarCrownLineDuotone } from '@/app-kit/icons/SolarCrownLineDuotone';
import { SolarDownloadMinimalisticLinear } from '@/app-kit/icons/SolarDownloadMinimalisticLinear';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/app-kit/ui/dialog';
import { Button } from '@/app-kit/ui/button';
import { Input } from '@/app-kit/ui/input';
import { Field, FieldDescription, FieldLabel } from '@/app-kit/ui/field';
import { Spinner } from '@/app-kit/ui/spinner';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@/app-kit/ui/select';
import { Group } from '@/app-kit/ui/group';
import { SolarMagicStick3Linear } from '@/app-kit/icons/SolarMagicStick3Linear';

enum Format {
  WEBP = 'webp',
  PNG = 'png',
  JPEG = 'jpeg',
  SVG = 'svg',
}

type ExportFormValues = {
  preset: string;
  fileName: string;
  imageFormat: Format;
  pixelRatio: string;
};

const ExportDropdown: React.FC = () => {
  const FORMAT_PRESETS = [
    {
      label: 'WEBP',
      value: Format.WEBP,
      description: 'Smaller size, modern browsers (recommended)',
      recommended: true,
      transparent: true,
      locked: false,
    },
    {
      label: 'PNG',
      value: Format.PNG,
      description: 'Best quality, supports transparency',
      recommended: false,
      transparent: true,
      locked: true,
    },
    {
      label: 'JPEG',
      value: Format.JPEG,
      description: 'Smaller size, no transparency',
      recommended: false,
      transparent: false,
      locked: false,
    },
    {
      label: 'SVG',
      value: Format.SVG,
      description: 'Vector format, infinite scaling',
      recommended: false,
      transparent: true,
      locked: true,
    },
  ];
  const EXPORT_PRESETS = [
    {
      id: 'social',
      label: 'Social',
      description: 'Twitter, LinkedIn, Instagram posts',
      pixelRatio: 2,
      maxWidth: 1200,
      recommended: true,
      locked: false,
    },
    {
      id: 'presentation',
      label: 'Presentation',
      description: 'Slides, demos, talks',
      pixelRatio: 3,
      maxWidth: 1920,
      recommended: false,
      locked: false,
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      description: 'Dribbble, Behance, website',
      pixelRatio: 4,
      maxWidth: 2560,
      recommended: false,
      locked: true,
    },
    {
      id: 'print',
      label: 'Print',
      description: 'High-resolution, print-ready',
      pixelRatio: 5,
      maxWidth: 3840,
      recommended: false,
      locked: true,
    },
  ];

  const isPremium = true;

  const [isOpen, setIsOpen] = useState(false);
  const { currentElement } = useSlideEditor();

  const { captureImage, isDownloading, isCopying, copyToClipboard } =
    useCapture();

  const { register, watch, setValue } = useForm<ExportFormValues>({
    defaultValues: {
      fileName: '',
      preset: 'social',
      imageFormat: Format.WEBP,
      pixelRatio:
        typeof window !== 'undefined' ? `${window.devicePixelRatio || 1}` : '1',
    },
  });

  const state = watch();

  // Export inlines the font as base64 so the image renders correctly on a
  // machine without it installed. next/font fingerprints the file, so the URL
  // is discovered from the emitted @font-face rule rather than hardcoded.
  const exportFonts = React.useCallback(() => {
    const fontFamily = resolveCodeFontFamily(
      currentElement?.style?.fontFamily as string,
    );
    const src = resolveFontSource(fontFamily);
    return src ? [{ src, fontFamily }] : [];
  }, [currentElement?.style?.fontFamily]);

  // console.log(state);
  const activePreset = EXPORT_PRESETS.find((p) => p.id === state.preset);

  const pixelRatio = activePreset?.pixelRatio ?? 2;

  const onExport = async () => {
    const currentDate = format(new Date(), 'yyyy-MM-dd-HH-mm-ss');
    const fileName = slugify(`${appConfig.snippet.output}-${currentDate}`, {
      lower: true,
      replacement: '-',
    });

    await captureImage({
      ...state,
      pixelRatio,
      fileName: state.fileName || fileName,
      fonts: exportFonts(),
    });
  };
  const onCopy = async () => {
    try {
      await copyToClipboard({
        ...state,
        pixelRatio,
        fonts: exportFonts(),
      });

      // addToast({
      //   title: 'Image Copied!',
      //   description:
      //     'The image has been successfully copied to your clipboard.',
      //   color: 'success',
      //   timeout: 3000,
      //   shouldShowTimeoutProgress: true,
      // });
    } catch (error) {
      // addToast({
      //   title: 'Clipboard Copy Not Supported',
      //   description: `Clipboard copy is not supported for ${state.imageFormat.toUpperCase()} format. `,
      //   color: 'warning',
      //   timeout: 4000,
      //   shouldShowTimeoutProgress: true,
      // });
    }
  };

  const generateFileName = () => {
    const timestamp = format(new Date(), 'yyyy-MM-dd-HH-mm');
    return slugify(`beautiful-code-${timestamp}`, {
      lower: true,
      strict: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={<Button />}>
        <SolarDownloadMinimalisticLinear />
        Export
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Export Image</DialogTitle>
          <DialogDescription>
            Download or copy your code as a high-quality image.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel className="">
          <UIView className="flex flex-col gap-4 w-full">
            <Field>
              <FieldLabel>File name</FieldLabel>
              <FieldDescription>
                This will be used when saving or downloading the image.
              </FieldDescription>
              <Group
                aria-label="File name generator"
                className="w-full flex items-center"
              >
                <Input
                  {...register('fileName')}
                  placeholder="beautiful-code"
                  aria-describedby="filename-help"
                />

                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Generate file name"
                  title="Generate file name"
                  onClick={() => {
                    if (!state.fileName) {
                      setValue('fileName', generateFileName(), {
                        shouldDirty: true,
                        shouldTouch: true,
                      });
                    }
                  }}
                >
                  <SolarMagicStick3Linear />
                </Button>
              </Group>
            </Field>
            <UIView className="flex gap-2">
              <Field>
                <FieldLabel>Image size</FieldLabel>
                <FieldDescription>
                  Higher sizes produce sharper images.
                </FieldDescription>
                <Select
                  value={state.preset}
                  onValueChange={(v) => setValue('preset', v!)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose platform" />
                  </SelectTrigger>

                  <SelectPopup>
                    {EXPORT_PRESETS.map((preset) => {
                      const isLocked = preset.locked && !isPremium;

                      return (
                        <SelectItem
                          key={preset.id}
                          value={preset.id}
                          disabled={isLocked}
                        >
                          <UIView className="flex flex-col gap-0.5">
                            <UIView className="flex items-center gap-2">
                              <span className="font-medium">
                                {preset.label}
                              </span>
                              {preset.recommended && (
                                <span className="text-xs text-primary">
                                  Recommended
                                </span>
                              )}
                              {isLocked && <SolarLockLineDuotone />}
                            </UIView>

                            <span className="text-xs text-muted-foreground">
                              {preset.description} · {preset.pixelRatio}×
                            </span>
                          </UIView>
                        </SelectItem>
                      );
                    })}
                  </SelectPopup>
                </Select>
              </Field>

              <Field>
                <FieldLabel>File format</FieldLabel>
                <FieldDescription>
                  Choose the format that works best for your use case.
                </FieldDescription>
                <Select
                  value={state.imageFormat}
                  onValueChange={(v) => setValue('imageFormat', v as Format)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose format" />
                  </SelectTrigger>

                  <SelectPopup>
                    {FORMAT_PRESETS.map((format) => {
                      const isLocked = format.locked && !isPremium;

                      return (
                        <SelectItem
                          key={format.value}
                          value={format.value}
                          disabled={isLocked}
                        >
                          <UIView className="flex flex-col gap-0.5">
                            <UIView className="flex items-center gap-2">
                              <span className="font-medium">
                                {format.label}
                              </span>
                              {format.recommended && (
                                <span className="text-xs text-primary">
                                  Recommended
                                </span>
                              )}
                              {isLocked && <SolarLockLineDuotone />}
                            </UIView>

                            <span className="text-xs text-muted-foreground">
                              {format.description}
                            </span>
                          </UIView>
                        </SelectItem>
                      );
                    })}
                  </SelectPopup>
                </Select>
              </Field>
            </UIView>
          </UIView>
        </DialogPanel>
        <DialogFooter>
          <DialogClose
            render={<Button variant="ghost" />}
            disabled={!isPremium || isCopying}
            onClick={onCopy}
          >
            {isCopying ? <Spinner /> : <SolarCopyLineDuotone />}
            {isPremium ? 'Copy image' : 'Upgrade to unlock'}
          </DialogClose>

          <Button disabled={!isPremium || isDownloading} onClick={onExport}>
            {isDownloading ? (
              <Spinner />
            ) : isPremium ? (
              <SolarDownloadMinimalisticLinear />
            ) : (
              <SolarCrownLineDuotone />
            )}
            {isPremium ? 'Export image' : 'Upgrade to Pro'}
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};

export default ExportDropdown;
