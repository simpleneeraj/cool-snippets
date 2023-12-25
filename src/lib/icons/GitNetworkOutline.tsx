import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const GitNetworkOutline = (props: SVGTYPE) => {
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
        <circle xmlns="http://www.w3.org/2000/svg" cx="128" cy="96" r="48" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="416" r="48" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><line xmlns="http://www.w3.org/2000/svg" x1="256" y1="256" x2="256" y2="368" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><circle xmlns="http://www.w3.org/2000/svg" cx="384" cy="96" r="48" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><path xmlns="http://www.w3.org/2000/svg" d="M128,144c0,74.67,68.92,112,128,112" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><path xmlns="http://www.w3.org/2000/svg" d="M384,144c0,74.67-68.92,112-128,112" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      </svg>
    );
  };
  export default GitNetworkOutline