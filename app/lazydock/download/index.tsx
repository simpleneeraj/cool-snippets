import React from "react";
import Button from "element/button";
import OptionsWraper from "../wraper";
import Select from "element/select";
import { useCapture } from "lib/capture";
import Segment from "element/segment";
import useDownload from "store/hooks/usedownload";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";
import CircleDotted from "lib/icons/CircleDotted";

const DownloadOptions = () => {
  const { imageFormat, setImageFormat } = useDownload();
  const { pixelRatio, setPixelRatio } = useDownload();

  const { captureImage, isLoading } = useCapture();

  const captureHandler = () => {
    captureImage({
      imageFormat: imageFormat.toLowerCase(),
      pixelRatio: Number(pixelRatio),
      isDebug: true,
      delay: 0,
    });
  };

  return (
    <React.Fragment>
      <OptionsWraper title="Pixel Ratio">
        <Segment
          defaultValue={pixelRatio}
          array={[1, 2, 3, 4, 5, 6, 7, 8]}
          onChange={(v) => setPixelRatio(v)}
        />
      </OptionsWraper>

      <OptionsWraper title={"Image Type"}>
        <Select
          defaultValue={imageFormat}
          array={array.imageFormat}
          onChange={(v) => setImageFormat(v)}
        />
      </OptionsWraper>
      <OptionsWraper title={"Download"}>
        <Button
          label={isLoading ? `Exporting...` : `${imageFormat} Format`}
          onClick={captureHandler}
          icon={
            isLoading ? (
              <CircleDotted size={16} />
            ) : (
              <ArrowDownCircleOutline size={16} />
            )
          }
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default DownloadOptions;

const aspectRatio = [
  {
    name: "Instagram Landscape",
    ratio: "1.91:1",
  },
  {
    name: "Instagram Square",
    ratio: "1:1",
  },
  {
    name: "Instagram Portrait",
    ratio: "4:5",
  },
  {
    name: "Instagram Reels",
    ratio: "9:16",
  },
  {
    name: "Twitter Header",
    ratio: "3:1",
  },
  {
    name: "Landcape",
    ratio: "16:9",
  },
];
const array = {
  aspectRatio: aspectRatio.map((str) => {
    return {
      text: str.ratio,
      value: str.ratio,
    };
  }),
  // @ts-expect-error
  padding: [...Array(10).keys()].map((_, i) => {
    return {
      text: `${(i + 1) * 10}px`,
      get value() {
        return this.text;
      },
    };
  }),
  imageFormat: ["PNG", "JPG", "WEBP"].map((str) => {
    return {
      text: str,
      get value() {
        return this.text;
      },
    };
  }),
};
