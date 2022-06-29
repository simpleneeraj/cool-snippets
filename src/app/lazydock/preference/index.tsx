import React from "react";
import modes from "lib/modes";
import themes from "lib/themes";
import Select from "element/select";
import OptionsWraper from "../wraper";
import Toggle from "element/toggle";
import usePreference from "store/hooks/usepreference";

const PreferencesOptions = () => {
  const {
    mode,
    theme,
    lineNumbers,
    onSelectTheme,
    onSelectMode,
    linenumberHandler,
  } = usePreference();

  return (
    <React.Fragment>
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

      <OptionsWraper title={"Line Numbers"}>
        <Toggle
          onChange={(v) => linenumberHandler(v)}
          defaultValue={lineNumbers}
        />
      </OptionsWraper>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle
          onChange={(v) => linenumberHandler(v)}
          defaultValue={lineNumbers}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};

export default PreferencesOptions;
