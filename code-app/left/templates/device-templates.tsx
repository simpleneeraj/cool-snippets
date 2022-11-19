import FakeCoding from "./fake-coding";
import css from "styles/templates.module.scss";
import { BrushIcon } from "lib/icons/BrushIcon";
import { DeviceTemplateProps } from "typings/templates";

const DeviceTemplates = ({
  active,
  CodeHeader,
  onEdit,
  editHiglight,
  ...rest
}: DeviceTemplateProps) => {
  const st = {
    border: `2px solid ${active ? "var(--ui-color)" : "transparent"}`,
  };
  const editBorder = {
    border: `1pt solid ${editHiglight ? "var(--ui-color)" : "transparent"}`,
  };
  return (
    <div className={css["template-card"]}>
      {active && (
        <span
          title="Edit"
          style={editBorder}
          onClick={onEdit}
          className={css["edit-icon"]}
        >
          <BrushIcon size={14} />
        </span>
      )}
      <div
        className={`template-background ${css["background"]}`}
        style={st}
        {...rest}
      >
        <div className={css["temp-box"]}>
          {CodeHeader}
          <FakeCoding />
        </div>
      </div>
    </div>
  );
};

export default DeviceTemplates;
