"use client";

import React from "react";
import View from "ui/view";
import BottomTabs from "./tabs";
import css from "styles/app.module.scss";
import dynamic from "next/dynamic";

const RenderComponents = dynamic(() => import("./render"));

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
