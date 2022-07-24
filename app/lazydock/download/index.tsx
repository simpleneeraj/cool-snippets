import React from "react";
import Button from "element/button";
import OptionsWraper from "../wraper";
import Select from "element/select";
import { useCapture } from "lib/capture";
import Segment from "element/segment";
import useDownload from "store/hooks/usedownload";
import CircleDotted from "lib/icons/CircleDotted";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";
import useBackground from "store/hooks/usebackground";

const DownloadOptions = () => {
  const { imageFormat, setImageFormat } = useDownload();
  const { pixelRatio, setPixelRatio } = useDownload();
  const { setRatio, aspectRatio } = useBackground();
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
          array={array.pixelRatio}
          onChange={(v) => setPixelRatio(v)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Aspect Ratio ${aspectRatio}`}>
        <Select
          defaultValue={aspectRatio}
          onChange={(value) => setRatio(value)}
          array={array.aspectRatio}
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
    name: "Instagram ",
    ratio: "1:1",
  },
  {
    name: "Pinterest",
    ratio: "2:3",
  },
  {
    name: "Instagram ",
    ratio: "4:5",
  },
  {
    name: "Instagram ",
    ratio: "9:16",
  },
  {
    name: "Landscape",
    ratio: "16:9",
  },
  {
    name: "Twitter",
    ratio: "2:1",
  },
  {
    name: "Twitter",
    ratio: "3:4",
  },
];
const array = {
  aspectRatio: aspectRatio.map((data) => {
    return {
      text: `${data.name} (${data.ratio})`,
      value: data.ratio,
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
  pixelRatio: [
    {
      title: "2X",
      value: 2,
    },
    {
      title: "3X",
      value: 3,
    },

    {
      title: "4X",
      value: 4,
    },
  ],
};
