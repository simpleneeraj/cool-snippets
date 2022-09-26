import React from "react";
import ToolsWraper from "app/right/wraper";
import ToolsList from "app/right/wraper/list";
import HRLine from "ui/line";
import css from "styles/app.module.scss";
import useBackground from "store/hooks/usebackground";
import Select from "ui/select";

{
  /* CANVAS */
}
const CanvasOptions = () => {
  // FOR CANVAS
  const { setRatio, aspectRatio } = useBackground();
  return (
    <ToolsWraper labelleft="CANVAS" labelright="Reset">
      <HRLine className={css.horizontal} />
      <ToolsList title="Aspect Ratio">
        <Select
          options={array.aspectRatio}
          defaultValue={aspectRatio}
          onChange={(e) => setRatio(e.target.value)}
        />
      </ToolsList>
    </ToolsWraper>
  );
};
export default CanvasOptions;

const aspectRatio = [
  {
    name: "Instagram ",
    ratio: "1:1",
  },
  {
    name: "Pinterest",
    ratio: "2:3",
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
    name: "Landscape",
    ratio: "16:9",
  },
  {
    name: "Twitter",
    ratio: "2:1",
  },
  {
    name: "Twitter",
    ratio: "3:4",
  },
];
const array = {
  aspectRatio: aspectRatio.map((data) => {
    return {
      text: `${data.name} (${data.ratio})`,
      value: data.ratio,
    };
  }),
};
