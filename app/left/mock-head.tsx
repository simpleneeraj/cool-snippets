import React from "react";
import css from "styles/templates.module.scss";

const trafficColorArray = {
  RED: "#fd4539",
  YELLOW: "#ffd213",
  GREEN: "#21d854",
};

export const TrafficLightsBorder = () => {
  return (
    <div className={css["head"]}>
      <span
        style={{
          border: `1pt solid`,
          borderColor: trafficColorArray.RED,
        }}
      ></span>
      <span
        style={{
          border: `1pt solid`,
          borderColor: trafficColorArray.GREEN,
        }}
      ></span>
      <span
        style={{
          border: `1pt solid`,
          borderColor: trafficColorArray.YELLOW,
        }}
      ></span>
    </div>
  );
};
export const TrafficLightsBackground = () => {
  return (
    <div className={css["head"]}>
      <span
        style={{
          backgroundColor: trafficColorArray.RED,
        }}
      ></span>
      <span
        style={{
          backgroundColor: trafficColorArray.GREEN,
        }}
      ></span>
      <span
        style={{
          backgroundColor: trafficColorArray.YELLOW,
        }}
      ></span>
    </div>
  );
};
