import * as React from 'react';
import { SVGIconProps } from '@/app-kit/types/icon';

function TextBoldIcon(props: SVGIconProps) {
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
        d="M12 11.667H8m4 0s3.333 0 3.333-3.334C15.333 5 12 5 12 5s0 0 0 0H8.6a.6.6 0 00-.6.6v6.067m4 0s4 0 4 3.666C16 19 12 19 12 19s0 0 0 0H8.6a.6.6 0 01-.6-.6v-6.733"
        stroke="currentColor"
      />
    </svg>
  );
}

export default TextBoldIcon;
