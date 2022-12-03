import React from "react";
import { SVGPROPS } from "typings/svg";

const TriangleIcon = (props: SVGPROPS) => {
  const { color = "currentColor", size = "30px", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
    >
      <g>
        <path d="M20.036,24H3.964A3.955,3.955,0,0,1,.422,18.267L8.459,2.189A3.932,3.932,0,0,1,11.736.008a3.977,3.977,0,0,1,3.805,2.181l8.037,16.078A3.961,3.961,0,0,1,20.036,24Z" />
      </g>
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
    //   <path d="M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z" />
    // </svg>
  );
};
export default TriangleIcon;
