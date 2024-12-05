import React from 'react';
import fontsNames from '@/json/fonts.json';
import { useCapture } from '@/plugins/capture';
import useSlideEditor from '@/store/hooks/use-editor';

const useExport = () => {
  const { captureImage, isLoading } = useCapture();
  const { currentElement } = useSlideEditor();

  const currentTypeface = findFontByValue(currentElement?.style?.fontFamily!);

  console.log(currentTypeface);

  const onExport = React.useCallback(() => {
    captureImage({
      fileName: 'image',
      imageFormat: 'png',
      pixelRatio: 4,
      isDebug: true,
      fonts: [
        {
          src: currentTypeface?.src!,
          fontFamily: currentTypeface?.value!,
        },
      ],
    });
  }, [captureImage, currentTypeface]);

  return {
    onExport,
    isLoading,
  };
};

export default useExport;

const findFontByValue = (value: string) =>
  fontsNames.find((item) => item?.value === value);
