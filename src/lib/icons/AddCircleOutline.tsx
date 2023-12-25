import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const AddCircleOutline = (props: SVGTYPE) => {
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
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        fill="none"
        stroke="undefined"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="256"
        y1="176"
        x2="256"
        y2="336"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="336"
        y1="256"
        x2="176"
        y2="256"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
    </svg>
  );
};
export default AddCircleOutline;
