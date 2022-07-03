import React from "react";
import css from "styles/toggle.module.scss";

interface ToggleProps {
  defaultValue: boolean;
  onChange: (value: boolean) => void;
}
const Toggle = (props: ToggleProps) => {
  const { defaultValue = false, onChange } = props;
  const onToggle = React.useCallback(() => {
    if (onChange) onChange(!defaultValue);
  }, [defaultValue, onChange]);

  const toggleStyle = {
    span: {
      transform: `translateX(${defaultValue ? "100%" : "0%"})`,
      background: defaultValue ? `#03A9F4` : `var(--button-color)`,
    },
    i: {
      height: "11px",
      width: `${defaultValue ? "0px" : "11px"}`,
      borderRadius: `${defaultValue ? "10px" : "100px"}`,
      borderWidth: defaultValue ? `1px` : `2px`,
      borderColor: defaultValue ? `var(--button-color)` : `#1d232a`,
      borderStyle: "solid",
      backgroundColor: defaultValue ? "var(--button-color)" : "transparent",
    } as React.CSSProperties,
  };
  return (
    <div onClick={onToggle} className={css.container}>
      <button aria-label="toggle">
        <span style={toggleStyle.span}>
          <i style={toggleStyle.i}></i>
        </span>
      </button>
    </div>
  );
};
export default Toggle;
