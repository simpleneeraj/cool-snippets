import { SVGIconProps } from '@/app-kit/types/icon';
import * as React from 'react';

function TextStrikeThroughIcon(props: SVGIconProps) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...props}
    >
      <path
        d="M3 12h18M16.286 3h-6.218a4.068 4.068 0 00-1.286 7.927L12 12m-6 9h7.932a4.068 4.068 0 003.58-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TextStrikeThroughIcon;
