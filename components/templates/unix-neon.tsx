/* eslint-disable @next/next/no-img-element */
import css from "styles/templates.module.scss";
import CloseIcon from "lib/icons/CloseIcon";
import TriangleIcon from "lib/icons/TriangleIcon";
import EllipseIcon from "lib/icons/EllipseIcon";
import { SVGPROPS } from "typings/svg";
import InputWithIcon from "./input";
import { UnixProps } from "typings/templates";

const colors = [
  {
    hex: "#c574dd",
    icon: (props: SVGPROPS) => <TriangleIcon {...props} />,
  },
  {
    hex: "#79e6f3",
    icon: (props: SVGPROPS) => <EllipseIcon {...props} />,
  },
  {
    hex: "#f37f97",
    icon: (props: SVGPROPS) => <CloseIcon {...props} />,
  },
];

const UnixNeon = ({
  icon,
  size = 14,
  background,
  padding = `.4rem`,
  iconGap = "4px",
  inputStyle: editable,
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
        {colors.map((data, index) => (
          <span key={index}>
            <i>
              <data.icon
                color={data.hex}
                size={size}
                style={{
                  transform: `scale(1.4)`,
                }}
              />
            </i>
          </span>
        ))}
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
