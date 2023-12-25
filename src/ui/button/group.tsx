import React from "react";
import css from "../css/button.module.scss";
import { ButtonProps } from "../types/button";

const GroupButton = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLDivElement>) => {
    const { children } = props;
    return (
      <div ref={ref} className={css.group}>
        {children}
      </div>
    );
  }
);

GroupButton.displayName = "IconButton";
export default GroupButton;
