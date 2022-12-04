import React from "react";
import HRLine from "ui/line";
import Select from "ui/select";
import Switch from "ui/switch";
import ToolsWraper from "editor/wraper";
import css from "styles/app.module.scss";
import InputNumber from "ui/input/number";
import useCode from "store/hooks/use-code";
import ToolsList from "editor/wraper/list";

const CanvasOptions = () => {
  const {
    updateCanvas,
    codeState: { canvas },
  } = useCode();

  const heightHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (Number(value) <= 1024) {
        updateCanvas("height", e.target.value);
      }
    },
    [updateCanvas]
  );
  const widthHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (Number(value) <= 800) {
        updateCanvas("width", e.target.value);
      }
    },
    [updateCanvas]
  );

  return (
    <ToolsWraper labelleft="CANVAS" labelright="Reset">
      <ToolsList title="Watermark" locked>
        <Switch
          active={canvas.watermark}
          onClick={() => updateCanvas("watermark", !canvas.watermark)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Height (px)">
        <InputNumber
          // label={"PX"}
          value={canvas["height"]}
          onChange={heightHandler}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />

      <ToolsList title="Width (px)">
        <InputNumber
          // label={"PX"}
          value={canvas["width"]}
          onChange={widthHandler}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />

      <ToolsList title="Aspect Ratio">
        <Select
          options={array.aspectRatio}
          defaultValue={canvas["aspect-ratio"]}
          onChange={(e) => updateCanvas("aspect-ratio", e.target.value)}
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
