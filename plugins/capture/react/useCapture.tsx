import React from "react";
import download from "../fileSaver";
import createCanvas from "../main/createcanvas";
import randomName from "../main/randomname";
import { CaptureOptions } from "../options";
import attID from "../utils/attid";
import delay from "../utils/delay";

const useScreenshot = () => {
  const [isLoading, setLoading] = React.useState(false);
  // capture Handler as Simple as That
  const captureImage = React.useCallback(
    async (options: CaptureOptions): Promise<void> => {
      // For SSR
      if (typeof document === "undefined") {
        return;
      }
      const element = document.querySelector(
        `[data-capture=${attID}]`
      ) as HTMLElement;
      const { imageFormat, delay: exportDelay = 0, fileName } = options;
      setLoading(true);
      try {
        await delay(exportDelay);
        const canvas = await createCanvas(element, options);
        canvas.toBlob(async (blob: Blob) => {
          download(blob, fileName || randomName(imageFormat));
        }, `image/${imageFormat}`);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    []
  );

  /**
   * A basic handler to download image it's so simple and effective
   * @param options - ScreenshotOptions for customize your output image
   */
  // const captureImage = React.useMemo(() => captureHandler, [captureHandler]);

  return { captureImage, isLoading };
};

export default useScreenshot;
