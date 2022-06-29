import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const ArrowDownCircle = (props: SVGTYPE) => {
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
        <path xmlns="http://www.w3.org/2000/svg" d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM164.64,251.35a16,16,0,0,1,22.63-.09L240,303.58V170a16,16,0,0,1,32,0V303.58l52.73-52.32A16,16,0,1,1,347.27,274l-80,79.39a16,16,0,0,1-22.54,0l-80-79.39A16,16,0,0,1,164.64,251.35Z"/>
      </svg>
    );
  };
  export default ArrowDownCircle