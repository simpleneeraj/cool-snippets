import { SVGIconProps } from '@/app-kit/types/icon';
import * as React from 'react';

function TextAlignLeftIcon(props: SVGIconProps) {
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
        d="M3 10h14M3 6h18M3 18h14M3 14h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TextAlignLeftIcon;
