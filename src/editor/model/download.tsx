import React from 'react';
import Input from '@/ui/input';
import Segment from '@/ui/segment';
import IconButton from '@/ui/button/icon';
import { useCapture } from '@/plugins/capture';
import SegmentButton from '@/ui/segment/button';
import css from '@/styles/download.module.scss';
import useDownload from '@/store/hooks/use-download';
import UIIndicatorView from '@/ui/spinner';

const DownloadModel = () => {
  const { imageFormat, setImageFormat, setFileName, fileName } = useDownload();
  const { pixelRatio, setPixelRatio } = useDownload();

  const { captureImage, isLoading } = useCapture();

  const onRandomName = React.useCallback(() => {
    const UUID = `IMG-${Date.now()}`;
    setFileName(UUID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileName]);
  return (
    <div className={`${css.container}`}>
      <div className={css.content}>
        <div className={css.head}>
          <h4>Download Image</h4>
        </div>
        <div className={css.fields}>
          <div className={css.label}>
            <label>File Name</label>
            <label className={css.link} onClick={onRandomName}>
              Random
            </label>
          </div>
          <Input
            type="text"
            value={fileName}
            placeholder="enter file name"
            onChange={({ target }) => setFileName(target.value)}
          />
        </div>
        <div className={css.fields}>
          <div className={css.label}>
            <label>Image Scale</label>
          </div>
          <Segment>
            {[2, 3, 4, 5].map((number, index) => (
              <SegmentButton
                key={index}
                onClick={() => setPixelRatio(number)}
                text={`${number}X`}
                value={number}
                active={pixelRatio === number}
                style={{
                  fontSize: '12px',
                  padding: '6px',
                }}
              />
            ))}
          </Segment>
        </div>
        <div className={css.fields}>
          <div className={css.label}>
            <label>Image Format</label>
          </div>

          <Segment>
            {formatArray.map((data, index) => (
              <SegmentButton
                key={index}
                onClick={() => setImageFormat(data.value)}
                active={imageFormat === data.value}
                {...data}
                style={{
                  fontSize: '13px',
                  padding: '6px',
                }}
              />
            ))}
          </Segment>
        </div>
      </div>
      <div className={css.button}>
        <IconButton
          className={css.indigo}
          onClick={() =>
            captureImage({
              fileName: fileName,
              imageFormat: imageFormat,
              pixelRatio: Number(pixelRatio),
            })
          }
        >
          {isLoading ? (
            <p>
              <UIIndicatorView size={16} />
              Downloading...
            </p>
          ) : (
            <p>Download</p>
          )}
        </IconButton>
      </div>
    </div>
  );
};
export default DownloadModel;

const formatArray = [
  {
    text: 'PNG',
    get value() {
      return this.text.toLowerCase();
    },
  },
  {
    text: 'JPEG',
    get value() {
      return this.text.toLowerCase();
    },
  },
  {
    text: 'WEBP',
    get value() {
      return this.text.toLowerCase();
    },
  },
  {
    text: 'SVG',
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
