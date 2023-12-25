import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const ChevronBack = (props: SVGTYPE) => {
    const {  color="currentColor",size = "30px" } = props;
    return (
      <svg
        width={size}
        fill={color}
        height={size}
        stroke={color}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <polyline xmlns="http://www.w3.org/2000/svg" points="328 112 184 256 328 400" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px"/>
      </svg>
    );
  };
  export default ChevronBack