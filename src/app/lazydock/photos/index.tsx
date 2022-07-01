import React from "react";
import css from "styles/photos.module.scss";
import PlusSquareDashed from "lib/icons/PlusSquareDashed";
import useFilePicker from "hooks/useFilePicker";
import useBackground from "store/hooks/usebackground";
import useImages from "store/hooks/useImages";

interface FilePickerProps extends React.ComponentPropsWithoutRef<"input"> {
  inputRef: any;
  selectID: string;
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
            inputRef={inputRef}
            selectID={"back"}
            accept="image/*"
            icon={<PlusSquareDashed size={40} />}
          />
        </div>
        {imagesArray.map((data, i) => (
          <Picture
            key={i}
            source={data.source}
            onClick={() => setBackground(data.source)}
          />
        ))}
      </div>
    </div>
  );
};
export default PhotosOptions;

const Picture = (props: PictureProps) => {
  return (
    <div onClick={props.onClick} className={css.picture}>
      <img src={props.source} alt="images" />
    </div>
  );
};

const FilePicker = (props: FilePickerProps) => {
  return (
    <button>
      <input
        id={props.selectID}
        type="file"
        style={{ display: "none" }}
        multiple
        {...props}
      />
      <label htmlFor={props.selectID}>{props.icon}</label>
    </button>
  );
};
