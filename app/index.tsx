import React from "react";
import AppTop from "./top";
import AppLeft from "./left";
import AppRight from "./right";
import Center from "./center";
import css from "styles/app.module.scss";

const AppLayout = () => {
  return (
    <div className={css.container}>
      <AppTop />
      <div className={css.grid}>
        <AppLeft />
        <div className={css.center}>
          <Center />
        </div>
        <AppRight />
      </div>
    </div>
  );
};
export default AppLayout;
