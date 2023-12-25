import React from 'react';
import HRLine from '@/ui/line';
import Slider from '@/ui/range';
import Select from '@/ui/select';
import Switch from '@/ui/switch';
import ColorPicker from '@/ui/picker';
import css from '@/styles/app.module.scss';
import useCode from '@/store/hooks/use-code';
import toCapitalize from '@/lib/toCapitalize';
import ToolsWraper from '@/editor/wraper';
import ToolsList from '@/editor/wraper/list';
import { themesList } from '@/lib/codemirror-themes';
import { languageList } from '@/lib/codemirror-langs';

const CodeOptions = () => {
  const {
    updateCode,
    codeState: { code },
  } = useCode();

  return (
    <ToolsWraper labelleft="CODE" labelright="Reset">
      <ToolsList title="Background">
        <ColorPicker
          color={code['background']}
          onChange={(color) => updateCode('background', color)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Line Numbers">
        <Switch
          active={code['line-numbers']}
          onClick={() => updateCode('line-numbers', !code['line-numbers'])}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Auto Completion">
        <Switch
          active={code['auto-completion']}
          onClick={() =>
            updateCode('auto-completion', !code['auto-completion'])
          }
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Draggable">
        <Switch
          active={code.draggable}
          onClick={() => updateCode('draggable', !code.draggable)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Editable">
        <Switch
          active={code.editable}
          onClick={() => updateCode('editable', !code.editable)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Translucent">
        <Switch
          active={code.translucent}
          onClick={() => updateCode('translucent', !code.translucent)}
        />
      </ToolsList>{' '}
      <HRLine className={css.horizontal} />
      <ToolsList title="Language">
        <Select
          defaultValue={code.mode}
          onSelect={(value) => updateCode('mode', value)}
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
          defaultValue={code.theme}
          onSelect={(value) => updateCode('theme', value)}
          options={themesList.map((name) => {
            return {
              text: toCapitalize(name),
              value: name,
            };
          })}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Padding">
        <Slider
          min={2}
          max={80}
          step={1}
          defaultValue={code.padding}
          onChange={(e) => updateCode('padding', e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Rounded">
        <Slider
          min={0}
          max={30}
          step={1}
          defaultValue={code['corner-radius']}
          onChange={(e) => updateCode('corner-radius', e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Alpha">
        <Slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={code.alpha}
          disabled={!code.translucent}
          onChange={(e) => updateCode('alpha', e.target.value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Glass Blur ">
        <Slider
          min={0}
          max={30}
          step={1}
          defaultValue={code['blur-radius']}
          onChange={(e) => updateCode('blur-radius', e.target.value)}
          disabled={!code.translucent}
        />
      </ToolsList>
    </ToolsWraper>
  );
};
export default CodeOptions;

// import usePost from "store/hooks/usepost";
// import usePreference from "store/hooks/usepreference";
