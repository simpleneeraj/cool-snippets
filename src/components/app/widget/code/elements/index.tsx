'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ELEMENTS } from '@/typings/enums';
import UIView from '@/app-kit/source/UIView';
import { ElementType } from '@/typings/editor';
import { Extension } from '@uiw/react-codemirror';
import useSlideEditor from '@/store/hooks/use-editor';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import { useActiveElement } from '@/store/slides/current-element';
import { dynamicTheme, dynamicLanguage } from '@/plugins/codemirror/utils';
import { ElementToolbar } from './toolbar';

const IconElement = dynamic(() => import('./icon'), { ssr: false });
const TextElement = dynamic(() => import('./text'), { ssr: false });
const CodeElement = dynamic(() => import('./code'), { ssr: false });

type Props = {
  item: ElementType;
  constraintsRef?: React.RefObject<HTMLDivElement | null>;
};

const EditorComponents: React.FC<Props> = ({ item }) => {
  const { element, updateElement } = useActiveElement();
  const { onChangeSlideElement } = useSlideEditor();

  const isSelected = element === item.id;

  /**
   * anchorRef — points to the element's outermost DOM node.
   * Passed to ElementToolbar so it can measure position via
   * getBoundingClientRect() and portal itself to document.body,
   * escaping any overflow:hidden ancestor.
   */
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    updateElement(item.id!);
  };

  const wrapperStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    ...item.style,
    ...extra,
    position: 'absolute',
    zIndex: isSelected ? 999 : Number(item.style?.zIndex) || 1,
  });

  switch (item.type) {
    case ELEMENTS.CODE:
      return (
        <UIView
          ref={anchorRef}
          id={`element-${item.id}`}
          style={wrapperStyle()}
          onPointerDown={onPointerDown}
        >
          {isSelected && (
            <ElementToolbar
              item={item}
              anchorRef={anchorRef as React.RefObject<HTMLElement | null>}
            />
          )}
          <CodeElement
            value={item.content}
            header={item?.header || null}
            onChange={(content) => onChangeSlideElement({ content })}
            theme={dynamicTheme(
              item?.properties?.theme as ThemesEnum | undefined,
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
          ref={anchorRef}
          id={`element-${item.id}`}
          style={wrapperStyle()}
          onPointerDown={onPointerDown}
        >
          {isSelected && (
            <ElementToolbar
              item={item}
              anchorRef={anchorRef as React.RefObject<HTMLElement | null>}
            />
          )}
          <IconElement style={item.style} {...item.properties} />
        </UIView>
      );

    case ELEMENTS.TEXT:
      return (
        <UIView
          ref={anchorRef}
          id={`element-${item.id}`}
          style={wrapperStyle({ height: 'auto' })}
          onPointerDown={onPointerDown}
        >
          {isSelected && (
            <ElementToolbar
              item={item}
              anchorRef={anchorRef as React.RefObject<HTMLElement | null>}
            />
          )}
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
