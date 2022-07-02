import React from "react";
import css from "styles/button.module.scss";

interface PositionProps extends React.ComponentPropsWithRef<"div"> {
  icon?: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
}

const StickyButton = (props: PositionProps) => {
  const style = {
    ...props.style,
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
    transform: props.transform,
  } as React.CSSProperties;
  return (
    <div style={style} className={css.sticky} {...props}>
      <button>
        {props.icon ? props.icon : null}
        {props.children}
      </button>
    </div>
  );
};
export default StickyButton;
