import React from "react";
import Controls from "./controls";
import Templates from "./templates";
import css from "styles/app.module.scss";

const AppLeft = () => {
  return (
    <div className={css.left}>
      <Controls />
      <Templates />
    </div>
  );
};
export default AppLeft;
