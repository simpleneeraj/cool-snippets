import * as React from 'react';
import { SVGIconProps } from '@/app-kit/types/icon';

function TextAlignRightIcon(props: SVGIconProps) {
  return (
    <svg
      width="24px"
      height="24px"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...props}
    >
      <path
        d="M7 10h14M3 6h18M7 18h14M3 14h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TextAlignRightIcon;
