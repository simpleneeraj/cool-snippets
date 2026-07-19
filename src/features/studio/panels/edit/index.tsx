'use client';

import React from 'react';
import UIView from '@shared/uikit/UIView';
import { ELEMENTS } from '@features/studio/model/enums';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@shared/ui/accordion';
import CodeBasicsSection from './sections/code-basics';
import TypographySection from './sections/typography';
import AppearanceSection from './sections/appearance';
import EffectsSection from './sections/effects';
import EditorOptionsSection from './sections/editor-options';
import TextSection from './sections/text';
import ImageSection from './sections/image';
import QrCodeSection from './sections/qr-code';
import UserInfoSection from './sections/user-info';
import WatermarkSection from './sections/watermark';
import { EDIT_SECTION_LABELS, EditSection } from './sections/values';

const SECTION_COMPONENTS: Record<EditSection, React.ComponentType> = {
  [EditSection.CODE_BASICS]: CodeBasicsSection,
  [EditSection.TYPOGRAPHY]: TypographySection,
  [EditSection.APPEARANCE]: AppearanceSection,
  [EditSection.EFFECTS]: EffectsSection,
  [EditSection.EDITOR_OPTIONS]: EditorOptionsSection,
  [EditSection.TEXT]: TextSection,
  [EditSection.IMAGE]: ImageSection,
  [EditSection.QR_CODE]: QrCodeSection,
  [EditSection.USER_INFO]: UserInfoSection,
  [EditSection.WATERMARK]: WatermarkSection,
};

/** Which panels an element type gets, in display order. */
const SECTIONS_BY_ELEMENT: Record<ELEMENTS, EditSection[]> = {
  [ELEMENTS.CODE]: [
    EditSection.CODE_BASICS,
    EditSection.TYPOGRAPHY,
    EditSection.APPEARANCE,
    EditSection.EFFECTS,
    EditSection.EDITOR_OPTIONS,
  ],
  [ELEMENTS.TEXT]: [EditSection.TEXT],
  [ELEMENTS.IMAGE]: [EditSection.IMAGE],
  [ELEMENTS.ICON]: [EditSection.IMAGE],
  [ELEMENTS.QRCODE]: [EditSection.QR_CODE],
  [ELEMENTS.USERINFO]: [EditSection.USER_INFO],
  [ELEMENTS.WATERMARK]: [EditSection.WATERMARK],
};

const EditingScreens = () => {
  const { currentElement } = useSlideEditor();

  const sections = currentElement?.type
    ? SECTIONS_BY_ELEMENT[currentElement.type]
    : undefined;

  if (!sections?.length) {
    return (
      <UIView className="flex flex-1 flex-col items-center justify-center gap-1 p-8 text-center">
        <p className="text-sm font-medium">Nothing selected</p>
        <p className="text-xs text-muted-foreground">
          Pick an element on the canvas to edit its properties.
        </p>
      </UIView>
    );
  }

  return (
    // Keyed by type so switching element kinds remounts the accordion and the
    // first section for that kind opens — `defaultValue` is uncontrolled.
    <Accordion
      key={currentElement?.type}
      className="w-full p-2"
      defaultValue={[sections[0]]}
      multiple
    >
      {sections.map((id) => {
        const Section = SECTION_COMPONENTS[id];
        return (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger>{EDIT_SECTION_LABELS[id]}</AccordionTrigger>
            <AccordionPanel>
              <UIView className="px-1 pt-1 pb-3">
                <Section />
              </UIView>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default EditingScreens;
