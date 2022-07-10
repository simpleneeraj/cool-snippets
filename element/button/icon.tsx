import React from "react";
import css from "styles/button.module.scss";
import { Props } from "./type";

const IconButton = (props: Props) => {
  // props.children
  return (
    <div className={css.iconbutton} {...props}>
      <button>{props.icon ? <i>{props.icon}</i> : null}</button>
    </div>
  );
};
export default IconButton;
