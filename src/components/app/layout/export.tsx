'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { format } from 'date-fns';
import appConfig from '@shared/config/site';
import { toastManager } from '@shared/ui/toast';
import { resolveCodeFontFamily } from '@shared/fonts/code';
import { primaryFontFamily, resolveFontSource } from '@shared/fonts/source';
import useCapture from '@/lib/export/use-capture';
import useSlideEditor from '@/store/hooks/use-editor';
import UIView from '@shared/uikit/UIView';
import { LockLineDuotoneIcon, CopyLineDuotoneIcon, DownloadMinimalisticLinearIcon, MagicWand3LinearIcon } from '@solar-icons/react';
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
} from '@shared/ui/dialog';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Field, FieldDescription, FieldLabel } from '@shared/ui/field';
import { Spinner } from '@shared/ui/spinner';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@shared/ui/select';
import { Group } from '@shared/ui/group';


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
    locked: false,
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
    locked: false,
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
    locked: false,
  },
  {
    id: 'print',
    label: 'Print',
    description: 'High-resolution, print-ready',
    pixelRatio: 5,
    maxWidth: 3840,
    recommended: false,
    locked: false,
  },
];

const ExportDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [preview, setPreview] = useState<string | null>(null);
  // const [previewing, setPreviewing] = useState(false);
  // Natural (CSS-pixel) size of the artboard, read off the preview image which
  // is captured at pixelRatio 1. Multiplied by the chosen ratio for the readout.
  // const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(
  //   null,
  // );
  const { currentSlide } = useSlideEditor();

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

  // Export inlines fonts as base64 so the image renders correctly on a machine
  // without them installed. next/font fingerprints the file, so each URL is
  // discovered from the emitted @font-face rule rather than hardcoded.
  //
  // Every code font used anywhere on the slide is collected — not just the
  // selected element's — so the code block's real typeface is always embedded
  // even when nothing (or another element) is selected at export time.
  const exportFonts = React.useCallback(() => {
    // Collect the *primary* family name of every code font on the slide.
    // next/font hands back a family list ('__Font_x', '__Font_Fallback_x');
    // the `@font-face` rule — and therefore both the source lookup and the
    // embedded declaration — is keyed on that first name alone.
    const families = new Set<string>();
    for (const element of currentSlide?.elements ?? []) {
      const id = element.style?.fontFamily;
      if (typeof id === 'string') {
        families.add(primaryFontFamily(resolveCodeFontFamily(id)));
      }
    }
    if (families.size === 0) {
      families.add(primaryFontFamily(resolveCodeFontFamily(undefined)));
    }

    return Array.from(families)
      .map((fontFamily) => {
        const src = resolveFontSource(fontFamily);
        return src ? { src, fontFamily } : null;
      })
      .filter((entry): entry is { src: string; fontFamily: string } => !!entry);
  }, [currentSlide?.elements]);

  // Capture a WYSIWYG thumbnail when the dialog opens so the user sees exactly
  // what will be exported. Kept at pixelRatio 1 to stay cheap; failures are
  // swallowed and simply show no preview rather than blocking export.
  // React.useEffect(() => {
  //   if (!isOpen) return;

  //   let active = true;
  //   setPreview(null);
  //   setDimensions(null);
  //   setPreviewing(true);

  //   captureImageUrl({ imageFormat: 'png', pixelRatio: 1, fonts: exportFonts() })
  //     .then((url) => {
  //       if (active) setPreview(url);
  //     })
  //     .catch(() => {})
  //     .finally(() => {
  //       if (active) setPreviewing(false);
  //     });

  //   return () => {
  //     active = false;
  //   };
  // }, [isOpen, captureImageUrl, exportFonts]);

  const activePreset = EXPORT_PRESETS.find((p) => p.id === state.preset);

  const pixelRatio = activePreset?.pixelRatio ?? 2;

  // Actual export resolution = artboard size × the preset's pixel ratio.
  // const outputSize = dimensions
  //   ? {
  //       w: Math.round(dimensions.w * pixelRatio),
  //       h: Math.round(dimensions.h * pixelRatio),
  //     }
  //   : null;

  const onExport = async () => {
    const currentDate = format(new Date(), 'yyyy-MM-dd-HH-mm-ss');
    const fileName = slugify(`${appConfig.snippet.output}-${currentDate}`, {
      lower: true,
      replacement: '-',
    });

    try {
      await captureImage({
        ...state,
        pixelRatio,
        fileName: state.fileName || fileName,
        fonts: exportFonts(),
      });
    } catch (e) {
      console.error('[export] capture failed:', e);
      toastManager.add({
        title: 'Export failed',
        description:
          e instanceof Error
            ? e.message
            : 'The image could not be generated. Please try again.',
        type: 'error',
      });
    }
  };
  const onCopy = async () => {
    try {
      await copyToClipboard({
        ...state,
        pixelRatio,
        fonts: exportFonts(),
      });

      toastManager.add({
        title: 'Image copied',
        description: 'The image is on your clipboard.',
        type: 'success',
      });
    } catch {
      toastManager.add({
        title: 'Copy not supported',
        description: `Clipboard copy is not available for ${state.imageFormat.toUpperCase()}. Try PNG or JPEG.`,
        type: 'error',
      });
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
        <DownloadMinimalisticLinearIcon />
        Export
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Export Image</DialogTitle>
          <DialogDescription>
            Download or copy your code as a high-quality image.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <UIView className="flex flex-col gap-4 w-full">
            {/* WYSIWYG preview of exactly what will be exported. The
                checkerboard lives on the image itself, so it shows only through
                real transparency (e.g. the artboard's rounded corners) rather
                than as letterbox bars around a contained image. */}
            {/* <UIView className="w-full gap-2">
              <UIView className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/30 p-4">
                {previewing ? (
                  <Spinner />
                ) : preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Export preview"
                    onLoad={(event) =>
                      setDimensions({
                        w: event.currentTarget.naturalWidth,
                        h: event.currentTarget.naturalHeight,
                      })
                    }
                    className="max-h-full max-w-full rounded-md bg-[repeating-conic-gradient(#808080_0%_25%,transparent_0%_50%)] bg-size-[12px_12px] shadow-lg ring-1 ring-black/10"
                  />
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Preview unavailable
                  </span>
                )}

                {outputSize && (
                  <span className="absolute bottom-2 right-2 rounded-md bg-background/85 px-2 py-1 font-mono text-[11px] text-muted-foreground shadow-sm backdrop-blur">
                    {outputSize.w} × {outputSize.h}
                  </span>
                )}
              </UIView>

              <UIView className="flex items-center justify-between px-0.5 text-xs text-muted-foreground">
                <span>Live preview · exact output</span>
                <span className="font-medium text-foreground">
                  {state.imageFormat?.toUpperCase()} · {pixelRatio}×
                </span>
              </UIView>
            </UIView> */}

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
                  <MagicWand3LinearIcon />
                </Button>
              </Group>
            </Field>
            <UIView className="flex gap-2">
              <Field className={'w-full'}>
                <FieldLabel>Image size</FieldLabel>
                <FieldDescription>
                  Higher sizes produce sharper images.
                </FieldDescription>
                <Select
                  value={state.preset}
                  onValueChange={(v) => setValue('preset', v!)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose platform">
                      {(value) =>
                        EXPORT_PRESETS.find((p) => p.id === value)?.label ??
                        String(value ?? '')
                      }
                    </SelectValue>
                  </SelectTrigger>

                  <SelectPopup>
                    {EXPORT_PRESETS.map((preset) => {
                      const isLocked = preset.locked;

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
                              {isLocked && <LockLineDuotoneIcon />}
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
              <Field className={'w-full'}>
                <FieldLabel>File format</FieldLabel>
                <FieldDescription>
                  Choose the format that works for you.
                </FieldDescription>
                <Select
                  value={state.imageFormat}
                  onValueChange={(v) => setValue('imageFormat', v as Format)}
                >
                  <SelectTrigger className={'w-full'}>
                    <SelectValue placeholder="Choose format">
                      {(value) =>
                        FORMAT_PRESETS.find((f) => f.value === value)?.label ??
                        String(value ?? '')
                      }
                    </SelectValue>
                  </SelectTrigger>

                  <SelectPopup>
                    {FORMAT_PRESETS.map((format) => {
                      const isLocked = format.locked;

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
                              {isLocked && <LockLineDuotoneIcon />}
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
            disabled={isCopying}
            onClick={onCopy}
          >
            {isCopying ? <Spinner /> : <CopyLineDuotoneIcon />}
            Copy image
          </DialogClose>

          <Button disabled={isDownloading} onClick={onExport}>
            {isDownloading ? <Spinner /> : <DownloadMinimalisticLinearIcon />}
            Export image
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};

export default ExportDropdown;
