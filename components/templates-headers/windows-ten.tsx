/* eslint-disable @next/next/no-img-element */
import Dismiss from "lib/icons/Dismiss";
import RemoveOutline from "lib/icons/RemoveOutline";
import SquareMultiple from "lib/icons/SquareMultiple";
import css from "styles/templates.module.scss";
import InputWithIcon from "./input-with-icon";

interface WindowsTenProps {
  padding?: string;
  iconGap?: string;
  size?: string | number | undefined;
  editable?: boolean | "with-icon";
}
const WindowsTen = ({
  size = 8,
  padding = `.4rem`,
  iconGap = "4px",
  editable,
}: WindowsTenProps) => {
  return (
    <div className={css["windows-ten"]}>
      <InputWithIcon
        source="https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg"
        editable={editable}
      />
      <div
        className={css["controls"]}
        style={{
          padding: padding,
          gap: iconGap,
        }}
      >
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
