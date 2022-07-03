import React from "react";
import OptionsWraper from "../wraper";
import Select from "element/select";
import useBackground from "store/hooks/usebackground";
import RangeSlider from "element/range";
import LogoInstagram from "lib/icons/LogoInstagram";
import LogoTwitter from "lib/icons/LogoTwitter";
import Toggle from "element/toggle";

const CanvasOptions = () => {
  const { setRatio, setPadding, padding, aspectRatio } = useBackground();
  return (
    <React.Fragment>
      <OptionsWraper title={`Acrlic Effect`}>
        <Toggle onChange={(v) => v} defaultValue={false} />
      </OptionsWraper>
      <OptionsWraper title={`Padding ${padding}px`}>
        <RangeSlider
          type="range"
          value={padding}
          max={200}
          min={10}
          step={1}
          onChange={(e) => setPadding(e.target.value)}
        />
      </OptionsWraper>
      <OptionsWraper title={`Aspect Ratio ${aspectRatio}`}>
        <Select
          defaultValue={aspectRatio}
          onChange={(value) => setRatio(value)}
          array={array.aspectRatio}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default CanvasOptions;

const aspectRatioArray = [
  {
    name: "Square",
    ratio: "1:1",
    icon: <LogoInstagram size={14} />,
  },
  {
    name: "Portrait",
    ratio: "4:5",
    icon: <LogoInstagram size={14} />,
  },
  {
    name: "Story",
    ratio: "9:16",
    icon: <LogoInstagram size={14} />,
  },
  {
    name: "Landscape",
    ratio: "16:9",
    icon: <LogoInstagram size={14} />,
  },
  {
    name: "Landscape",
    ratio: "1:1.56",
    icon: <LogoInstagram size={14} />,
  },
  {
    name: "Header",
    ratio: "3:1",
    icon: <LogoTwitter size={14} />,
  },
];
const array = {
  aspectRatio: aspectRatioArray.map((data) => {
    return {
      text: `${data.name} (${data.ratio})`,
      value: data.ratio,
      // icon: data.icon,
    };
  }),
  // @ts-expect-error
  padding: [...Array(10).keys()].map((_, i) => {
    return {
      text: `${(i + 1) * 10}px`,
      get value() {
        return this.text;
      },
    };
  }),
  imageFormat: ["PNG", "JPG", "WEBP"].map((str) => {
    return {
      text: str,
      get value() {
        return this.text;
      },
    };
  }),
};
