'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ELEMENTS } from '@/typings/enums';
import { ElementType } from '@/typings/editor';
import { Extension } from '@uiw/react-codemirror';
import useSlideEditor from '@/store/hooks/use-editor';
import { useActiveElement } from '@/store/slides/current-element';
import { dynamicTheme, dynamicLanguage } from '@/plugins/codemirror/utils';

// SCREENS
const ElementView = dynamic(() => import('./view'));
const IconElement = dynamic(() => import('./icon'));
const TextElement = dynamic(() => import('./text'));
const CodeElement = dynamic(() => import('./code'));

type Props = {
  item: ElementType;
};

const EditorComponents: React.FC<Props> = ({ item }) => {
  const { updateElement } = useActiveElement();
  const { currentSlide, onChangeSlideElement } = useSlideEditor();

  switch (item.type) {
    case ELEMENTS.CODE:
      return (
        <ElementView
          style={item.style}
          onHoverStart={() => updateElement(item.id!)}
        >
          <CodeElement
            header={currentSlide?.header || null}
            value={item.content}
            onChange={(content) => onChangeSlideElement({ content })}
            theme={dynamicTheme(
              item?.properties?.theme,
              item?.properties?.glassmorphism?.enabled
                ? item?.properties?.glassmorphism?.opacity
                : 1
            )}
            extensions={[
              dynamicLanguage(item?.properties?.language!) as Extension,
            ]}
          />
        </ElementView>
      );

    case ELEMENTS.TEXT:
      return (
        <ElementView
          drag
          style={item.style}
          //   dragConstraints={dragConstraintsRef}
          onHoverStart={() => updateElement(item.id!)}
        >
          <TextElement
            contentEditable
            style={{ ...item.style, ...item.properties }}
          >
            {item.content}
          </TextElement>
        </ElementView>
      );

    case ELEMENTS.ICON:
      return (
        <ElementView
          drag
          style={item.style}
          //   dragConstraints={dragConstraintsRef}
          onHoverStart={() => updateElement(item.id!)}
        >
          <IconElement />
        </ElementView>
      );
    default:
      return null;
  }
};

export default EditorComponents;
