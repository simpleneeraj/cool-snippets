import React from "react";
import { useCapture } from "lib/capture";
import css from "styles/download.module.scss";
import useDownload from "store/hooks/usedownload";
import Segment from "ui/segment";
import SegmentButton from "ui/segment/button";
import IconButton from "ui/button/icon";

const DownloadModel = () => {
  const { imageFormat, setImageFormat } = useDownload();
  const { pixelRatio, setPixelRatio } = useDownload();

  const { captureImage, isLoading } = useCapture();

  const captureHandler = () => {
    captureImage({
      imageFormat: imageFormat,
      pixelRatio: Number(pixelRatio),
      isDebug: true,
      delay: 100,
    });
  };
  return (
    <div className={`${css.container}`}>
      <div className={css.head}>
        <h4>Download Image</h4>
      </div>
      <label>Image Scale</label>
      <Segment>
        {[2, 3, 4, 5].map((number, index) => (
          <SegmentButton
            key={index}
            onClick={() => setPixelRatio(number)}
            text={`${number}X`}
            value={number}
            active={pixelRatio === number}
          />
        ))}
      </Segment>
      <label>Image Format</label>
      <Segment>
        {formatArray.map((data, index) => (
          <SegmentButton
            key={index}
            onClick={() => setImageFormat(data.value)}
            active={imageFormat === data.value}
            {...data}
          />
        ))}
      </Segment>
      <div className={css.button}>
        <IconButton
          // style={{
          //   background: "var(--ui-color-indigo)",
          // }}
          className={css.indigo}
          onClick={captureHandler}
        >
          {isLoading ? "Downloading..." : "Download"}
        </IconButton>
      </div>
    </div>
  );
};
export default DownloadModel;

const formatArray = [
  {
    text: "PNG",
    get value() {
      return this.text.toLowerCase();
    },
  },
  {
    text: "JPEG",
    get value() {
      return this.text.toLowerCase();
    },
  },
  {
    text: "WEBP",
    get value() {
      return this.text.toLowerCase();
    },
  },
  {
    text: "SVG",
    get value() {
      return this.text.toLowerCase();
    },
  },
];

{
  /* <div className={css.format}>
        {[2, 3, 4, 5].map((number, index) => {
          return (
            <div
              key={index}
              className={`${css.item} ${
                pixelRatio === number ? css.active : ""
              }`}
              onClick={() => setPixelRatio(number)}
            >
              {number}X
            </div>
          );
        })}
      </div> */
}
