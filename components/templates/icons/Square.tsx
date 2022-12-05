import React from "react";
import { SVGPROPS } from "typings/svg";

const Square = (props: SVGPROPS) => {
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
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...common}
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  );
};
export default Square;
