import React from "react";
import css from "../css/skeleton.module.scss";

interface SkeletonProps extends React.ComponentPropsWithoutRef<"div"> {}
const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return (
    <div className={css.container}>
      <span className={` ${css.skeleton} ${className}`} {...rest}></span>
    </div>
  );
};
export default Skeleton;
