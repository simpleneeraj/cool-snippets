import React from "react";
import ToolsWraper from "app/right/wraper";
import ToolsList from "app/right/wraper/list";
import HRLine from "ui/line";
import Slider from "ui/range";
import Switch from "ui/switch";
import css from "styles/app.module.scss";
import useBackground from "store/hooks/usebackground";
import usePost from "store/hooks/usepost";
import usePreference from "store/hooks/usepreference";
import Select from "ui/select";

{
  /* CANVAS */
}
const CanvasOptions = () => {
  // FOR CANVAS
  const { setPadding, padding } = useBackground();
  const { translucent, translucentHandler } = usePreference();
  const { alpha, blurRadius, cornerRadius } = usePost();
  const { alphaHandler, blurRadiusHandler, cornerRadiusHandler } = usePost();

  const { setRatio, aspectRatio } = useBackground();
  return (
    <ToolsWraper labelleft="CANVAS" labelright="Reset">
      <ToolsList title="Aspect Ratio">
        <Select
          options={array.aspectRatio}
          defaultValue={aspectRatio}
          onChange={(e) => setRatio(e.target.value)}
        />
      </ToolsList>
      <ToolsList title="Padding">
        <Slider
          min={10}
          max={80}
          step={1}
          defaultValue={padding}
          onChange={(e) => setPadding(e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />

      <ToolsList title="Alpha">
        <Slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={alpha}
          onChange={(e) => alphaHandler(e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Corner Radius">
        <Slider
          min={0}
          max={30}
          step={1}
          defaultValue={cornerRadius}
          onChange={(e) => cornerRadiusHandler(e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />

      <ToolsList title="Blur Radius">
        <Slider
          min={0}
          max={30}
          step={1}
          defaultValue={blurRadius}
          onChange={(e) => blurRadiusHandler(e.target.value)}
          disabled={!translucent}
        />
      </ToolsList>

      <HRLine className={css.horizontal} />
      <ToolsList title="Translucent">
        <Switch
          active={translucent}
          onClick={() => translucentHandler(!translucent)}
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
