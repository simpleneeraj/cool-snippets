import React from "react";
import css from "../css/range.module.scss";

const Slider = React.forwardRef(
  (
    props: React.ComponentPropsWithoutRef<"input">,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={css.range}>
        {/* {props.value ? <span>{props.value}</span> : null} */}
        <input ref={ref} type="range" {...props} />
      </div>
    );
  }
);

Slider.displayName = "RangeSlider";
export default Slider;
