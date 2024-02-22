import { SVGIconProps } from '../types/icon';

const EllipsisHorizontalIcon = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
    {...props}
  >
    <circle cx="256" cy="256" r="26" />
    <circle cx="346" cy="256" r="26" />
    <circle cx="166" cy="256" r="26" />
    <path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  </svg>
);
export default EllipsisHorizontalIcon;
