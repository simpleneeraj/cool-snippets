import * as React from "react";


interface SVGPROPS extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}