import UIView from '@/app-kit/source/UIView';
import capitalize from 'lodash/capitalize';
import themes from '@/plugins/codemirror/themes';
import fontsNames from '@/json/fonts.json';
import useSlideEditor from '@/store/hooks/use-editor';
import Glassmorphism from '../elements/glassmorphism';
import NeonText from '../elements/neon';
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@/app-kit/ui/combobox';
import { languagesArray } from '@/plugins/codemirror/languages';
import { Field, FieldLabel } from '@/app-kit/ui/field';
import { Separator } from '@/app-kit/ui/separator';
import { Slider, SliderValue } from '@/app-kit/ui/slider';
import { Label } from '@/app-kit/ui/label';
import { Checkbox } from '@/app-kit/ui/checkbox';

const CodeScreen = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const selectedLanguage = resolveSelected(
    languagesArray,
    currentElement?.properties?.language,
  );

  const selectedFont = resolveSelected(
    fontsNames,
    currentElement?.style?.fontFamily,
  );

  return (
    <UIView className="layout-scroll gap-6">
      {/* ───────────────── Basics ───────────────── */}
      <UIView className="flex flex-col gap-4">
        <p className="text-sm font-medium text-muted-foreground">Code basics</p>

        <Field>
          <FieldLabel>Programming language</FieldLabel>
          <Combobox
            items={languagesArray}
            value={selectedLanguage}
            onValueChange={(item: any) =>
              onChangeSlideElement({
                properties: { language: item?.value },
              })
            }
          >
            <ComboboxInput
              aria-label="Select language"
              placeholder="Select a language"
            />
            <ComboboxPopup>
              <ComboboxEmpty>No languages found.</ComboboxEmpty>
              <ComboboxList>
                {(lang) => (
                  <ComboboxItem key={lang} value={lang}>
                    <span className="flex items-center gap-2">
                      <img
                        alt={lang?.name}
                        src={lang?.icon}
                        className="h-5 w-5"
                      />
                      <span className="truncate">{lang?.name}</span>
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </Combobox>
        </Field>

        <Field>
          <FieldLabel>Code theme</FieldLabel>
          <Combobox
            items={Object.keys(themes)}
            value={currentElement?.properties?.theme}
            onValueChange={(theme) =>
              onChangeSlideElement({
                properties: { theme: theme! },
              })
            }
          >
            <ComboboxInput
              aria-label="Choose theme"
              placeholder="Choose a theme"
            />
            <ComboboxPopup>
              <ComboboxEmpty>No themes found.</ComboboxEmpty>
              <ComboboxList>
                {(value) => (
                  <ComboboxItem key={value} value={value}>
                    {capitalize(value)}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </Combobox>
        </Field>
      </UIView>

      <Separator />

      {/* ─────────────── Appearance ─────────────── */}
      <UIView className="flex flex-col gap-4">
        <p className="text-sm font-medium text-muted-foreground">Appearance</p>

        <Field>
          <Slider
            min={0}
            max={32}
            step={1}
            value={Number(currentElement?.style?.borderRadius)}
            onValueChange={(borderRadius) =>
              onChangeSlideElement({
                style: { borderRadius: Number(borderRadius) },
              })
            }
          >
            <div className="mb-2 flex items-center justify-between gap-1">
              <FieldLabel className="font-medium text-sm">
                Corner radius
              </FieldLabel>
              <SliderValue />
            </div>
          </Slider>
        </Field>

        <Field>
          <FieldLabel>Font family</FieldLabel>
          <Combobox
            items={fontsNames}
            value={selectedFont}
            onValueChange={(item: any) =>
              onChangeSlideElement({
                style: { fontFamily: item?.value },
              })
            }
          >
            <ComboboxInput
              aria-label="Choose font"
              placeholder="Choose a font"
            />
            <ComboboxPopup>
              <ComboboxEmpty>No fonts found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.name}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxPopup>
          </Combobox>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Show line numbers
          </Label>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Wrap long lines
          </Label>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Highlight active line
          </Label>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Show matching brackets
          </Label>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Enable syntax highlighting
          </Label>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Show indentation guides
          </Label>
        </Field>

        <Field>
          <Label className="flex items-center gap-2">
            <Checkbox />
            Use monospace font
          </Label>
        </Field>
      </UIView>

      <Separator />

      {/* ───────────────── Effects ───────────────── */}
      <UIView className="flex flex-col gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          Visual effects
        </p>

        <NeonText />
        <Separator />
        <Glassmorphism />
      </UIView>
    </UIView>
  );
};

export default CodeScreen;

const resolveSelected = <T extends { value: any }>(items: T[], value: any) =>
  items.find((i) => i.value === value);
