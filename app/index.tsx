// import Center from 'app/center';
import * as React from "react";
import AppTop from "./top";
import AppLeft from "./left";
import AppRight from "./right";
import css from "styles/app.module.scss";
import Center from "./center";

const AppLayout = () => {
  return (
    <div className={css.container}>
      <div className={css.LayoutTop}>
        <AppTop />
      </div>
      <div className={css.LayoutMain}>
        <AppLeft />
        {/* <Center>{children}</Center> */}
        <div className={css.center}>
          <Center />
        </div>
        <AppRight />
      </div>
    </div>
  );
};
export default AppLayout;
