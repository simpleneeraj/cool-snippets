'use client';

import React from 'react';
import { addToast } from '@heroui/react';
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
      return addToast({
        title: 'Formatting Error',
        description: 'No language selected for formatting.',
        radius: 'md',
      });
    }

    const language = currentElement.properties.language;
    const isSupportedLanguage = formatterSupportedLanguages.includes(language);

    if (!isSupportedLanguage) {
      return addToast({
        title: 'Unsupported Language',
        description: `Formatting is not supported for ${language}.`,
        radius: 'md',
      });
    }

    if (!currentElement?.content) {
      return addToast({
        title: 'No Code Found',
        description: 'No code available to format.',
        radius: 'md',
      });
    }

    const formattedContent = await formatCode(currentElement.content, language);

    onChangeSlideElement({ content: formattedContent });

    addToast({
      title: 'Success',
      description: 'Code formatted successfully!',
      radius: 'lg',
      shouldShowTimeoutProgress: true,
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
