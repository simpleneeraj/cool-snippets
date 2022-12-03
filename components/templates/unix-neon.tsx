/* eslint-disable @next/next/no-img-element */
import css from "styles/templates.module.scss";
import CloseIcon from "lib/icons/CloseIcon";
import TriangleIcon from "lib/icons/TriangleIcon";
import EllipseIcon from "lib/icons/EllipseIcon";
import { SVGPROPS } from "typings/svg";

// #79e6f3
// #5adecd
// #f37f97
// #556fff
// #c574dd

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
interface WindowsTenProps {
  padding?: string;
  iconGap?: string;
  size?: string | number | undefined;
  editable?: boolean | "with-icon";
}
const UnixNeon = ({
  size = 15,
  padding = `.4rem`,
  iconGap = "4px",
}: WindowsTenProps) => {
  return (
    <div className={css["unix-neon"]}>
      <div></div>
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
              <data.icon color={data.hex} size={size} />
            </i>
          </span>
        ))}
      </div>
    </div>
  );
};

export default UnixNeon;
