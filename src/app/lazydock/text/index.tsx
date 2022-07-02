import React from "react";
import OptionsWraper from "../wraper";
import useText from "store/hooks/usetext";
import Select from "element/select";
import dataArray from "./dataArray";
import RangeSlider from "element/range";

const TextOptions = () => {
  const { fontSizeHandler, fontSize } = useText();
  const { fontWeightHandler, fontWeight } = useText();
  const { lineHeightHandler, lineHeight } = useText();
  const { letterSpacingHandler, letterSpacing } = useText();

  return (
    <React.Fragment>
      <OptionsWraper title={`Font Size ${fontSize}px`}>
        <RangeSlider
          value={fontSize}
          type="range"
          max={24}
          min={10}
          step={0.5}
          onChange={(e) => fontSizeHandler(e.target.value)}
        />
      </OptionsWraper>

      <OptionsWraper title={`Line Height ${lineHeight}`}>
        <RangeSlider
          value={lineHeight}
          type="range"
          max={2}
          min={0}
          step={0.1}
          onChange={(e) => lineHeightHandler(e.target.value)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Letter Spacing ${letterSpacing}px`}>
        <RangeSlider
          value={letterSpacing}
          type="range"
          max={5}
          min={0}
          step={0.1}
          onChange={(e) => letterSpacingHandler(e.target.value)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Font Weight ${fontWeight}`}>
        <Select
          defaultValue={fontWeight}
          children={dataArray.fontWeight}
          onChange={(v) => fontWeightHandler(v)}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default TextOptions;
