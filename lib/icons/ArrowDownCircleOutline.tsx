import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const ArrowDownCircleOutline = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
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
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="176 262.62 256 342 336 262.62"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="256"
        y1="330.97"
        x2="256"
        y2="170"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28px"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z"
        fill="none"
        stroke="undefined"
        strokeMiterlimit="10"
        strokeWidth="28px"
      />
    </svg>
  );
};
export default ArrowDownCircleOutline;
