import React from 'react';
import type { SVGProps } from 'react';

export function UnsplashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M15 4.5H9v4h6zm-11 6h5v4h6v-4h5v9H4z"></path>
    </svg>
  );
}
export default UnsplashIcon;
