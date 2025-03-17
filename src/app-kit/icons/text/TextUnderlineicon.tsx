import * as React from 'react';
import { SVGIconProps } from '@/app-kit/types/icon';

function TextUnderlineicon(props: SVGIconProps) {
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
        d="M16 5v6a4 4 0 01-4 4v0a4 4 0 01-4-4V5M6 19h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TextUnderlineicon;
