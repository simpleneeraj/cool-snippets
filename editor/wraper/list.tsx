import { LockClosed } from "lib/icons/LockClosed";
import React from "react";
import css from "styles/right.module.scss";

interface ToolsWraperProps extends React.ComponentPropsWithRef<"div"> {
  locked?: boolean;
}
const ToolsList = React.forwardRef(
  (props: ToolsWraperProps, ref: React.Ref<HTMLDivElement>) => {
    const { title, locked = false, ...rest } = props;
    return (
      <div ref={ref} className={css.list} {...rest}>
        <label>
          {title} {locked && <LockClosed size={12} />}
        </label>
        {props.children}
      </div>
    );
  }
);

ToolsList.displayName = "ToolsWraper";
export default ToolsList;
