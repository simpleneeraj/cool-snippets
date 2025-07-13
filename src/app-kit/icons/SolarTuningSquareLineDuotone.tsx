import React from 'react';
import type { SVGProps } from 'react';

export function SolarTuningSquareLineDuotone(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5}></path><circle cx={8} cy={10} r={2}></circle><circle cx={2} cy={2} r={2} transform="matrix(1 0 0 -1 14 16)"></circle><path strokeLinecap="round" d="M8 14v5m8-9V5M8 5v1m8 13v-1"></path></g></svg>);
}