import Add from "lib/icons/Add";
import React from "react";
import useCodeHead from "store/hooks/use-code-head";
import useBackground from "store/hooks/usebackground";
import css from "styles/templates.module.scss";
import backgroundFilter from "utils/background-filter";
import { TrafficLightsBackground, TrafficLightsBorder } from "./mock-head";

const Templates = () => {
  const { source } = useBackground();
  const background = backgroundFilter(source);

  const { setHeaderType, headerType } = useCodeHead();
  return (
    <React.Fragment>
      <div className={css.templates}>
        {templates.map(({ value, codeHeader }, i) => (
          <TempMockup
            key={i}
            active={headerType === value}
            onChoose={() => setHeaderType(value)}
            CodeHeader={codeHeader}
          />
        ))}
        <CustomMockup onChoose={() => alert("Ruko Jara")} />
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

interface TempMockupProps {
  active?: boolean;
  onChoose?: () => void;
  CodeHeader?: React.ReactNode;
}

const TempMockup = ({ active, onChoose, CodeHeader }: TempMockupProps) => {
  return (
    <div
      className={`template-background ${css["background"]}`}
      onClick={onChoose}
      style={{
        border: `2px solid ${active ? "var(--White)" : "transparent"}`,
      }}
    >
      <div className={css["temp-box"]}>
        {CodeHeader}
        <div className={css["content"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
const CustomMockup = ({ active, onChoose }: TempMockupProps) => {
  return (
    <div
      className={`template-background ${css["background"]}`}
      onClick={onChoose}
      style={{
        border: `2px solid ${active ? "var(--White)" : "transparent"}`,
      }}
    >
      <div className={css["custom-box"]}>
        <Add size={35} />
        <p className={css["custom-text"]}>Custom Header</p>
      </div>
    </div>
  );
};

const templates = [
  {
    name: "ios Traffic Light",
    value: "LIGHTS/BACKGROUND",
    codeHeader: <TrafficLightsBackground />,
  },
  {
    name: "ios Traffic Light with Border",
    value: "LIGHTS/BORDER",
    codeHeader: <TrafficLightsBorder />,
  },
  {
    name: "ios Traffic Light with Border",
    value: "LIGHTS/BORDER",
    codeHeader: <TrafficLightsBorder />,
  },
  {
    name: "ios Traffic Light with Border",
    value: "LIGHTS/BORDER",
    codeHeader: <TrafficLightsBorder />,
  },
  {
    name: "ios Traffic Light with Border",
    value: "LIGHTS/BORDER",
    codeHeader: <TrafficLightsBorder />,
  },
];
