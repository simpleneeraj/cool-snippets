import React from "react";
import useCodeHead from "store/hooks/use-code-head";
import useBackground from "store/hooks/usebackground";
import css from "styles/templates.module.scss";
import backgroundFilter from "utils/background-filter";
import CustomTemplateCard from "./custom-template";
import DeviceTemplates from "./device-templates";
// HEADS
import WindowsTen from "components/templates-headers/windows-ten";
import TrafficLights from "components/templates-headers/ios-traffic-lights";
import { prominent } from "plugins/color";

const Templates = () => {
  const { source } = useBackground();
  const background = backgroundFilter(source);

  const [colors, setColors] = React.useState([]);
  const { setHeaderType, headerType } = useCodeHead();

  React.useEffect(() => {
    prominent(source, { amount: 10, format: "hex", sample: 4 }).then(
      (colors: any) => {
        console.log(colors);
        setColors(colors);
      }
    );
  }, [source, background]);

  // console.log(colors);
  return (
    <React.Fragment>
      {/* <div style={{ display: "grid" }}>
        {colors.map((hex) => (
          <span
            key={hex}
            style={{
              background: hex,
            }}
          >
            {hex}
          </span>
        ))}
      </div> */}
      <div className={css.templates}>
        {templates.map(({ value, codeHeader }, i) => (
          <DeviceTemplates
            key={i}
            active={headerType === value}
            onClick={() => setHeaderType(value)}
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
