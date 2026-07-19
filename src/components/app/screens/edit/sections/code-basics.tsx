'use client';

import React from 'react';
import capitalize from 'lodash/capitalize';
import UIView from '@shared/uikit/UIView';
import themes from '@vendor/codemirror/themes';
import useSlideEditor from '@/store/hooks/use-editor';
import { languagesArray } from '@vendor/codemirror/languages';
import { Field, FieldLabel } from '@shared/ui/field';
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@shared/ui/combobox';

type Language = (typeof languagesArray)[number];

const CodeBasicsSection = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const selectedLanguage = languagesArray.find(
    (item) => item.value === currentElement?.properties?.language,
  );

  return (
    <UIView className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Programming language</FieldLabel>
        <Combobox<Language>
          items={languagesArray}
          value={selectedLanguage ?? null}
          // Items are objects, so the input needs to be told which field to
          // display — without this the trigger renders "[object Object]".
          itemToStringLabel={(item) => item?.name ?? ''}
          onValueChange={(item) =>
            onChangeSlideElement({ properties: { language: item?.value } })
          }
        >
          <ComboboxInput
            aria-label="Select language"
            placeholder="Select a language"
          />
          <ComboboxPopup>
            <ComboboxEmpty>No languages found.</ComboboxEmpty>
            <ComboboxList>
              {(lang: Language) => (
                <ComboboxItem key={lang.value} value={lang}>
                  <span className="flex items-center gap-2">
                    <img alt={lang?.name} src={lang?.icon} className="h-5 w-5" />
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
        <Combobox<string>
          items={Object.keys(themes)}
          value={currentElement?.properties?.theme ?? null}
          itemToStringLabel={(theme) => capitalize(theme ?? '')}
          onValueChange={(theme) =>
            onChangeSlideElement({ properties: { theme: theme! } })
          }
        >
          <ComboboxInput aria-label="Choose theme" placeholder="Choose a theme" />
          <ComboboxPopup>
            <ComboboxEmpty>No themes found.</ComboboxEmpty>
            <ComboboxList>
              {(value: string) => (
                <ComboboxItem key={value} value={value}>
                  {capitalize(value)}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </Combobox>
      </Field>
    </UIView>
  );
};

export default CodeBasicsSection;
