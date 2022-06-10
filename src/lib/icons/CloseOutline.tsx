import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const CloseOutline = (props: SVGTYPE) => {
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
        <line xmlns="http://www.w3.org/2000/svg" x1="368" y1="368" x2="144" y2="144" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><line xmlns="http://www.w3.org/2000/svg" x1="368" y1="144" x2="144" y2="368" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      </svg>
    );
  };
  export default CloseOutline