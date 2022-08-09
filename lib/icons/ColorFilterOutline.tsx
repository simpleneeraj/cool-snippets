import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const ColorFilterOutline = (props: SVGTYPE) => {
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
        <circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="184" r="120" fill="none" stroke="undefined" strokeLinejoin="round" strokeWidth="32px"/><circle xmlns="http://www.w3.org/2000/svg" cx="344" cy="328" r="120" fill="none" stroke="undefined" strokeLinejoin="round" strokeWidth="32px"/><circle xmlns="http://www.w3.org/2000/svg" cx="168" cy="328" r="120" fill="none" stroke="undefined" strokeLinejoin="round" strokeWidth="32px"/>
      </svg>
    );
  };
  export default ColorFilterOutline