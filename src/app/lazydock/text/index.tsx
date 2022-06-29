import React from "react";
import OptionsWraper from "../wraper";
import useText from "store/hooks/usetext";
import Select from "element/select";
import dataArray from "./dataArray";

const TextOptions = () => {
  const { fontSizeHandler, fontSize } = useText();
  const { fontWeightHandler, fontWeight } = useText();
  const { lineHeightHandler, lineHeight } = useText();
  const { letterSpacingHandler, letterSpacing } = useText();
  const { fontFaceHandler, fontFace } = useText();

  return (
    <React.Fragment>
      <OptionsWraper title="Font Size">
        <Select
          defaultValue={fontSize}
          children={dataArray.fontSizes}
          onChange={(v) => fontSizeHandler(v)}
        />
      </OptionsWraper>
      <OptionsWraper title="Font Weight">
        <Select
          defaultValue={fontWeight}
          children={dataArray.fontWeight}
          onChange={(v) => fontWeightHandler(v)}
        />
      </OptionsWraper>
      <OptionsWraper title="Line Height">
        <Select
          defaultValue={lineHeight}
          children={dataArray.lineHeight}
          onChange={(v) => lineHeightHandler(v)}
        />
      </OptionsWraper>
      <OptionsWraper title="Letter Spacing">
        <Select
          defaultValue={letterSpacing}
          onChange={(v) => letterSpacingHandler(v)}
          children={dataArray.letterSpacing}
        />
      </OptionsWraper>
      <OptionsWraper title="Font Faces">
        <Select
          children={dataArray.fontFaces}
          defaultValue={fontFace}
          onChange={(v) => fontFaceHandler(v)}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default TextOptions;
