import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const HappyOutline = (props: SVGTYPE) => {
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
      <circle xmlns="http://www.w3.org/2000/svg" cx="184" cy="232" r="24" />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M256.05,384c-45.42,0-83.62-29.53-95.71-69.83A8,8,0,0,1,168.16,304H343.85a8,8,0,0,1,7.82,10.17C339.68,354.47,301.47,384,256.05,384Z"
      />
      <circle xmlns="http://www.w3.org/2000/svg" cx="328" cy="232" r="24" />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="20px"
      />
    </svg>
  );
};
export default HappyOutline;
