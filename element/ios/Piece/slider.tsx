import React, { useState, useCallback } from "react";
import css from "../Style/TapSlider.module.scss";

const TapSlider = ({ defaultValue, vartical = false, ...props }: any) => {
  const [filled, setfilled] = useState(defaultValue);
  const filled_Handler = useCallback((e: any) => {
    let { value, max } = e.target;
    const calc = value / max;
    const percentage = calc * 100;
    setfilled(percentage.toFixed(0));
  }, []);
  const className = `Input`;
  const calc_Height = vartical ? "300px" : "auto";
  const calc_Cursor = vartical ? "s-resize" : "w-resize";
  return (
    <>
      <div style={{ minHeight: calc_Height }} className={css.TapSlider}>
        <input
          style={{ cursor: calc_Cursor }}
          orient="vartical"
          onInputCapture={filled_Handler}
          className={className}
          type="range"
          {...props}
          defaultValue={defaultValue}
        />
        <style>
          {`
            .${className} {
              background: linear-gradient(
                90deg,
                var(--Color-1) 0%,
                var(--Color-1) ${filled}%,
                var(--Background-4) ${filled}%,
                var(--Background-4) 100%
              );
              transform: rotateZ(${vartical ? "270deg" : "0deg"});
            }
          `}
        </style>
      </div>
    </>
  );
};

export default TapSlider;
