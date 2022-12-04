/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "styles/templates.module.scss";
import iosTrafficColors from "lib/ios-traffic-colors";
import { IOSTermainalProps } from "typings/templates";

type CSS = React.CSSProperties;

const IOSTermainal = ({
  lightsStyle,
  circleType,
  editable,
  background,
}: IOSTermainalProps) => {
  const {
    size = 8,
    iconGap = "4px",
    padding = `0.4rem`,
    circleWidth = "2px",
    borderRadius = "20px",
    colors = iosTrafficColors,
  } = React.useMemo(() => lightsStyle, [lightsStyle]);

  const common = {
    height: size,
    width: size,
    borderRadius: borderRadius,
  } as CSS;

  return (
    <div style={{ background }} className={css["ios-lights"]}>
      <div className={css["box"]} style={{ padding: padding, gap: iconGap }}>
        {colors?.map((data, index) => (
          <span
            key={index}
            style={{
              ...common,
              border: circleType.includes("outline")
                ? `${circleWidth} solid`
                : `none`,
              [circleType.includes("outline")
                ? "borderColor"
                : "backgroundColor"]: data.hex,
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

export default IOSTermainal;
