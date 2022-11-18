import React from "react";
import empty from "utils/empty";
import css from "../css/button.module.scss";
import { ButtonProps } from "../types/button";

const IconButton = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      children,
      disabled,
      active,
      hover,
      label,
      direction,
      size,
      title,
      className: cl,
      ...rest
    } = props;

    const activate = () => {
      switch (active) {
        case "clicked":
          return css.clicked;
        case "static":
          return css.active;
        case "translate":
          return css.translate;
        default:
          return empty;
      }
    };

    const buttonType = () => {
      switch (size) {
        case "square":
          return css.square;
        case "reactangle":
          return css.reactangle;
        default:
          return empty;
      }
    };

    const className = `${cl} ${css.container} 
    ${disabled === "reduce-opacity" ? css.disable : empty}
    ${activate()}
    ${buttonType()}
    ${hover ? css.hover : empty}
    `.trim();

    return (
      <div className={className} style={{ minWidth: size }}>
        <button
          disabled={disabled === "no-action"}
          style={{ flexDirection: direction }}
          ref={ref}
          className={cl}
          aria-label={title}
          {...rest}
        >
          {children}
        </button>
      </div>
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;
