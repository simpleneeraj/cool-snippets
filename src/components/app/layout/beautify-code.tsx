'use client';

import React from 'react';
import { toastManager } from '@/app-kit/ui/toast';
import useHotkeys from '@/app-kit/hooks/use-hotkeys';
import useSlideEditor from '@/store/hooks/use-editor';
import formatCode, { formatterSupportedLanguages } from '@/utils/formatCode';
import { SolarMagicStick3Linear } from '@/app-kit/icons/SolarMagicStick3Linear';
import { Button } from '@/app-kit/ui/button';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@/app-kit/ui/tooltip';

const BeautifyCode: React.FC = () => {
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const onFormatCode = async () => {
    if (!currentElement?.properties?.language) {
      return toastManager.add({
        title: 'Formatting Error',
        description: 'No language selected for formatting.',
        type: 'error',
      });
    }

    const language = currentElement.properties.language;
    const isSupportedLanguage = formatterSupportedLanguages.includes(language);

    if (!isSupportedLanguage) {
      return toastManager.add({
        title: 'Unsupported Language',
        description: `Formatting is not supported for ${language}.`,
        type: 'error',
      });
    }

    if (!currentElement?.content) {
      return toastManager.add({
        title: 'No Code Found',
        description: 'No code available to format.',
        type: 'error',
      });
    }

    const formattedContent = await formatCode(currentElement.content, language);

    onChangeSlideElement({ content: formattedContent });

    toastManager.add({
      title: 'Success',
      description: 'Code formatted successfully!',
      type: 'success',
    });
  };

  useHotkeys('shift+option+f', (event) => {
    event.preventDefault();
    onFormatCode();
  });

  return (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="outline" onClick={onFormatCode} />}
      >
        <SolarMagicStick3Linear aria-hidden="true" />
      </TooltipTrigger>
      <TooltipPopup>Beautify Code (⌘⇧B)</TooltipPopup>
    </Tooltip>
  );
};

export default BeautifyCode;
