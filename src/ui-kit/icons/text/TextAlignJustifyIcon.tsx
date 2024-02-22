import * as React from 'react';
import { SVGIconProps } from '@/ui-kit/types/icon';

function TextAlignJustifyIcon(props: SVGIconProps) {
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
        d="M3 6h18M3 10h18M3 14h18M3 18h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TextAlignJustifyIcon;
