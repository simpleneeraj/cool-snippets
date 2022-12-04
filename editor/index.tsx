import React from "react";
import View from "ui/view";
import dynamic from "next/dynamic";
import css from "styles/app.module.scss";

const AppTop = dynamic(() => import("./top"));
const AppLeft = dynamic(() => import("./left"));
const Center = dynamic(() => import("./center"));
const AppRight = dynamic(() => import("./right"));

const CodeAppMain = () => {
  return (
    <View className={css["app-box"]}>
      <View className={css["container"]}>
        <AppTop />
        <View className={css["grid"]}>
          <AppLeft />
          <View className={css["center"]}>
            <View className={css["editor"]}>
              <Center />
            </View>
          </View>
          <AppRight />
        </View>
      </View>
    </View>
  );
};
export default CodeAppMain;
