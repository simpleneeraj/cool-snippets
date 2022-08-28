import React from "react";
import BottomTabs from "./tabs";
import RenderComponents from "./render";
import css from "styles/app.module.scss";

const AppRight = () => {
  return (
    <div className={css.right}>
      <div className={css.tabContainer}>
        <RenderComponents />
      </div>
      <BottomTabs />
    </div>
  );
};
export default AppRight;

// T R B L
//
// border-radius:10px 10px 10px 10px;
// top-right
// top-left
// bottom-left
// bottom-right
