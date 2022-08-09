import React from "react";
import { SpanProps } from "./types/ui";

const Span = React.forwardRef(
  (props: SpanProps, ref: React.Ref<HTMLSpanElement>) => {
    return <span ref={ref} {...props} />;
  }
);

Span.displayName = "Span";
export default Span;
