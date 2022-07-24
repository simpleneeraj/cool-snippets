import React from "react";
import Toggle from "element/toggle";
import OptionsWraper from "../wraper";

const SettingsOptions = () => {
  return (
    <React.Fragment>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle onChange={(v) => v} checked={true} />
      </OptionsWraper>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle onChange={(v) => v} checked={false} />
      </OptionsWraper>
      <OptionsWraper title={"Dark Mode"}>
        <Toggle onChange={(v) => v} checked={true} />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default SettingsOptions;
