import React from "react";
import View from "ui/view";
import css from "styles/code-headers.module.scss";
import Span from "ui/span";
import useCodeHead from "store/hooks/use-code-head";

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
        <View className={`${className} ${css.container}`} {...rest}>
          <View className={css.lights}>
            <Span className={css["traffic-background"]}></Span>
            <Span className={css["traffic-background"]}></Span>
            <Span className={css["traffic-background"]}></Span>
          </View>
        </View>
      );
    case "LIGHTS/BACKGROUND":
      return (
        <View className={`${className} ${css.container}`} {...rest}>
          <View className={css.lights}>
            <Span className={css["traffic-background"]}></Span>
            <Span className={css["traffic-background"]}></Span>
            <Span className={css["traffic-background"]}></Span>
          </View>
        </View>
      );
    case "LIGHTS/BORDER":
      return (
        <View className={`${className} ${css.container}`} {...rest}>
          <View className={css.lights}>
            <Span className={css["traffic-border"]}></Span>
            <Span className={css["traffic-border"]}></Span>
            <Span className={css["traffic-border"]}></Span>
          </View>
        </View>
      );
    default:
      return null;
  }
};

export default React.memo(CodeHeaders);
