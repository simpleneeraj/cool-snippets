import React from "react";
import OptionsWraper from "../wraper";
import RangeSlider from "element/range";
import usePost from "store/hooks/usepost";

const PostOptions = () => {
  const { alphaHandler, blurRadiusHandler, cornerRadiusHandler } = usePost();
  const { alpha, blurRadius, cornerRadius } = usePost();
  return (
    <React.Fragment>
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
export default PostOptions;
