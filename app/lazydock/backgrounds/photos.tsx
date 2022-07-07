import React from "react";
import css from "styles/photos.module.scss";
import PlusSquareDashed from "lib/icons/PlusSquareDashed";
import useFilePicker from "hooks/useFilePicker";
import useBackground from "store/hooks/usebackground";
import useImages from "store/hooks/useImages";
import ListView from "lib/list-view";
import FilePicker from "./picker";
import Item from "./item";

const PhotosOptions = () => {
  const { setBackground, source } = useBackground();
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
        {imagesArray.map((data, i) => {
          return (
            <ListView key={i} duration={200} className={css.picture}>
              <Item
                viewtype="image"
                source={data.source}
                isactive={data.source === source}
                onClick={() => setBackground(data.source)}
              />
            </ListView>
          );
        })}
      </div>
    </div>
  );
};
export default PhotosOptions;
