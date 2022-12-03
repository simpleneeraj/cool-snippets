import React from "react";
import { SVGPROPS } from "typings/svg";

const SquareIcon = (props: SVGPROPS) => {
  const { color = "currentColor", size = "30px", ...rest } = props;
  return (
    <svg
      className="ionicon"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={size}
      height={size}
      {...rest}
    >
      <path d="M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z" />
    </svg>
  );
};
export default SquareIcon;
