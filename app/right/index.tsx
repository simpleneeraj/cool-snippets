import React from "react";
import View from "ui/view";
import BottomTabs from "./tabs";
import RenderComponents from "./render";
import css from "styles/app.module.scss";

const AppRight = () => {
  return (
    <View className={css.right}>
      <View className={css.tabContainer}>
        <RenderComponents />
      </View>
      <BottomTabs />
    </View>
  );
};
export default AppRight;
