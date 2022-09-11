import React from "react";
import { SegmentProps } from "ui/types/segement";
import css from "../css/segment.module.scss";

const Segment = React.forwardRef(
  ({ children, ...rest }: SegmentProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={css.container} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Segment.displayName = "Segment";
export default Segment;
