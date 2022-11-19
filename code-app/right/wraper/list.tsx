import React from "react";
import css from "styles/right.module.scss";

interface ToolsWraperProps extends React.ComponentPropsWithRef<"div"> {}
const ToolsList = React.forwardRef(
  (props: ToolsWraperProps, ref: React.Ref<HTMLDivElement>) => {
    const { title, ...rest } = props;
    return (
      <div ref={ref} className={css.list} {...rest}>
        <label>{title}</label>
        {props.children}
      </div>
    );
  }
);

ToolsList.displayName = "ToolsWraper";
export default ToolsList;
