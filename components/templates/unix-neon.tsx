/* eslint-disable @next/next/no-img-element */
import css from "styles/templates.module.scss";
import { SVGPROPS } from "typings/svg";
import InputWithIcon from "./input";
import { UnixProps } from "typings/templates";
import Triangle from "./icons/Triangle";
import EllipseIcon from "./icons/EllipseIcon";
import CloseIcon from "./icons/Close";
import Square from "./icons/Square";

const colors = [
  {
    name: "Triangle",
    // hex: "#556fff",
    hex: "#c574dd",
    icon: (props: SVGPROPS) => <Triangle {...props} />,
  },
  {
    name: "Ellipse",
    hex: "#79e6f3",
    icon: (props: SVGPROPS) => <EllipseIcon {...props} />,
  },
  // {
  // name:'Square',
  //   hex: "#c574dd",
  //   icon: (props: SVGPROPS) => <Square {...props} />,
  // },
  {
    name: "Close",
    hex: "#f37f97",
    icon: (props: SVGPROPS) => <CloseIcon {...props} />,
  },
];

const UnixNeon = ({
  icon,
  size = 16,
  background,
  padding = `.4rem`,
  iconGap = "4px",
  inputStyle: editable,
  theme = "outline",
}: UnixProps) => {
  return (
    <div style={{ background }} className={css["unix-neon"]}>
      <InputWithIcon icon={icon} inputStyle={editable} />
      <div
        className={css["controls"]}
        style={{
          padding: padding,
          gap: iconGap,
        }}
      >
        {colors.map((data, index) => {
          const fill = theme.includes("filled") ? data.hex : "none";
          const strokeWidth =
            theme.includes("filled") && data.name.includes("Close") ? 7 : 3;
          return (
            <span key={index}>
              <i>
                <data.icon
                  fill={fill}
                  size={size}
                  color={data.hex}
                  stroke={data.hex}
                  strokeWidth={strokeWidth}
                />
              </i>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default UnixNeon;

// #79e6f3
// #5adecd
// #f37f97
// #556fff
// #c574dd
