import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const EllipsisVerticalCircle = (props: SVGTYPE) => {
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
        <circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="256" r="26"/><circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="346" r="26"/><circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="166" r="26"/><path xmlns="http://www.w3.org/2000/svg" d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" fill="none" stroke="undefined" strokeMiterlimit="10" strokeWidth="32px"/>
      </svg>
    );
  };
  export default EllipsisVerticalCircle