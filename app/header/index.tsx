import Button from "element/button";
import React from "react";
import css from "styles/main.module.scss";

const AppHeader = () => {
  return (
    <div className={css.header}>
      <div className={css.controls}>
        <Button label={"Hello"} />
      </div>
      <div className={css.controls}>
        <Button label={"Share"} />
      </div>
    </div>
  );
};
export default AppHeader;
