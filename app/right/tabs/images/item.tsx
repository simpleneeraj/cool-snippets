/* eslint-disable @next/next/no-img-element */

import React from "react";
import css from "styles/images.module.scss";

interface PictureProps extends React.ComponentPropsWithoutRef<"div"> {
  source: string;
  isactive?: boolean;
  onClick?: () => void;
  viewtype: "span" | "image";
  style?: React.CSSProperties;
}

const ImageBox = React.forwardRef(
  (
    { source, viewtype, isactive, ...rest }: PictureProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={css.picture} {...rest}>
        {isactive ? <span /> : null}
        {viewtype === "image" ? (
          <img src={source} alt="images" />
        ) : (
          <span
            className={css.gradient}
            style={{
              background: source,
            }}
          />
        )}
      </div>
    );
  }
);

ImageBox.displayName = "ItemBox";

export default ImageBox;
