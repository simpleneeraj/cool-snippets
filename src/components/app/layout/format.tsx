'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { addToast } from '@heroui/react';
import useHotkeys from '@/app-kit/hooks/use-hotkeys';
import useSlideEditor from '@/store/hooks/use-editor';
import { headerIcon } from '@/components/style/header';
import UIButton from '@/app-kit/source/UIButton/button';
import formatCode, { formatterSupportedLanguages } from '@/utils/formatCode';

const FormatCode: React.FC = () => {
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
    <UIButton
      size="sm"
      variant="flat"
      radius="sm"
      onPress={onFormatCode}
      startContent={
        <Icon
          icon="solar:code-line-duotone"
          className={headerIcon({ sizes: 'md' })}
        />
      }
    >
      Format Code
    </UIButton>
  );
};

export default FormatCode;
