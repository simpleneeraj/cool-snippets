import React from 'react';
import { IconsProps } from '../types';

const Triangle = (props: IconsProps) => {
  const { size = '30px', ...rest } = props;
  const common = {
    height: size,
    width: size,
    fill: 'none',
    strokeWidth: '3',
    stroke: '#000',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...common}
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};
export default Triangle;
