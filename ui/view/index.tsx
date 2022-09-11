import React from "react";
import { ViewProps } from "../types/ui";

const View = React.forwardRef(
  (props: ViewProps, ref: React.Ref<HTMLDivElement>) => {
    return <div ref={ref} {...props} />;
  }
);

View.displayName = "View";
export default View;
