import React from "react";
import css from "styles/templates.module.scss";
import backgroundFilter from "utils/background-filter";
import CustomTemplateCard from "./custom-template";
import DeviceTemplates from "./device-templates";
// HEADS
import WindowsTen from "components/templates/windows-ten";
import TrafficLights from "components/templates/ios-traffic-lights";
import useTab from "store/hooks/use-tab";
import useCode from "store/hooks/use-code";

const Templates = () => {
  const {
    updateCodeHead,
    codeState: { canvas, codeHead },
  } = useCode();
  const background = backgroundFilter(canvas.source);

  // console.log(colors);
  const {
    tabState: { bottom },
    updateBottomTab,
  } = useTab();

  return (
    <React.Fragment>
      <div className={css.templates}>
        {templates.map(({ value, codeHeader }, i) => (
          <DeviceTemplates
            key={i}
            editHiglight={bottom.name === "TEMPLATE::EDITING"}
            onEdit={() => updateBottomTab("name", "TEMPLATE::EDITING")}
            active={codeHead.type === value}
            onClick={() => updateCodeHead("type", value)}
            CodeHeader={codeHeader}
          />
        ))}
        <CustomTemplateCard onClick={() => alert("Ruko Jara")} />
      </div>
      <style>
        {`
          .template-background {
            background: ${background};
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: all 100ms ease-in;
            display: grid;
            place-content: center;
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default React.memo(Templates);

const templates = [
  {
    name: "ios Traffic Light",
    value: "DEFAULT",
    codeHeader: (
      <TrafficLights
        circleType="filled"
        lightsStyle={{
          size: 8,
        }}
      />
    ),
  },
  {
    name: "ios Traffic Light",
    value: "LIGHTS/BACKGROUND",
    codeHeader: (
      <TrafficLights
        circleType="filled"
        lightsStyle={{
          size: 8,
        }}
      />
    ),
  },
  {
    name: "ios Traffic Light with Border",
    value: "LIGHTS/BORDER",
    codeHeader: (
      <TrafficLights
        circleType="outline"
        lightsStyle={{
          size: 8,
        }}
      />
    ),
  },
  {
    name: "Windows Terminal Border",
    value: "WINDOWS/BORDER",
    codeHeader: <WindowsTen />,
  },
];
