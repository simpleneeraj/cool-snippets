import ToolsWraper from "code-app/right/wraper";
import ToolsList from "code-app/right/wraper/list";
import React from "react";
import useText from "store/hooks/usetext";
import StepperButton from "ui/button/stepper";
import HRLine from "ui/line";
import Select from "ui/select";
import css from "styles/app.module.scss";
import fonts from "lib/fonts";

const TextOptions = () => {
  // FOR TEXT
  const { fontSizeHandler, fontSize } = useText();
  const { fontWeightHandler, fontWeight } = useText();
  const { lineHeightHandler, lineHeight } = useText();
  const { letterSpacingHandler, letterSpacing } = useText();
  const { fontFaceHandler, fontFace } = useText();

  return (
    <ToolsWraper labelleft="TEXT" labelright="Reset">
      <ToolsList title="Font Size">
        <Select
          options={fontSizes}
          defaultValue={fontSize}
          onSelect={(v) => fontSizeHandler(v)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Font Weight">
        <Select
          options={fontWeights}
          defaultValue={fontWeight}
          onSelect={(v) => fontWeightHandler(v)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Line Height">
        <StepperButton
          min={0}
          max={2}
          step={0.1}
          onStepper={(value) => lineHeightHandler(value)}
          defaultValue={lineHeight}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Letter Spacing">
        <StepperButton
          min={0}
          max={5}
          step={0.1}
          onStepper={(value) => letterSpacingHandler(value)}
          defaultValue={letterSpacing}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Typeface">
        <Select
          options={fontFaces}
          defaultValue={fontFace}
          onSelect={(v) => fontFaceHandler(v)}
        />
      </ToolsList>
    </ToolsWraper>
  );
};
export default TextOptions;

const fontFaces = fonts
  .sort((a, b) => a.name.localeCompare(b.name, "en"))
  .map((data) => {
    return {
      text: data.name,
      get value() {
        return this.text;
      },
    };
  });

const fontWeights = Array.from(Array(9).keys()).map((_, i) => {
  return {
    text: (i + 1) * 100,
    value: (i + 1) * 100,
  };
});
const fontSizes = Array.from(Array(21).keys()).map((_, i) => {
  const value = i + 10;
  return {
    text: `${value}px`,
    value: value,
  };
});
