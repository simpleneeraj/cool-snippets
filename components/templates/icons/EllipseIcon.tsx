import React from "react";
import { SVGPROPS } from "typings/svg";

const EllipseIcon = (props: SVGPROPS) => {
  const { size = "30px", ...rest } = props;

  const common = {
    height: size,
    width: size,
    fill: "none",
    strokeWidth: "3",
    stroke: "#000",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...common}
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};
export default EllipseIcon;
