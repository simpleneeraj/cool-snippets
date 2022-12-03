import React from "react";
import HRLine from "ui/line";
import Select from "ui/select";
import Switch from "ui/switch";
import css from "styles/app.module.scss";
import useCode from "store/hooks/use-code";
import ToolsWraper from "editor/right/wraper";
import ToolsList from "editor/right/wraper/list";

const CanvasOptions = () => {
  const {
    updateCanvas,
    codeState: { canvas },
  } = useCode();

  return (
    <ToolsWraper labelleft="CANVAS" labelright="Reset">
      <ToolsList title="Aspect Ratio">
        <Select
          options={array.aspectRatio}
          defaultValue={canvas["aspect-ratio"]}
          onChange={(e) => updateCanvas("aspect-ratio", e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Watermark">
        <Switch
          active={canvas.watermark}
          onClick={() => updateCanvas("watermark", !canvas.watermark)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
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
