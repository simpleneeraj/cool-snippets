import React from "react";
import OptionsWraper from "../wraper";
import Select from "element/select";
import useBackground from "store/hooks/usebackground";

const LayoutOptions = () => {
  const { setRatio, setPadding, padding } = useBackground();
  return (
    <React.Fragment>
      <OptionsWraper title="Padding">
        <Select
          defaultValue={padding}
          onChange={(value) => setPadding(value)}
          children={array.padding}
        />
      </OptionsWraper>
      <OptionsWraper title={"Aspect Ratio"}>
        <Select
          defaultValue="1:1"
          onChange={(value) => setRatio(value)}
          children={array.aspectRatio}
        />
      </OptionsWraper>
    </React.Fragment>
  );
};
export default LayoutOptions;

const aspectRatio = [
  {
    name: "Instagram Landscape",
    ratio: "1.91:1",
  },
  {
    name: "Instagram Square",
    ratio: "1:1",
  },
  {
    name: "Instagram Portrait",
    ratio: "4:5",
  },
  {
    name: "Instagram Reels",
    ratio: "9:16",
  },
  {
    name: "Twitter Header",
    ratio: "3:1",
  },
  {
    name: "Landcape",
    ratio: "16:9",
  },
];
const array = {
  aspectRatio: aspectRatio.map((str) => {
    return {
      text: str.ratio,
      value: str.ratio,
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
