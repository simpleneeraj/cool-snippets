'use client';

import React from 'react';
import { toCanvas, toSvg } from 'html-to-image';
import { buildFontEmbedCss, type FontFaceSource } from '@shared/fonts/source';

/**
 * Image capture for the studio, built on the `html-to-image` library.
 *
 * The artboard is marked with `data-capture="capture-container"` (see
 * `widget/code/container.tsx`); this hook finds that node and rasterises it.
 * Fonts are embedded from a precomputed `@font-face` stylesheet so only the
 * faces used on the canvas are inlined — see `buildFontEmbedCss`.
 */

export type CaptureFont = FontFaceSource;

export type CaptureFormat = 'png' | 'jpeg' | 'webp' | 'svg';

export type CaptureOptions = {
  imageFormat?: CaptureFormat;
  pixelRatio?: number;
  fileName?: string;
  quality?: number;
  fonts?: CaptureFont[];
};

const CAPTURE_SELECTOR = '[data-capture="capture-container"]';

const getNode = (): HTMLElement | null =>
  typeof document === 'undefined'
    ? null
    : (document.querySelector(CAPTURE_SELECTOR) as HTMLElement | null);

const triggerDownload = (url: string, name: string) => {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
};

const canvasToBlob = (
  canvas: HTMLCanvasElement,
  type: string,
  quality?: number,
) =>
  new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality));

// html-to-image rasterises the current layout synchronously; if a web font is
// still loading, the clone measures with the fallback face and the image ships
// with the wrong metrics. Waiting on the font set (best-effort) avoids that.
const awaitFontsReady = async () => {
  try {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      await (document as Document & { fonts: FontFaceSet }).fonts.ready;
    }
  } catch {
    // Non-fatal — proceed with whatever is loaded.
  }
};

const useCapture = () => {
  const [isDownloading, setDownloading] = React.useState(false);
  const [isCopying, setCopying] = React.useState(false);

  // Shared html-to-image options. `fontEmbedCSS` is precomputed so the library
  // embeds only the used fonts instead of scanning every @font-face on the page.
  const buildOptions = React.useCallback(async (options: CaptureOptions) => {
    return {
      // `cacheBust` appends `?t=…` to every resource URL, which corrupts
      // `blob:`/`data:` sources (uploaded images) and makes the clone fail to
      // load — so it stays off. Fonts are embedded explicitly below instead.
      quality: options.quality ?? 1,
      pixelRatio: options.pixelRatio ?? 1,
      fontEmbedCSS: await buildFontEmbedCss(options.fonts ?? []),
    };
  }, []);

  const captureImage = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      const node = getNode();
      if (!node) return;

      const format = options.imageFormat ?? 'png';
      const name = `${options.fileName ?? 'export'}.${format}`;
      await awaitFontsReady();
      const opts = await buildOptions(options);

      setDownloading(true);
      try {
        if (format === 'svg') {
          triggerDownload(await toSvg(node, opts), name);
          return;
        }

        const canvas = await toCanvas(node, opts);
        const blob = await canvasToBlob(
          canvas,
          `image/${format}`,
          options.quality,
        );
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        triggerDownload(url, name);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } finally {
        setDownloading(false);
      }
    },
    [buildOptions],
  );

  // Rasterise to a data URL without downloading — for the export dialog preview.
  // const captureImageUrl = React.useCallback(
  //   async (options: CaptureOptions): Promise<string | null> => {
  //     const node = getNode();
  //     if (!node) return null;

  //     const canvas = await toCanvas(node, await buildOptions(options));
  //     return canvas.toDataURL('image/png');
  //   },
  //   [buildOptions],
  // );

  const copyToClipboard = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      const node = getNode();
      if (!node) return;

      const format = options.imageFormat ?? 'png';
      // PNG/JPEG only — browsers reject SVG/WEBP for programmatic clipboard writes.
      if (format === 'svg' || format === 'webp') {
        throw new Error(
          `Clipboard copy is not supported for ${format.toUpperCase()}. ` +
            `Use PNG or JPEG, or download instead.`,
        );
      }

      setCopying(true);
      try {
        await awaitFontsReady();
        const canvas = await toCanvas(node, await buildOptions(options));
        const blob = await canvasToBlob(
          canvas,
          `image/${format}`,
          options.quality,
        );
        if (!blob) throw new Error('Failed to render the image for copying.');

        if (!navigator.clipboard || !window.ClipboardItem) {
          throw new Error('Clipboard API is not available in this browser.');
        }
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob }),
        ]);
      } finally {
        setCopying(false);
      }
    },
    [buildOptions],
  );

  return {
    captureImage,
    copyToClipboard,
    isDownloading,
    isCopying,
  };
};

export default useCapture;
