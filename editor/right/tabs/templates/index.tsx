import React from "react";
import HRLine from "ui/line";
import Switch from "ui/switch";
import Slider from "ui/range";
import Select from "ui/select";
import ColorPicker from "ui/picker";
import css from "styles/app.module.scss";
import useCode from "store/hooks/use-code";
import ToolsWraper from "editor/right/wraper";
import ToolsList from "editor/right/wraper/list";

const TemplateEditing = () => {
  // FOR TEXT

  const {
    codeState: { codeHead },
    updateCodeHead,
  } = useCode();

  return (
    <React.Fragment>
      <ToolsWraper labelleft="BASIC" labelright="Reset">
        <ToolsList title="Header Style">
          <Select
            options={[
              {
                text: "ios-header",
                value: "Ios",
              },
            ]}
            defaultValue={"ios-header"}
            onChange={(e) => console.log("aspect-ratio", e.target.value)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />

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
        <ToolsList title="Shadow">
          <Slider
            min={0}
            max={50}
            step={1}
            value={codeHead.shodow}
            onChange={({ target }) => updateCodeHead("shodow", target.value)}
          />
        </ToolsList>
      </ToolsWraper>
      <ToolsWraper labelleft="POLISH" labelright="Reset">
        <ToolsList title="Background">
          <ColorPicker
            color={codeHead.background}
            onChange={(v) => updateCodeHead("background", v)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
        <ToolsList title="Input Field">
          <Switch
            active={codeHead.input}
            onClick={() => updateCodeHead("input", !codeHead.input)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
        <ToolsList title="File Icon">
          <Switch
            active={codeHead.icon}
            onClick={() => updateCodeHead("icon", !codeHead.icon)}
          />
        </ToolsList>
        <HRLine className={css.horizontal} />
      </ToolsWraper>
    </React.Fragment>
  );
};
export default React.memo(TemplateEditing);

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
