import React from "react";
import { Props } from "./type";
import css from "styles/button.module.scss";

const Button = (props: Props) => {
  // props.children
  return (
    <div {...props} className={css.button}>
      <button>
        {props.label ? <label>{props.label}</label> : null}
        {props.icon ? <i>{props.icon}</i> : null}
      </button>
    </div>
  );
};
export default Button;
