import { randomBytes } from "crypto";
import React from "react";

interface NewProps {
  dur?: string | number;
  reactheight: number;
  reactwidth: number;
  primarycolor?: string;
  secondrycolor?: string;
  width: number | string;
  height: number | string;
}

const FakeBox = (props: NewProps) => {
  const {
    width,
    height,
    reactheight: reactHeight,
    reactwidth: reactWidth,
  } = props;
  const reactData = {
    // x: "0",
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
  const _id_1 = randomBytes(4).toString("hex");
  const _id_2 = randomBytes(4).toString("hex");
  return (
    // @ts-ignore
    <svg viewBox={`0 0 ${width} ${height}`} {...props}>
      <rect
        width="100%"
        height="100%"
        clipPath={`url(#${_id_1})`}
        fill={`url(#${_id_2})`}
      />
      <defs>
        <linearGradient id={_id_2}>
          <stop offset="0%" stopColor={props.primarycolor}>
            <animate values="-2; -3; 1" {...animate} />
          </stop>
          <stop offset="50%" stopColor={props.secondrycolor}>
            <animate values="-1; -1.5; 2" {...animate} />
          </stop>
          <stop offset="100%" stopColor={props.primarycolor}>
            <animate values="0; 1; 3" {...animate} />
          </stop>
        </linearGradient>
        <clipPath id={_id_1}>
          {reactArray.map((_, index) => (
            <rect key={index} x={index * 55} {...reactData} />
          ))}
          {/* <rect x={1 * 55} {...reactData} /> */}
        </clipPath>
      </defs>
    </svg>
  );
};

export default FakeBox;

const reactArray = Array.from(Array(8).keys());
// style={{
//     borderRadius: 8,
//     padding: 2,
//   }}
