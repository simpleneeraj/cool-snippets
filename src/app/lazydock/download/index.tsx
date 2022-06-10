import React from "react";
import Button from "element/button";
import OptionsWraper from "../wraper";
import Select from "element/select";
import { useCapture } from "capture-dom";
import Segment from "element/segment";
import useDownload from "store/hooks/usedownload";
import ArrowDownCircleOutline from "lib/icons/ArrowDownCircleOutline";

const DownloadOptions = () => {
  const { imageFormat, setImageFormat } = useDownload();
  const { pixelRatio, setPixelRatio } = useDownload();

  const captureImage = useCapture();

  const captureHandler = () => {
    captureImage({
      imageFormat: imageFormat.toLowerCase(),
      pixelRatio: pixelRatio,
      isDebug: true,
    });
  };
  return (
    <React.Fragment>
      <OptionsWraper title="Aspect Ratio">
        <Segment
          defaultValue="1:1"
          children={["1:1", "2:5", "3:5"]}
          // onChange={(v) => fontSizeHandler(v)}
        />
      </OptionsWraper>
      <OptionsWraper title="Pixel Ratio">
        <Segment
          defaultValue={pixelRatio}
          children={["1", "2", "3", "4"]}
          onChange={(v) => setPixelRatio(v)}
        />
      </OptionsWraper>
      <OptionsWraper title={"Image Type"}>
        <Select
          defaultValue={imageFormat}
          children={["PNG", "JPG", "WEBP", "SVG"].map((d) => {
            return {
              text: d,
              value: d,
            };
          })}
          onChange={(v) => setImageFormat(v)}
        />
      </OptionsWraper>
      <OptionsWraper title={"Download"}>
        <Button
          label={`In ${imageFormat} format`}
          onClick={captureHandler}
          icon={<ArrowDownCircleOutline size={16} />}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default DownloadOptions;
