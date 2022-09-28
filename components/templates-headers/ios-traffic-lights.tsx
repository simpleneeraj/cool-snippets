/* eslint-disable @next/next/no-img-element */
import React from "react";
import iosTrafficColors from "./color";
import css from "styles/templates.module.scss";

interface LightsStyleTypes {
  size?: string | number | undefined;
  borderWidth?: string | number | undefined;
  borderRadius?: string | number | undefined;
  padding?: string;
  iconGap?: string;
}
interface TrafficLightsProps {
  circleType: "filled" | "outline";
  lightsStyle: LightsStyleTypes;
  editable?: boolean;
}

type CSS = React.CSSProperties;
const TrafficLights = ({
  lightsStyle,
  circleType,
  editable,
}: TrafficLightsProps) => {
  const {
    size = 8,
    borderWidth: circleWidth = "1pt",
    borderRadius = "20px",
    padding = `.4rem`,
    iconGap = "4px",
  } = React.useMemo(() => lightsStyle, [lightsStyle]);

  const common = {
    height: size,
    width: size,
    borderRadius: borderRadius,
  } as CSS;

  const isOutline = circleType === "outline";
  return (
    <div className={css["ios-lights"]}>
      <div className={css["box"]} style={{ padding: padding, gap: iconGap }}>
        <span
          style={{
            ...common,
            border: isOutline ? `${circleWidth} solid` : `none`,
            [isOutline ? "borderColor" : "backgroundColor"]:
              iosTrafficColors.RED,
          }}
        ></span>
        <span
          style={{
            ...common,
            border: isOutline ? `${circleWidth} solid` : `none`,
            [isOutline ? "borderColor" : "backgroundColor"]:
              iosTrafficColors.GREEN,
          }}
        ></span>
        <span
          style={{
            ...common,
            border: isOutline ? `${circleWidth} solid` : `none`,
            [isOutline ? "borderColor" : "backgroundColor"]:
              iosTrafficColors.YELLOW,
          }}
        ></span>
      </div>
      {editable && (
        <div className={css["input-field"]}>
          {/* <span className={css["file-icon"]}>
            <img
              src="https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/svg.svg"
              alt="file-icon"
            />
          </span> */}
          <input type="text" maxLength={20} placeholder="index.tsx" />
        </div>
      )}
    </div>
  );
};

export default TrafficLights;
