import React from "react";
import View from "ui/view";
import css from "styles/app.module.scss";

const AppTop = React.lazy(() => import("./top"));
const AppLeft = React.lazy(() => import("./left"));
const Center = React.lazy(() => import("./center"));
const AppRight = React.lazy(() => import("./right"));

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
