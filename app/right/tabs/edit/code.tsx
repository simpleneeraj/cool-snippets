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

const CodeOptions = () => {
  // FOR CODE

  const {
    mode,
    theme,
    lineNumbers,
    onSelectTheme,
    onSelectMode,
    autoCompletion,
    draggable,
    translucent,
    draggableHandler,
    linenumberHandler,
    autoCompletionHandler,
  } = usePreference();
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

      <ToolsList title="Draggable">
        <Switch
          active={draggable}
          onClick={() => draggableHandler(!draggable)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />

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
    </ToolsWraper>
  );
};
export default CodeOptions;
