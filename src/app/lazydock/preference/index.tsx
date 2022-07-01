import React from "react";
import modes from "lib/modes";
import themes from "lib/themes";
import Select from "element/select";
import OptionsWraper from "../wraper";
import usePreference from "store/hooks/usepreference";
import useText from "store/hooks/usetext";

const PreferencesOptions = () => {
  const {
    mode,
    theme,
    lineNumbers,
    onSelectTheme,
    onSelectMode,
    linenumberHandler,
  } = usePreference();

  const { fontFaceHandler, fontFace } = useText();

  return (
    <React.Fragment>
      <OptionsWraper title={"Line Numbers"}>
        {/* <Toggle
          onChange={(v) => linenumberHandler(v)}
          defaultValue={lineNumbers}
        /> */}
        <Select
          defaultValue={`${lineNumbers}`}
          onChange={(value) => linenumberHandler(value)}
          children={[true, false].map((d) => {
            return {
              text: `${d}`,
              value: d,
            };
          })}
        />
      </OptionsWraper>
      <OptionsWraper title={"Theme"}>
        <Select
          defaultValue={theme}
          onChange={(value) => onSelectTheme(value)}
          children={themes.map((d) => {
            return {
              text: d,
              value: d.toLowerCase(),
            };
          })}
        />
      </OptionsWraper>
      <OptionsWraper title={"Language"}>
        <Select
          defaultValue={mode}
          onChange={(value) => onSelectMode(value)}
          children={modes.map((d) => {
            return {
              text: d.mode,
              value: d.mode.toLowerCase(),
            };
          })}
        />
      </OptionsWraper>

      <OptionsWraper title="Font Faces">
        <Select
          children={fontFaces}
          defaultValue={fontFace}
          onChange={(v) => fontFaceHandler(v)}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};

export default PreferencesOptions;

const fontFaces = [
  {
    text: "FiraCode",
    get value() {
      return this.text;
    },
  },
  {
    text: "IBMPlexMono",
    get value() {
      return this.text;
    },
  },
  {
    text: "Inconsolata",
    get value() {
      return this.text;
    },
  },
  {
    text: "JetBrainsMono",
    get value() {
      return this.text;
    },
  },
  {
    text: "MonoLisa",
    get value() {
      return this.text;
    },
  },
  {
    text: "OperatorMono",
    get value() {
      return this.text;
    },
  },
  {
    text: "RobotoMono",
    get value() {
      return this.text;
    },
  },
  {
    text: "SourceCodePro",
    get value() {
      return this.text;
    },
  },
  {
    text: "UbuntuMono",
    get value() {
      return this.text;
    },
  },
  {
    text: "VictorMono",
    get value() {
      return this.text;
    },
  },
];
