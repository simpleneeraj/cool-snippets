import React from 'react';
import HRLine from '@/ui/line';
import fonts from '@/lib/fonts';
import Select from '@/ui/select';
import css from '@/styles/app.module.scss';
import useCode from '@/store/hooks/use-code';
import ToolsWraper from '@/editor/wraper';
import StepperButton from '@/ui/button/stepper';
import ToolsList from '@/editor/wraper/list';

const TextOptions = () => {
  const {
    updateText,
    codeState: { text },
  } = useCode();
  return (
    <ToolsWraper labelleft="TEXT" labelright="Reset">
      <ToolsList title="Font Weight">
        <Select
          options={fontWeights}
          defaultValue={text['font-weight']}
          onSelect={(v) => updateText('font-weight', v)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Font Size">
        <Select
          options={fontSizes}
          defaultValue={text['font-size']}
          onSelect={(v) => updateText('font-size', v)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />

      <ToolsList title="Line Height">
        <StepperButton
          min={0}
          max={2}
          step={0.1}
          defaultValue={text['line-height']}
          onStepper={(value) => updateText('line-height', value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Letter Spacing">
        <StepperButton
          min={0}
          max={5}
          step={0.1}
          defaultValue={text['letter-spacing']}
          onStepper={(value) => updateText('letter-spacing', value)}
        />
      </ToolsList>
      <HRLine className={css.horizontal} />
      <ToolsList title="Typeface">
        <Select
          options={fontFaces}
          defaultValue={text['font-face']}
          onSelect={(v) => updateText('font-face', v)}
        />
      </ToolsList>
    </ToolsWraper>
  );
};
export default TextOptions;

const fontFaces = fonts
  .sort((a, b) => a.name.localeCompare(b.name, 'en'))
  .map((data) => {
    return {
      text: data.name,
      get value() {
        return this.text;
      },
    };
  });

const fontWeights = Array.from(Array(9).keys()).map((_, i) => {
  return {
    text: (i + 1) * 100,
    value: (i + 1) * 100,
  };
});
const fontSizes = Array.from(Array(21).keys()).map((_, i) => {
  const value = i + 10;
  return {
    text: `${value}px`,
    value: value,
  };
});
