import React from "react";
import View from "ui/view";
import AppTop from "./top";
import AppLeft from "./left";
import AppRight from "./right";
import Center from "./center";
import css from "styles/app.module.scss";

const AppLayout = () => {
  return (
    <View className={css.container}>
      <AppTop />
      <View className={css.grid}>
        <AppLeft />
        <View className={css.center}>
          <Center />
        </View>
        <AppRight />
      </View>
    </View>
  );
};
export default AppLayout;
