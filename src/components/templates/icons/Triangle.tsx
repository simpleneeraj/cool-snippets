import React from 'react';
import { SVGPROPS } from '@/typings/svg';

const Triangle = (props: SVGPROPS) => {
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
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...common}
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    </svg>
  );
};
export default Triangle;
