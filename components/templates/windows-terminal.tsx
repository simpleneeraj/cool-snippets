/* eslint-disable @next/next/no-img-element */
import InputWithIcon from "./input";
import { UnixProps } from "typings/templates";
import css from "styles/templates.module.scss";
/* ICONS */
import Dismiss from "lib/icons/Dismiss";
import RemoveOutline from "lib/icons/RemoveOutline";
import SquareMultiple from "lib/icons/SquareMultiple";

const WindowsTen = ({
  icon,
  inputStyle,
  size = 8,
  padding = `.4rem`,
  iconGap: gap = "4px",
  background,
}: UnixProps) => {
  return (
    <div style={{ background }} className={css["windows-ten"]}>
      <InputWithIcon icon={icon} inputStyle={inputStyle} />
      <div className={css["controls"]} style={{ padding, gap }}>
        <span>
          <i>
            <RemoveOutline size={size} />
          </i>
        </span>
        <span>
          <i>
            <SquareMultiple size={size} />
          </i>
        </span>
        <span>
          <i>
            <Dismiss size={size} />
          </i>
        </span>
      </div>
    </div>
  );
};

export default WindowsTen;
