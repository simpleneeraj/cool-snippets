'use client';

import React from 'react';
import SlideStyle from './styles/slide';
import UIView from '@/ui-kit/source/UIView';
import css from '@/styles/center.module.scss';
import ElementView from './elements/view';
import IconElement from './elements/icon';
import TextElement from './elements/text';
import { ELEMENTS } from '@/typings/enums';
import { ElementType } from '@/typings/editor';
import useSlideEditor from '@/store/hooks/use-editor';
import CodeElement from './elements/code';
import {
  generatedCodeTheme,
  generatedCodeLanguage,
} from '@/plugins/codemirror/utils';
import ElementStyle from './styles/element';
import { Capture as CaptureView } from '@/plugins/capture';
import { useActiveElement } from '@/store/slides/current-element';

const ContainerWidget = () => {
  const { updateElement } = useActiveElement();
  const dragConstraintsRef = React.useRef(null);

  const { activeSlide, onChangeSlideElement } = useSlideEditor();

  const RenderElement = React.useCallback(
    (item: ElementType) => {
      switch (item.type) {
        case ELEMENTS.CODE:
          return (
            <ElementView
              style={item.style}
              onHoverStart={() => updateElement(item.id!)}
            >
              <CodeElement
                value={item.content}
                onChange={(content) =>
                  onChangeSlideElement({
                    content,
                  })
                }
                extensions={generatedCodeLanguage(item?.properties?.language!)}
                theme={generatedCodeTheme(item?.properties?.theme, 0.5)}
                basicSetup={{
                  foldGutter: false,
                  highlightActiveLine: false,
                  highlightActiveLineGutter: false,
                  lineNumbers: false,
                }}
                header={activeSlide?.header || null}
              />
            </ElementView>
          );

        case ELEMENTS.TEXT:
          return (
            <ElementView
              drag
              style={item.style}
              dragConstraints={dragConstraintsRef}
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
              dragConstraints={dragConstraintsRef}
              onHoverStart={() => updateElement(item.id!)}
            >
              <IconElement />
            </ElementView>
          );
        default:
          return null;
      }
    },
    [updateElement, onChangeSlideElement, dragConstraintsRef]
  );

  return (
    <UIView className={'flex flex-col flex-1'}>
      <SlideStyle style={activeSlide?.background} />
      <UIView className={css.container}>
        <UIView className={css.smooth}>
          <CaptureView className="center" ref={dragConstraintsRef}>
            {activeSlide?.elements?.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <ElementStyle style={item} />
                  {RenderElement(item)}
                </React.Fragment>
              );
            })}
          </CaptureView>
        </UIView>
      </UIView>
    </UIView>
  );
};
export default ContainerWidget;
