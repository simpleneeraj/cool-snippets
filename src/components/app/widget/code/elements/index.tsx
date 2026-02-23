'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ELEMENTS } from '@/typings/enums';
import UIView from '@/app-kit/source/UIView';
import { ElementType } from '@/typings/editor';
import { Extension } from '@uiw/react-codemirror';
import useSlideEditor from '@/store/hooks/use-editor';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { useActiveElement } from '@/store/slides/current-element';
import { dynamicTheme, dynamicLanguage } from '@/plugins/codemirror/utils';

// SCREENS
const IconElement = dynamic(() => import('./icon'), {
  ssr: false,
});
const TextElement = dynamic(() => import('./text'), {
  ssr: false,
});
const CodeElement = dynamic(() => import('./code'), {
  ssr: false,
});

type Props = {
  item: ElementType;
  constraintsRef?: React.RefObject<HTMLDivElement | null>;
};

const EditorComponents: React.FC<Props> = ({ item, constraintsRef }) => {
  const { element, updateElement } = useActiveElement();
  const { onChangeSlideElement } = useSlideEditor();

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    updateElement(item.id!);
  };

  switch (item.type) {
    case ELEMENTS.CODE:
      return (
        <UIView
          id={`element-${item.id}`}
          style={{
            ...item.style,
            zIndex: element === item.id ? 999 : item.style?.zIndex || 1,
          }}
          onPointerDown={onPointerDown}
        >
          <CodeElement
            value={item.content}
            header={item?.header || null}
            onChange={(content) => onChangeSlideElement({ content })}
            theme={dynamicTheme(
              item?.properties?.theme,
              item?.properties?.glassmorphism?.enabled
                ? item?.properties?.glassmorphism?.opacity
                : 1,
            )}
            extensions={[
              dynamicLanguage(
                item?.properties?.language as LanguagesEnum,
              ) as Extension,
            ]}
          />
        </UIView>
      );
    case ELEMENTS.IMAGE:
    case ELEMENTS.ICON:
      return (
        <UIView
          id={`element-${item.id}`}
          style={{
            ...item.style,
            zIndex: element === item.id ? 999 : item.style?.zIndex || 1,
          }}
          onPointerDown={onPointerDown}
        >
          <IconElement style={item.style} {...item.properties} />
        </UIView>
      );
    case ELEMENTS.TEXT:
      return (
        <UIView
          id={`element-${item.id}`}
          style={{
            ...item.style,
            height: 'auto',
            zIndex: element === item.id ? 999 : item.style?.zIndex || 1,
          }}
          onPointerDown={onPointerDown}
        >
          <TextElement
            content={item.content}
            onChange={(content) => onChangeSlideElement({ content })}
          />
        </UIView>
      );

    default:
      return null;
  }
};

export default EditorComponents;
