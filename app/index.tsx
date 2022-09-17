import React from "react";
import View from "ui/view";
import css from "styles/app.module.scss";
import dynamic from "next/dynamic";

const AppTop = dynamic(() => import("./top"));
const AppLeft = dynamic(() => import("./left"));
const AppRight = dynamic(() => import("./right"));
const Center = dynamic(() => import("./center"));

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
