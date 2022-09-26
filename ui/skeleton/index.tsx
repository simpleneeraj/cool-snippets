import React from "react";
import css from "../css/skeleton.module.scss";

interface SkeletonProps extends React.ComponentPropsWithoutRef<"div"> {}
const Skeleton = (props: SkeletonProps) => {
  return (
    <div className={css.container}>
      <span className={css.skeleton} {...props}></span>
    </div>
  );
};
export default Skeleton;
