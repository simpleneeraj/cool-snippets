import React from "react";
import css from "styles/skeleton.module.scss";

const Skeletion = () => {
  return (
    <div>
      <div className="production-deployment-bar_row__xHT7A">
        <div className="production-deployment-bar_rowItemLoading__rlWni">
          <span
            className="skeleton_skeleton__myUWL skeleton_show__SNdgq"
            data-geist-skeleton=""
            data-testid="legacy/skeleton"
            style={{ width: `50%`, minHeight: `24px` }}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default Skeletion;
