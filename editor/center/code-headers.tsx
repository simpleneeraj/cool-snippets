import React from "react";
import WindowsTen from "components/templates/windows-ten";
import useCode from "store/hooks/use-code";
import UnixNeon from "components/templates/unix-neon";

const TrafficLights = React.lazy(
  () => import("components/templates/ios-traffic-lights")
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
    case "DEFAULT":
      return (
        // <TrafficLights
        //   background={codeHead.background}
        //   circleType="filled"
        //   lightsStyle={{
        //     size: 14,
        //     iconGap: "8px",
        //     padding: `0.8rem 0 0.8rem 0.8rem`,
        //   }}
        // />
        <UnixNeon
          size={14}
          editable={"with-icon"}
          padding={`0.8rem`}
          iconGap=".8rem"
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
            circleWidth: "2px",
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

export default CodeHeaders;
