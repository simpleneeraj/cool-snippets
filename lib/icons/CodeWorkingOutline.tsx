import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const CodeWorkingOutline = (props: SVGTYPE) => {
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
        <circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="256" r="26"/><circle xmlns="http://www.w3.org/2000/svg" cx="346" cy="256" r="26"/><circle xmlns="http://www.w3.org/2000/svg" cx="166" cy="256" r="26"/><polyline xmlns="http://www.w3.org/2000/svg" points="160 368 32 256 160 144" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><polyline xmlns="http://www.w3.org/2000/svg" points="352 368 480 256 352 144" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      </svg>
    );
  };
  export default CodeWorkingOutline