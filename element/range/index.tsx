import React from "react";
import css from "styles/range.module.scss";

const RangeSlider = (props: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <div className={css.range}>
      {/* {props.value ? <span>{props.value}</span> : null} */}
      <input type="range" {...props} />
    </div>
  );
};
export default React.memo(RangeSlider);
