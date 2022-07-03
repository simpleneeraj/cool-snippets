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
      transform: `translateX(${defaultValue ? "1rem" : "0px"})`,
      background: defaultValue ? `rgb(0, 186, 124)` : `#ffffff`,
    },
    button: {
      // background: defaultValue ? `#ffffff` : `#00000080`,
    },
  };
  return (
    <div onClick={onToggle} className={css.container}>
      <button aria-label="toggle" style={toggleStyle.button}>
        <span style={toggleStyle.span}></span>
      </button>
    </div>
  );
};
export default Toggle;
