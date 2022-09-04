import React from "react";
import css from "../css/skeleton.module.scss";

const Skeleton = () => {
  return (
    <div>
      <span className={css.skeleton} style={{ width: `100%` }}></span>
    </div>
  );
};
export default Skeleton;
