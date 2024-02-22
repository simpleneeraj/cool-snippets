import React from 'react';
import { SVGIconProps } from '../types/icon';

const PortraitIcon = (props: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect
        x="80"
        y="16"
        width="352"
        height="480"
        rx="48"
        ry="48"
        transform="rotate(-90 256 256)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};
export default PortraitIcon;
