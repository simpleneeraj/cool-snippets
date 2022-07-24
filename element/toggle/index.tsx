import React from "react";
import css from "styles/toggle.module.scss";

interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}
const Toggle = (props: ToggleProps) => {
  const { checked: defaultValue = false, onChange } = props;
  const onToggle = React.useCallback(() => {
    if (onChange) onChange(!defaultValue);
  }, [defaultValue, onChange]);

  const toggleStyle = {
    span: {
      transform: `translateX(${defaultValue ? "28px" : "0px"})`,
      background: defaultValue ? `#03A9F4` : `var(--button-color)`,
    },
  };
  return (
    <div onClick={onToggle} className={css.container}>
      <span style={toggleStyle.span}></span>
    </div>
  );
};
export default React.memo(Toggle);
