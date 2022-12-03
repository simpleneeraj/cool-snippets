/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "styles/templates.module.scss";
import iosTrafficColors from "lib/ios-traffic-colors";

interface LightsStyleTypes {
  padding?: string;
  iconGap?: string;
  colors?: {
    name: string;
    hex: string;
  }[];
  size?: string | number | undefined;
  circleWidth?: string | number | undefined;
  borderRadius?: string | number | undefined;
}
interface TrafficLightsProps {
  editable?: boolean;
  background?: string;
  lightsStyle: LightsStyleTypes;
  circleType: "filled" | "outline";
}

type CSS = React.CSSProperties;

const TrafficLights = ({
  lightsStyle,
  circleType,
  editable,
  background,
}: TrafficLightsProps) => {
  const {
    size = 8,
    iconGap = "4px",
    padding = `.4rem`,
    circleWidth = "1pt",
    borderRadius = "20px",
    colors = iosTrafficColors,
  } = React.useMemo(() => lightsStyle, [lightsStyle]);

  const common = {
    height: size,
    width: size,
    borderRadius: borderRadius,
  } as CSS;

  const isOutline = circleType === "outline";
  return (
    <div style={{ background }} className={css["ios-lights"]}>
      <div className={css["box"]} style={{ padding: padding, gap: iconGap }}>
        {colors?.map((data, index) => (
          <span
            key={index}
            style={{
              ...common,
              border: isOutline ? `${circleWidth} solid` : `none`,
              [isOutline ? "borderColor" : "backgroundColor"]: data.hex,
            }}
          ></span>
        ))}
      </div>
      {editable && (
        <div className={css["input-field"]}>
          <input type="text" maxLength={20} placeholder="index.tsx" />
        </div>
      )}
    </div>
  );
};

export default TrafficLights;

{
  /* <span className={css["file-icon"]}>
            <img
              src="https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/svg.svg"
              alt="file-icon"
            />
          </span> */
}
