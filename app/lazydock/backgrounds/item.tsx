/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "styles/photos.module.scss";

interface PictureProps extends React.ComponentPropsWithoutRef<"div"> {
  source: string;
  isactive?: boolean;
  onClick?: () => void;
  viewtype: "span" | "image";
  style?: React.CSSProperties;
}

const ItemBox = React.forwardRef(
  (props: PictureProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={css.picture} {...props}>
        {props.isactive ? <span /> : null}
        {props.viewtype === "image" ? (
          <img src={props.source} alt="images" />
        ) : null}
      </div>
    );
  }
);

ItemBox.displayName = "ItemBox";
export default ItemBox;
