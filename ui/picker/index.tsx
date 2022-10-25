import useOnClickOutside from "hooks/useclick";
import { HexAlphaColorPicker } from "plugins/color-picker";
import React from "react";
import css from "../css/picker.module.scss";

interface ColorPickerProps {
  color?: string;
  onChange?: (color: string) => void;
}

const ColorPicker = React.forwardRef((props: ColorPickerProps, ref) => {
  const [pickerModel, setPickerModel] = React.useState(false);

  const openModel = React.useCallback(() => {
    setPickerModel(!pickerModel);
  }, [pickerModel]);

  const boxRef = useOnClickOutside(() => setPickerModel(false));
  return (
    <div ref={boxRef} className={css.container}>
      {/* <p>#eee</p> */}
      <span className={css.badge} onClick={openModel}></span>
      {pickerModel ? (
        <div className={css.model}>
          <HexAlphaColorPicker {...props} />
        </div>
      ) : null}
    </div>
  );
});

ColorPicker.displayName = "ColorPicker";
export default ColorPicker;
