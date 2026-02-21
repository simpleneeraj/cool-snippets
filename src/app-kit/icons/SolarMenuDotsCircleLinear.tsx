import React from 'react';
import type { SVGProps } from 'react';

export function SolarMenuDotsCircleLinear(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.009m3.996 0h.008m3.978 0H16"></path><circle cx={12} cy={12} r={10} strokeWidth={1.5}></circle></g></svg>);
}