import React from "react";
import { useCapture } from "lib/capture";
import css from "styles/download.module.scss";
import useDownload from "store/hooks/usedownload";

const DownloadModel = () => {
  const { imageFormat, setImageFormat } = useDownload();
  const { pixelRatio, setPixelRatio } = useDownload();

  const { captureImage, isLoading } = useCapture();

  const captureHandler = () => {
    captureImage({
      imageFormat: imageFormat,
      pixelRatio: Number(pixelRatio),
      isDebug: true,
      delay: 0,
    });
  };
  return (
    <div className={css.container}>
      <label>Image Scale</label>
      <div className={css.format}>
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
      </div>
      <label>Image Format</label>
      <div className={css.format}>
        {formatArray.map((data, index) => {
          return (
            <div
              key={index}
              className={`${css.item} ${
                imageFormat === data.value ? css.active : ""
              }`}
              onClick={() => setImageFormat(data.value)}
            >
              {data.text}
            </div>
          );
        })}
      </div>
      <div className={css.button}>
        <button onClick={captureHandler}>Download</button>
      </div>
      {/* <Button>Download</Button> */}
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
