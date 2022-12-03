import React from "react";
import { SVGPROPS } from "typings/svg";

const EllipseIcon = (props: SVGPROPS) => {
  const { color = "currentColor", size = "30px", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
    >
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Z" />
    </svg>

    // <svg
    //   className="ionicon"
    //   viewBox="0 0 512 512"
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill={color}
    //   width={size}
    //   height={size}
    //   {...rest}
    // >
    //   <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
    // </svg>
  );
};
export default EllipseIcon;
