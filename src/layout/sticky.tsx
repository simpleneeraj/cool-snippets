import Keyboard from "lib/icons/Keyboard";
import React from "react";
import css from "styles/elements.module.scss";

type PositionTypes =
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right"
  | "middle left"
  | "middle right";

interface PositionProps extends React.ComponentPropsWithRef<"div"> {
  direction?: PositionTypes;
  "direction-value"?: string;
  icon?: React.ReactNode;
  children?: string;
}

const StickyButton = (props: PositionProps) => {
  const x = positionBuilder(props.direction, props["direction-value"]);

  return (
    <div style={x} className={css.sticky} {...props}>
      <button>
        <Keyboard size={16} />
        {props.children}
      </button>
    </div>
  );
};
export default StickyButton;

const positionBuilder = (direction?: PositionTypes, value?: string) => {
  switch (direction) {
    case "bottom left":
      return {
        top: value,
        right: value,
        // bottom: value,
        // left: value,
      };
    case "bottom right":
      return {
        // top: value,
        right: value,
        bottom: value,
        // left: value,
      };
    case "top left":
      return {
        top: value,
        // right: value,
        // bottom: value,
        left: value,
      };
    case "top right":
      return {
        top: value,
        right: value,
        // bottom: value,
        // left: value,
      };
    case "middle left":
      return {
        top: "50%",
        // right: value,
        // bottom: value,
        left: value,
        transform: `translateY(-50%)`,
      };
    case "middle right":
      return {
        top: "50%",
        right: value,
        // bottom: value,
        // left: value,
        transform: `translateY(-50%)`,
      };
    default:
      return {};
  }
};
