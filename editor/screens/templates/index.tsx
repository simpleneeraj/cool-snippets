import React from "react";
import HRLine from "ui/line";
import Slider from "ui/range";
import Select from "ui/select";
import ColorPicker from "ui/picker";
import css from "styles/app.module.scss";
import useCode from "store/hooks/use-code";
import ToolsWraper from "editor/wraper";
import ToolsList from "editor/wraper/list";
import templatesData from "constants/data-templates";

const TemplateEditing = () => {
  // FOR TEXT

  const {
    codeState: { codeHead },
    updateCodeHead,
  } = useCode();

  const ios = codeHead.type.includes(templatesData.ios);
  console.log({ ios });
  return (
    <React.Fragment>
      <ToolsWraper labelleft="BASIC" labelright="Reset">
        <ToolsList title="Type">
          <Select
            options={arrays["input"]}
            defaultValue={codeHead["input"]}
            onChange={(e) => updateCodeHead("input", e.target.value)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
        <ToolsList title="Position">
          <Select
            options={arrays["position"]}
            defaultValue={codeHead["position"]}
            onChange={(e) => updateCodeHead("input-position", e.target.value)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
        {ios && (
          <React.Fragment>
            <ToolsList title="Circle Type">
              <Select
                options={arrays["circle-type"]}
                defaultValue={codeHead["circle-type"]}
                onChange={(e) => updateCodeHead("circle-type", e.target.value)}
              />
            </ToolsList>
            <HRLine className={css.horizontal} />
          </React.Fragment>
        )}
        <ToolsWraper labelleft="COLORS" labelright="Reset">
          {codeHead.colors.map((data, index) => (
            <React.Fragment key={index}>
              <ToolsList title={data.name}>
                <ColorPicker
                  color={data.hex}
                  onChange={(v) => console.log("background", v)}
                />
              </ToolsList>
              <HRLine className={css.horizontal} />
            </React.Fragment>
          ))}
          <HRLine className={css.horizontal} />
        </ToolsWraper>

        <ToolsList title="Background">
          <ColorPicker
            color={codeHead.background}
            onChange={(v) => updateCodeHead("background", v)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
        <ToolsList title="Shadow">
          <Slider
            min={0}
            max={50}
            step={1}
            value={codeHead.shodow}
            onChange={({ target }) => updateCodeHead("shodow", target.value)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
      </ToolsWraper>
    </React.Fragment>
  );
};
export default React.memo(TemplateEditing);

const arrays = {
  input: [
    {
      text: "Nothing",
      value: "nothing",
    },
    {
      text: "Icon Only",
      value: "icon",
    },
    {
      text: "Input Only",
      value: "input",
    },
    {
      text: "Icon + Input",
      value: "icon+input",
    },
  ],
  position: [
    {
      text: "Nothing",
      value: "nothing",
    },
    {
      text: "Left",
      value: "left",
    },
    {
      text: "Center",
      value: "center",
    },
    {
      text: "Right",
      value: "right",
    },
  ],
  "circle-type": [
    {
      text: "Filled",
      value: "filled",
    },
    {
      text: "Outline",
      value: "outline",
    },
  ],
};

// const [colors, setColors] = React.useState([]);
// React.useEffect(() => {
//   prominent("http://localhost:3000/images/glow-wallpaper.jpg", {
//     amount: 10,
//     format: "hex",
//     sample: 4,
//   }).then((colors: any) => {
//     console.log(colors);
//     setColors(colors);
//   });
// }, []);

{
  /* <ToolsList title="Header Style">
          <Select
            options={[
              {
                text: "ios-header",
                value: "Ios",
              },
            ]}
            defaultValue={codeHead.type}
            onChange={(e) => console.log("aspect-ratio", e.target.value)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} /> */
}
{
  /* <ToolsList title="Input Field">
          <Switch
            active={codeHead.input}
            onClick={() => updateCodeHead("input", !codeHead.input)}
          />
        </ToolsList> */
}
{
  /* <HRLine className={css.horizontal} /> */
}
{
  /* <ToolsList title="File Icon">
          <Switch
            active={codeHead.icon}
            onClick={() => updateCodeHead("icon", !codeHead.icon)}
          />
        </ToolsList> */
}
{
  /* <HRLine className={css.horizontal} /> */
}

{
  /* <ToolsWraper labelleft="POLISH" labelright="Reset"></ToolsWraper> */
}
