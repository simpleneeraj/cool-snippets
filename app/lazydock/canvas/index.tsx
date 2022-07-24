import React from "react";
import OptionsWraper from "../wraper";
import Toggle from "element/toggle";
import RangeSlider from "element/range";
import usePost from "store/hooks/usepost";
import useBackground from "store/hooks/usebackground";
import usePreference from "store/hooks/usepreference";

const CanvasOptions = () => {
  const { setPadding, padding } = useBackground();
  const { alpha, blurRadius, cornerRadius } = usePost();
  const { translucent, translucentHandler } = usePreference();
  const { alphaHandler, blurRadiusHandler, cornerRadiusHandler } = usePost();
  return (
    <React.Fragment>
      <OptionsWraper title={`Translucent`}>
        <Toggle onChange={(v) => translucentHandler(v)} checked={translucent} />
      </OptionsWraper>
      <OptionsWraper title={`Padding ${padding}px`}>
        <RangeSlider
          type="range"
          value={padding}
          max={80}
          min={10}
          step={1}
          onChange={(e) => setPadding(e.target.value)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Alpha ${alpha}`}>
        <RangeSlider
          value={alpha}
          type="range"
          max={1}
          min={0}
          step={0.01}
          onChange={(e) => alphaHandler(e.target.value)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Corner ${cornerRadius}px`}>
        <RangeSlider
          value={cornerRadius}
          type="range"
          max={30}
          min={0}
          step={1}
          onChange={(e) => cornerRadiusHandler(e.target.value)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Blur ${blurRadius}px`}>
        <RangeSlider
          value={blurRadius}
          type="range"
          max={30}
          min={0}
          step={1}
          onChange={(e) => blurRadiusHandler(e.target.value)}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default CanvasOptions;
