import React from "react";
import css from "styles/button.module.scss";

interface Props extends React.ComponentPropsWithRef<"button"> {
  label?: string;
  icon?: React.ReactNode;
}

const IconButton = (props: Props) => {
  // props.children
  return (
    <div className={css.iconbutton}>
      <button {...props}>{props.icon ? <i>{props.icon}</i> : null}</button>
    </div>
  );
};
export default IconButton;
