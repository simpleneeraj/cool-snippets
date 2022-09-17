import React from "react";
import css from "styles/app.module.scss";
import Templates from "./templates";

const AppLeft = () => {
  return (
    <div className={css.left}>
      <h1>Templates</h1>
      <Templates />
    </div>
  );
};
export default AppLeft;
