import React from "react";
import useCode from "store/hooks/use-code";
import UnixNeon from "components/templates/unix-neon";
import WindowsTen from "components/templates/windows-terminal";
import templatesData from "constants/data-templates";

const TrafficLights = React.lazy(
  () => import("components/templates/ios-terminal")
);

/**
 * Code Headers
 * @param param0
 * @returns
 */
const CodeHeaders = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  const {
    codeState: { codeHead },
  } = useCode();

  switch (codeHead.type) {
    case templatesData.ios:
      return (
        <TrafficLights
          background={codeHead.background}
          theme={codeHead["theme"]}
          lightsStyle={{
            size: 14,
            iconGap: "8px",
            padding: `0.8rem 0 0.8rem 0.8rem`,
          }}
        />
      );

    case templatesData.windows:
      return (
        <WindowsTen
          size={14}
          iconGap=".8rem"
          padding={`0.8rem`}
          icon={codeHead.icon}
          inputStyle={codeHead.input}
          background={codeHead.background}
          theme={codeHead.theme}
        />
      );
    case templatesData.unix:
      return (
        <UnixNeon
          size={16}
          iconGap="0.7rem"
          padding={`0.8rem`}
          icon={codeHead.icon}
          inputStyle={codeHead.input}
          background={codeHead.background}
          theme={codeHead.theme}
        />
      );
    default:
      return null;
  }
};

export default CodeHeaders;

// case "LIGHTS/BACKGROUND":
//   return (
//     <TrafficLights
//       circleType="filled"
//       lightsStyle={{
//         size: 14,
//         iconGap: "8px",
//         padding: `0.8rem 0 0.8rem 0.8rem`,
//       }}
//       // editable
//     />
//   );
// case "LIGHTS/BORDER":
//   return (
//     <TrafficLights
//       circleType="outline"
//       lightsStyle={{
//         size: 14,
//         iconGap: "8px",
//         circleWidth: "2px",
//         padding: `0.8rem 0 0.8rem 0.8rem`,
//       }}
//     />
//   );
