import React from "react";
import css from "styles/elements.module.scss";

interface Props extends React.ComponentPropsWithRef<"button"> {
  label: string;
  icon?: React.ReactNode;
}

const Button = (props: Props) => {
  // props.children
  return (
    <div className={css.button}>
      <button {...props}>
        <label>{props.label}</label>
        {props.icon ? <i>{props.icon}</i> : null}
      </button>
    </div>
  );
};
export default Button;
