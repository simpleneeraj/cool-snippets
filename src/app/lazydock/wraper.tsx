import React from "react";
import css from "styles/dock.module.scss";

interface OptionsWraperProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}

const OptionsWraper = (props: OptionsWraperProps) => {
  return (
    <div className={css.block}>
      <label>{props.title}</label>
      {props.children}
    </div>
  );
};
export default OptionsWraper;
