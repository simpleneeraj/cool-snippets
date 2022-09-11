import React from "react";
import { UNSPLASH, LOCAL, GRADIENT } from "./action";

// DYNAMIC IMPORT
import GradientComponent from "./gradient";
import UnsplashImages from "./unsplash";

interface RenderTabsProps {
  tabName: string;
}

const RenderTabs = ({ tabName }: RenderTabsProps) => {
  switch (tabName) {
    case UNSPLASH:
      return <UnsplashImages />;
    case LOCAL:
      return null;
    case GRADIENT:
      return <GradientComponent />;
    default:
      return null;
  }
};
export default RenderTabs;
