import FakeCoding from "./fake-coding";
import css from "styles/templates.module.scss";
import { BrushIcon } from "lib/icons/BrushIcon";
import { DeviceTemplateProps } from "typings/templates";

const DeviceTemplates = ({
  active,
  onEdit,
  CodeHeader,
  editHiglight,
  ...rest
}: DeviceTemplateProps) => {
  const ab = {
    b1: `2px solid ${active ? "var(--ui-color-primary)" : "transparent"}`,
    b2: `1pt solid ${editHiglight ? "var(--ui-color-primary)" : "transparent"}`,
  };

  return (
    <div className={css["template-card"]}>
      {active && (
        <span
          title="Edit"
          style={{ border: ab.b2 }}
          onClick={onEdit}
          className={css["edit-icon"]}
        >
          <BrushIcon size={14} />
        </span>
      )}
      <div
        style={{ border: ab.b1 }}
        className={`template-background ${css["background"]}`}
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
