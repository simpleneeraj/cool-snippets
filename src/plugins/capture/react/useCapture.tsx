import React from 'react';
import download from '../fileSaver';
import createCanvas from '../main/createcanvas';
import createSvg from '../main/createsvg';
import randomName from '../main/randomname';
import { CaptureOptions } from '../options';
import attID from '../utils/attid';
import delay from '../utils/delay';

const useScreenshot = () => {
  const [isLoading, setLoading] = React.useState(false);

  const captureImage = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      if (typeof document === 'undefined') {
        return;
      }

      const element = document.querySelector(
        `[data-capture=${attID}]`
      ) as HTMLElement;
      const { imageFormat, delay: exportDelay = 0, fileName } = options;

      setLoading(true);

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
        setLoading(false);
      }
    },
    []
  );

  return {
    captureImage,
    isLoading,
  };
};

export default useScreenshot;
