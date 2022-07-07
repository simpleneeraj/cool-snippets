/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "styles/photos.module.scss";

interface PictureProps {
  source: string;
  isactive?: boolean;
  onClick: () => void;
  viewtype: "span" | "image";
  style?: React.CSSProperties;
}

const ItemBox = (props: PictureProps) => {
  const style = {
    outline: `2px solid ${props.isactive ? "var(--ui-color)" : "transparent"}`,
    ...props.style,
  };
  return (
    <div style={style} onClick={props.onClick} className={css.picture}>
      {props.viewtype === "image" && <img src={props.source} alt="images" />}
    </div>
  );
};

export default ItemBox;
