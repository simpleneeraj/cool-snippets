import React from "react";
import Select from "element/select";
import OptionsWraper from "../wraper";
import usePreference from "store/hooks/usepreference";
import useText from "store/hooks/usetext";
import toCapitalize from "lib/toCapitalize";
import { themesList } from "lib/codemirror-themes";
import { languageList } from "lib/codemirror-langs";
import Toggle from "element/toggle";
import fonts from "lib/fonts";
import SelectSearch from "element/select-search";

const PreferencesOptions = () => {
  const {
    mode,
    theme,
    lineNumbers,
    onSelectTheme,
    onSelectMode,
    linenumberHandler,
    autoCompletionHandler,
    autoCompletion,
  } = usePreference();

  const { fontFaceHandler, fontFace } = useText();

  return (
    <React.Fragment>
      <OptionsWraper title={"Line Numbers"}>
        <Toggle
          onChange={(v) => linenumberHandler(v)}
          defaultValue={lineNumbers}
        />
      </OptionsWraper>
      <OptionsWraper title={"Auto Completion"}>
        <Toggle
          onChange={(v) => autoCompletionHandler(v)}
          defaultValue={autoCompletion}
        />
      </OptionsWraper>
      <OptionsWraper title={"Theme"}>
        <SelectSearch
          options={themesList.map((name) => {
            return {
              name: toCapitalize(name),
              value: name,
            };
          })}
          onChange={(v) => console.log(v)}
          // search={true}
        />
        {/* <Select
          defaultValue={theme}
          onChange={(value) => onSelectTheme(value)}
          array={themesList.map((name) => {
            return {
              text: toCapitalize(name),
              value: name,
            };
          })}
        /> */}
      </OptionsWraper>
      <OptionsWraper title={"Language"}>
        <Select
          defaultValue={mode}
          onChange={(value) => onSelectMode(value)}
          array={languageList
            .sort((a, b) => a.localeCompare(b))
            .map((name) => {
              return {
                text: toCapitalize(name),
                value: name,
              };
            })}
        />
      </OptionsWraper>
      <OptionsWraper title="Font Faces">
        <Select
          array={fontFaces}
          defaultValue={fontFace}
          onChange={(v) => fontFaceHandler(v)}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};

export default PreferencesOptions;

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
