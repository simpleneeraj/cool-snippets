import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}
const EllipsisHorizontal = (props: SVGTYPE) => {
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
        <circle xmlns="http://www.w3.org/2000/svg" cx="256" cy="256" r="48"/><circle xmlns="http://www.w3.org/2000/svg" cx="416" cy="256" r="48"/><circle xmlns="http://www.w3.org/2000/svg" cx="96" cy="256" r="48"/>
      </svg>
    );
  };
  export default EllipsisHorizontal