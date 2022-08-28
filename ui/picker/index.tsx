import React from "react";
import css from "../css/picker.module.scss";

const ColorPicker = React.forwardRef((props, ref) => {
  const [pickerModel, setPickerModel] = React.useState(false);

  const openModel = React.useCallback(() => {
    setPickerModel(!pickerModel);
  }, [pickerModel]);
  return (
    <div className={css.container}>
      <p>#eee</p>
      <span className={css.badge} onClick={openModel}></span>
      {pickerModel ? (
        <div className={css.model}>
          <div className={css.title}>Color Picker</div>
          <div className={css.colors}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
    </div>
  );
});

ColorPicker.displayName = "ColorPicker";
export default ColorPicker;
