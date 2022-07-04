import React from "react";
import OptionsWraper from "../wraper";
import Select from "element/select";
import Toggle from "element/toggle";
import useBackground from "store/hooks/usebackground";
import RangeSlider from "element/range";

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

/**
 * Landscape: 1080 x 566 pixels
Portrait: 1080 x 1350 pixels
Square: 1080 x 1080 pixels
Aspect ratio: landscape (1.91:1), square (1:1), vertical (4:5)
Square
Portrait
Vertical
Landscape
 */
const aspectRatioArray = [
  {
    name: "Instagram ",
    ratio: "1:1",
  },
  {
    name: "Instagram ",
    ratio: "4:5",
  },
  {
    name: "Instagram ",
    ratio: "9:16",
  },
  {
    name: "Instagram ",
    ratio: "1.91:1",
  },
  {
    name: "Landscape",
    ratio: "16:9",
  },
  {
    name: "Twitter",
    ratio: "2:1",
  },
  {
    name: "Twitter",
    ratio: "3:1",
  },
  {
    name: "Twitter",
    ratio: "3:4",
  },
  {
    name: "Twitter",
    ratio: "16:9",
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
