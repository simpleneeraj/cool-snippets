import React from "react";
import Segment from "element/segment";
import OptionsWraper from "../wraper";
import useText from "store/hooks/usetext";
import Select from "element/select";

const TextOptions = () => {
  const { fontSizeHandler, fontSize } = useText();
  const { fontWeightHandler, fontWeight } = useText();
  const { lineHeightHandler, lineHeight } = useText();
  const { letterSpacingHandler, letterSpacing } = useText();
  return (
    <React.Fragment>
      <OptionsWraper title="Font Size">
        <Segment
          defaultValue={fontSize}
          children={dataArray.fontSizes}
          onChange={(v) => fontSizeHandler(v)}
        />
      </OptionsWraper>
      <OptionsWraper title="Font Weight">
        <Segment
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
        <Select children={dataArray.fontFaces} defaultValue={"Monospace"} />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default TextOptions;

const dataArray = {
  fontSizes: ["14px", "15px", "16px"],
  fontWeight: ["400", "500", "600"],
  lineHeight: [
    {
      text: "Unset",
      value: "unset",
    },
    {
      text: "1",
      value: "1",
    },
    {
      text: "2",
      value: "1",
    },
    {
      text: "3",
      value: "1",
    },
  ],
  letterSpacing: [
    {
      text: "Unset",
      value: "unset",
    },
    {
      text: "1",
      value: "1",
    },
    {
      text: "2",
      value: "1",
    },
    {
      text: "3",
      value: "1",
    },
  ],
  fontFaces: [
    {
      text: "Monospace",
      value: "monospace",
    },
    {
      text: "Consolas",
      value: "consolas",
    },
  ],
};
