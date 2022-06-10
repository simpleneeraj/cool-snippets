import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const CloudDownloadOutline = (props: SVGTYPE) => {
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
        <path xmlns="http://www.w3.org/2000/svg" d="M320,336h76c55,0,100-21.21,100-75.6s-53-73.47-96-75.6C391.11,99.74,329,48,256,48c-69,0-113.44,45.79-128,91.2-60,5.7-112,35.88-112,98.4S70,336,136,336h56" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><polyline xmlns="http://www.w3.org/2000/svg" points="192 400.1 256 464 320 400.1" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><line xmlns="http://www.w3.org/2000/svg" x1="256" y1="224" x2="256" y2="448.03" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      </svg>
    );
  };
  export default CloudDownloadOutline