import React from "react";
import css from "styles/right.module.scss";

interface ToolsWraperProps extends React.ComponentPropsWithRef<"div"> {
  labelleft: string;
  labelright?: string;
}
const ToolsWraper = React.forwardRef(
  (props: ToolsWraperProps, ref: React.Ref<HTMLDivElement>) => {
    const { labelright, labelleft, ...rest } = props;
    return (
      <div ref={ref} className={css.wraper} {...rest}>
        <div className={css.toptext}>
          <label>{labelleft}</label>
          <label>{labelright}</label>
        </div>
        {props.children}
      </div>
    );
  }
);

ToolsWraper.displayName = "ToolsWraper";
export default ToolsWraper;
