import React from 'react';
import type { SVGProps } from 'react';

export function IonAddOutline(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 112v288m144-144H112"></path></svg>);
}