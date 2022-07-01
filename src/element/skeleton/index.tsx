import React from "react";

interface NewProps extends React.SVGProps<SVGSVGElement> {
  dur?: string | number;
  reactHeight?: string | number;
  reactWidth?: string | number;
  primaryColor?: string;
  secondryColor?: string;
}

const Skeleton = (props: NewProps) => {
  const { width, height, reactHeight, reactWidth } = props;
  const reactData = {
    x: "0",
    y: "0",
    rx: "8",
    ry: "8",
    width: reactWidth,
    height: reactHeight,
  };
  const animate = {
    dur: props.dur || "1s",
    attributeName: "offset",
    keyTimes: "0; 0.25; 1",
    repeatCount: "indefinite",
  };
  const $1 = (Date.now() * 10).toString();
  const $2 = (Date.now() * 20).toString();
  return (
    <svg viewBox={`0 0 ${width} ${height}`} {...props}>
      <rect
        width="100%"
        height="100%"
        clipPath={`url(#${$1})`}
        fill={`url(#${$2})`}
      />
      <defs>
        <linearGradient id={$2}>
          <stop offset="0%" stopColor={props.primaryColor}>
            <animate values="-2; -3; 1" {...animate} />
          </stop>
          <stop offset="50%" stopColor={props.secondryColor}>
            <animate values="-1; -1.5; 2" {...animate} />
          </stop>
          <stop offset="100%" stopColor={props.primaryColor}>
            <animate values="0; 1; 3" {...animate} />
          </stop>
        </linearGradient>
        <clipPath id={$1}>
          <rect {...reactData} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Skeleton;

// style={{
//     borderRadius: 8,
//     padding: 2,
//   }}
