import useFilePicker from "hooks/use-file-picker";
import Add from "lib/icons/Add";
import React from "react";
import useBackground from "store/hooks/usebackground";
import css from "styles/insert.module.scss";

const Upload = () => {
  const { setBackground, source } = useBackground();

  const { inputRef, onFilePicker } = useFilePicker((v) => setBackground(v), {
    maxImages: 1,
  });

  return (
    <div className={css.upload}>
      <div className={css.picker}>
        <label htmlFor="image-picker">
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={onFilePicker}
            style={{ display: "none" }}
          />
          <Add />
          <p>Upload</p>
        </label>
        {/* <img src={source} alt="" /> */}
      </div>
    </div>
  );
};
export default Upload;
