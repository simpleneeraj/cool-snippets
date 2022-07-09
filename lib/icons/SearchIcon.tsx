import { SVGTYPE } from "typings/app";

export const SearchIcon = (props: SVGTYPE) => {
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
        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
        fill="none"
        stroke="undefined"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="338.29"
        y1="338.29"
        x2="448"
        y2="448"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
    </svg>
  );
};

export default SearchIcon;
