import React from "react";
import Toggle from "element/toggle";
import OptionsWraper from "../wraper";

const SettingsOptions = () => {
  return (
    <React.Fragment>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle onChange={(v) => v} defaultValue={true} />
      </OptionsWraper>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle onChange={(v) => v} defaultValue={false} />
      </OptionsWraper>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle onChange={(v) => v} defaultValue={true} />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default SettingsOptions;
