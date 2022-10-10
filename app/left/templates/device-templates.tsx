import { DeviceTemplateProps } from "typings/templates";
import css from "styles/templates.module.scss";
import FakeCoding from "./fake-coding";

const DeviceTemplates = ({
  active,
  CodeHeader,
  ...rest
}: DeviceTemplateProps) => {
  return (
    <div className={css["template-card"]}>
      <div
        className={`template-background ${css["background"]}`}
        style={{
          border: `2px solid ${active ? "var(--ui-color)" : "transparent"}`,
        }}
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
