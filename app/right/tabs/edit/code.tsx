import React from "react";
import HRLine from "ui/line";
import Select from "ui/select";
import Switch from "ui/switch";
import css from "styles/app.module.scss";
import ToolsWraper from "app/right/wraper";
import toCapitalize from "lib/toCapitalize";
import ToolsList from "app/right/wraper/list";
import { themesList } from "lib/codemirror-themes";
import { languageList } from "lib/codemirror-langs";
import usePreference from "store/hooks/usepreference";
import Slider from "ui/range";
import usePost from "store/hooks/usepost";
import useBackground from "store/hooks/usebackground";
import ColorPicker from "ui/picker";

const CodeOptions = () => {
  // FOR CODE
  const {
    mode,
    theme,
    editable,
    lineNumbers,
    translucent,
    onSelectMode,
    draggable,
    autoCompletion,
    onSelectTheme,
    draggableHandler,
    editableHandler,
    linenumberHandler,
    translucentHandler,
    autoCompletionHandler,
  } = usePreference();
  const { setPadding, padding } = useBackground();
  const {
    alpha,
    blurRadius,
    cornerRadius,
    alphaHandler,
    blurRadiusHandler,
    cornerRadiusHandler,
  } = usePost();

  return (
    <ToolsWraper labelleft="CODE" labelright="Reset">
      <ToolsList title="Line Numbers">
        <Switch
          active={lineNumbers}
          onClick={() => linenumberHandler(!lineNumbers)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Auto Completion">
        <Switch
          active={autoCompletion}
          onClick={() => autoCompletionHandler(!autoCompletion)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Draggable">
        <Switch
          active={draggable}
          onClick={() => draggableHandler(!draggable)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Editable">
        <Switch active={editable} onClick={() => editableHandler(!editable)} />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Translucent">
        <Switch
          active={translucent}
          onClick={() => translucentHandler(!translucent)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
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
      <ToolsList title="Alpha">
        <Slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={alpha}
          disabled={!translucent}
          onChange={(e) => alphaHandler(e.target.value)}
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
      <ToolsList title="Language">
        <Select
          defaultValue={mode}
          onSelect={(value) => onSelectMode(value)}
          options={languageList
            .sort((a, b) => a.localeCompare(b))
            .map((name) => {
              return {
                text: toCapitalize(name),
                value: name,
              };
            })}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Theme">
        <Select
          defaultValue={theme}
          onSelect={(value) => onSelectTheme(value)}
          options={themesList.map((name) => {
            return {
              text: toCapitalize(name),
              value: name,
            };
          })}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Background">
        <ColorPicker />
      </ToolsList>
    </ToolsWraper>
  );
};
export default CodeOptions;
