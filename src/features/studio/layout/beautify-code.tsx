'use client';

import React from 'react';
import { toastManager } from '@shared/ui/toast';
import useHotkeys from '@shared/hooks/use-hotkeys';
import useSlideEditor from '@features/studio/store/hooks/use-editor';
import formatCode, { formatterSupportedLanguages } from '@features/studio/lib/formatCode';
import { MagicWand3LinearIcon } from '@solar-icons/react';
import { Button } from '@shared/ui/button';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@shared/ui/tooltip';

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
        <MagicWand3LinearIcon aria-hidden="true" />
      </TooltipTrigger>
      <TooltipPopup>Beautify Code (⇧⌥F)</TooltipPopup>
    </Tooltip>
  );
};

export default BeautifyCode;
