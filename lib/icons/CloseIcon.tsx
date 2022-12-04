import React from "react";
import { SVGPROPS } from "typings/svg";

const CloseIcon = (props: SVGPROPS) => {
  const { color = "currentColor", size = "30px", ...rest } = props;
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...rest}
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="110px"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
};
export default CloseIcon;
