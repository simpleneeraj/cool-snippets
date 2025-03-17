import { SVGIconProps } from '../types/icon';

const ElementsIcon: React.FC<SVGIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
    />
  </svg>
);

export default ElementsIcon;
