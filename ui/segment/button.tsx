import React from "react";
import { SegmentButtonProps } from "ui/types/segement";
import css from "../css/segment.module.scss";

const SegmentButton = React.forwardRef(
  (
    { text, icon, active, ...rest }: SegmentButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} {...rest} className={active ? css.active : ""}>
        {icon && <i>{icon}</i>}
        {text}
      </button>
    );
  }
);

SegmentButton.displayName = "SegmentButton";
export default SegmentButton;
