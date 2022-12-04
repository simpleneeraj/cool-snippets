import React from "react";
import useTab from "store/hooks/use-tab";
import useCode from "store/hooks/use-code";
import css from "styles/templates.module.scss";
import DeviceTemplates from "./device-templates";
import CustomTemplateCard from "./custom-template";
import backgroundFilter from "utils/b-filter";
import WindowsTen from "components/templates/windows-terminal";
import IOSTermainal from "components/templates/ios-terminal";
import templatesData from "constants/data-templates";
import UnixNeon from "components/templates/unix-neon";

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
            CodeHeader={codeHeader}
            active={codeHead.type.includes(value)}
            onClick={() => updateCodeHead("type", value)}
            editHiglight={bottom.name.includes("TEMPLATE::EDITING")}
            onEdit={() => updateBottomTab("name", "TEMPLATE::EDITING")}
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
    name: "Nothing",
    value: "nothing",
    codeHeader: null,
  },
  {
    name: "ios Traffic Light",
    value: templatesData.ios,
    codeHeader: (
      <IOSTermainal
        circleType="filled"
        lightsStyle={{
          size: 8,
        }}
      />
    ),
  },
  {
    name: "ios Traffic Light",
    value: templatesData.unix,
    codeHeader: <UnixNeon size={7} icon={""} />,
  },

  {
    name: "Windows Terminal Border",
    value: templatesData.windows,
    codeHeader: <WindowsTen icon={""} />,
  },
];

// {
//   name: "ios Traffic Light",
//   value: "LIGHTS/BACKGROUND",
//   codeHeader: (
//     <IOSTermainal
//       circleType="filled"
//       lightsStyle={{
//         size: 8,
//       }}
//     />
//   ),
// },
// {
//   name: "ios Traffic Light with Border",
//   value: "LIGHTS/BORDER",
//   codeHeader: (
//     <IOSTermainal
//       circleType="outline"
//       lightsStyle={{
//         size: 8,
//       }}
//     />
//   ),
// },
