import ToolsWraper from "editor/right/wraper";
import ToolsList from "editor/right/wraper/list";
import React from "react";
import HRLine from "ui/line";
import css from "styles/app.module.scss";
import Switch from "ui/switch";
import useCode from "store/hooks/use-code";
import ColorPicker from "ui/picker";

const TemplateEditing = () => {
  // FOR TEXT

  const {
    codeState: { codeHead },
    updateCodeHead,
  } = useCode();
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

  return (
    <ToolsWraper labelleft="TEMPLATE" labelright="Reset">
      <ToolsList title="Input Field">
        <Switch active={true} onClick={() => console.log("Hello")} />
      </ToolsList>
      <ToolsList title="Input Field">
        <ColorPicker
          color={codeHead.background}
          onChange={(v) => updateCodeHead("background", v)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="File Icon">
        <Switch active={true} onClick={() => console.log("Hello")} />
      </ToolsList>
      <HRLine className={css.horizontal} />
    </ToolsWraper>
  );
};
export default React.memo(TemplateEditing);
