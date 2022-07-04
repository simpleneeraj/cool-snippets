import React from "react";
import css from "styles/photos.module.scss";
import PlusSquareDashed from "lib/icons/PlusSquareDashed";
import useFilePicker from "hooks/useFilePicker";
import useBackground from "store/hooks/usebackground";
import useImages from "store/hooks/useImages";
import ListView from "lib/list-view";

interface FilePickerProps extends React.ComponentPropsWithoutRef<"input"> {
  inputref: any;
  selectid: string;
  icon: React.ReactNode | React.ReactNode[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PictureProps {
  source: string;
  onClick: () => void;
}

const PhotosOptions = () => {
  const { setBackground } = useBackground();
  const { imagesArray, addImage } = useImages();
  const { onFilePicker, inputRef } = useFilePicker((img) => addImage(img));
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.local}>
          <FilePicker
            onChange={onFilePicker}
            inputref={inputRef}
            selectid={"back"}
            accept="image/*"
            icon={<PlusSquareDashed size={40} />}
          />
        </div>
        {imagesArray.map((data, i) => (
          <ListView key={i} duration={200} className={css.picture}>
            <Picture
              source={data.source}
              onClick={() => setBackground(data.source)}
            />
          </ListView>
        ))}
      </div>
    </div>
  );
};
export default PhotosOptions;

const Picture = (props: PictureProps) => {
  return (
    <div onClick={props.onClick} className={css.picture}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={props.source} alt="images" />
    </div>
  );
};

const FilePicker = (props: FilePickerProps) => {
  return (
    <button aria-label="file-picker">
      <input
        id={props.selectid}
        type="file"
        style={{ display: "none" }}
        multiple
        {...props}
      />
      <label htmlFor={props.selectid}>{props.icon}</label>
    </button>
  );
};
