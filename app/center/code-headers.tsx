import React from "react";
import useCodeHead from "store/hooks/use-code-head";
import WindowsTen from "components/templates-headers/windows-ten";
import TrafficLights from "components/templates-headers/ios-traffic-lights";

/**
 * Code Headers
 * @param param0
 * @returns
 */
const CodeHeaders = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  const { headerType } = useCodeHead();
  // let name = "LIGHTS/BORDER";

  switch (headerType) {
    case "DEFAULT":
      return (
        <TrafficLights
          circleType="filled"
          lightsStyle={{
            size: 14,
            iconGap: "8px",
            padding: `0.8rem 0 0.8rem 0.8rem`,
          }}
        />
      );
    case "LIGHTS/BACKGROUND":
      return (
        <TrafficLights
          circleType="filled"
          lightsStyle={{
            size: 14,
            iconGap: "8px",
            padding: `0.8rem 0 0.8rem 0.8rem`,
          }}
          editable
        />
      );
    case "LIGHTS/BORDER":
      return (
        <TrafficLights
          circleType="outline"
          lightsStyle={{
            size: 14,
            iconGap: "8px",
            borderWidth: "2px",
            padding: `0.8rem 0 0.8rem 0.8rem`,
          }}
        />
      );
    case "WINDOWS/BORDER":
      return (
        <WindowsTen
          size={14}
          editable={"with-icon"}
          padding={`0.8rem`}
          iconGap=".8rem"
        />
      );
    default:
      return null;
  }
};

export default React.memo(CodeHeaders);
