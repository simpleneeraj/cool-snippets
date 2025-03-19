import React from 'react';
import download from '../fileSaver';
import createCanvas from '../main/createcanvas';
import createSvg from '../main/createsvg';
import randomName from '../main/randomname';
import { CaptureOptions } from '../options';
import attID from '../utils/attid';
import delay from '../utils/delay';

const useScreenshot = () => {
  const [isDownloading, setDownloading] = React.useState(false);
  const [isCopying, setCopying] = React.useState(false);

  // Capture Image for Download
  const captureImage = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      if (typeof document === 'undefined') return;

      const element = document.querySelector(
        `[data-capture=${attID}]`
      ) as HTMLElement;
      const { imageFormat, delay: exportDelay = 0, fileName } = options;

      setDownloading(true);
      const name = fileName
        ? `${fileName}.${imageFormat}`
        : randomName(imageFormat);

      try {
        await delay(exportDelay);

        if (imageFormat === 'svg') {
          const svg: SVGSVGElement = await createSvg(element, options);
          const svgBlob = new Blob([svg.outerHTML], { type: 'image/svg+xml' });
          download(svgBlob, name);
        } else {
          const canvas = await createCanvas(element, options);
          canvas.toBlob((blob: Blob | null) => {
            if (blob) {
              download(blob, name);
            } else {
              console.error('Failed to create blob from canvas');
            }
          }, `image/${imageFormat}`);
        }
      } catch (error) {
        console.error('Error capturing image:', error);
      } finally {
        setDownloading(false);
      }
    },
    []
  );

  const copyToClipboard = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      if (typeof document === 'undefined') return;

      const element = document.querySelector(
        `[data-capture=${attID}]`
      ) as HTMLElement;
      const { imageFormat, delay: exportDelay = 0 } = options;

      // Clipboard limitations check
      if (imageFormat === 'svg' || imageFormat === 'webp') {
        throw new Error(
          `Clipboard copy is not supported for ${imageFormat.toUpperCase()} format. ` +
            `Only PNG and JPEG formats are supported due to browser limitations. ` +
            `Please use the download option instead.`
        );
      }

      setCopying(true);

      try {
        await delay(exportDelay);

        const canvas = await createCanvas(element, options);
        canvas.toBlob(async (blob: Blob | null) => {
          if (!blob) {
            throw new Error('Failed to create a valid image blob for copying.');
          }

          // Use modern Clipboard API
          if (navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([
              new ClipboardItem({ [blob.type]: blob }),
            ]);
            console.log('Image successfully copied to clipboard!');
          } else {
            throw new Error('Clipboard API is not supported in this browser.');
          }
        }, `image/${imageFormat}`);
      } catch (error) {
        console.error(
          `Error while copying ${imageFormat?.toUpperCase()} image to clipboard:`,
          error
        );
        throw error; // Rethrow for further handling
      } finally {
        setCopying(false);
      }
    },
    []
  );

  return {
    captureImage,
    copyToClipboard,
    isDownloading,
    isCopying,
  };
};

export default useScreenshot;
