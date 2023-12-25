import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const DownloadOutline = (props: SVGTYPE) => {
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
        d="M336,176h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V216a40,40,0,0,1,40-40h40"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="30px"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="176 272 256 352 336 272"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="30px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="256"
        y1="48"
        x2="256"
        y2="336"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="30px"
      />
    </svg>
  );
};
export default DownloadOutline;
