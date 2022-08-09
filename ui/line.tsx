import React from "react";
import css from "./css/button.module.scss";

const HRLine = (props: React.ComponentPropsWithoutRef<"hr">) => {
  return <hr className={css.line} {...props} />;
};
export default HRLine;
