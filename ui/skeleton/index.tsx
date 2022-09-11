import React from "react";
import css from "../css/skeleton.module.scss";

interface Skeleton {}
const Skeleton = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={css.container}>
      <span className={css.skeleton} {...props}></span>
    </div>
  );
};
export default Skeleton;
