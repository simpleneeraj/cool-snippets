import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const ImageOutline = (props: SVGTYPE) => {
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
        <rect xmlns="http://www.w3.org/2000/svg" x="48" y="80" width="416" height="352" rx="48" ry="48" fill="none" stroke="undefined" strokeLinejoin="round" strokeWidth="32px"/><circle xmlns="http://www.w3.org/2000/svg" cx="336" cy="176" r="32" fill="none" stroke="undefined" strokeMiterlimit="10" strokeWidth="32px"/><path xmlns="http://www.w3.org/2000/svg" d="M304,335.79,213.34,245.3A32,32,0,0,0,169.47,244L48,352" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><path xmlns="http://www.w3.org/2000/svg" d="M224,432,347.34,308.66a32,32,0,0,1,43.11-2L464,368" fill="none" stroke="undefined" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      </svg>
    );
  };
  export default ImageOutline