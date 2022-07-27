import React from "react";
import css from "styles/skeleton.module.scss";

const Skeletion = () => {
  return (
    <div>
      <span className={css.skeleton} style={{ width: `100%` }}></span>
    </div>
  );
};
export default Skeletion;
