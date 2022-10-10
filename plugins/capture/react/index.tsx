import React from "react";
import attID from "../utils/attid";

type element = HTMLDivElement;

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  "data-capture"?: string;
}

const forward = React.forwardRef;

const Capture = forward<element, Props>((props, ref) => {
  return <div ref={ref} data-capture={attID} {...props} />;
});

export default Capture;
