'use client';

import React from 'react';
import SlideStyle from './styles/slide';
import UIView from '@/ui-kit/source/UIView';
import css from '@/styles/center.module.scss';
import { Capture as CaptureView } from '@/plugins/capture';
import ElementView from './elements/view';
import IconElement from './elements/icon';
import TextElement from './elements/text';
import { ELEMENTS } from '@/typings/enums';
import { ElementType } from '@/typings/editor';
import useSlideEditor from '@/store/hooks/use-editor';
import CodeElement from './elements/code';
import {
  generatedCodeLanguage,
  generatedCodeTheme,
} from '@/plugins/codemirror/utils';
import { useActiveElement } from '@/store/slides/current-element';
import { useActiveSlide } from '@/store/slides/current-slide';
import ElementStyle from './styles/element';

const ContainerWidget = () => {
  const dragConstraintsRef = React.useRef(null);
  const { slides, updateSlideElement } = useSlideEditor();
  const { slide } = useActiveSlide();
  const { updateElement } = useActiveElement();

  const activeSlide = React.useMemo(() => {
    return slides.find((item) => item.id === slide);
  }, [slide, slides]);

  const handleActiveElement = React.useCallback(
    (elementId: string | undefined) => {
      if (elementId) {
        updateElement(elementId);
      }
    },
    []
  );

  console.log(activeSlide?.elements);

  const RenderElement = React.useCallback(
    (item: ElementType) => {
      switch (item.type) {
        case ELEMENTS.CODE:
          return (
            <ElementView
              drag
              key={item.id}
              style={item.style}
              className="layer"
              dragConstraints={dragConstraintsRef}
              onHoverStart={() => handleActiveElement(item.id)}
            >
              <CodeElement
                value={item.content}
                onChange={(value) => {
                  if (item.id) {
                    updateSlideElement(slide, item.id, {
                      content: value,
                    });
                  }
                }}
                extensions={generatedCodeLanguage(item?.properties?.language)}
                theme={generatedCodeTheme(item?.properties?.theme, 0)}
                basicSetup={{
                  foldGutter: false,
                  highlightActiveLine: false,
                  highlightActiveLineGutter: false,
                  lineNumbers: false,
                  autocompletion: false,
                }}
                header={activeSlide?.header || null}
              />
            </ElementView>
          );

        case ELEMENTS.TEXT:
          return (
            <ElementView
              key={item.id}
              drag
              dragConstraints={dragConstraintsRef}
              onHoverStart={() => handleActiveElement(item.id)}
              style={{
                ...item.style,
                width: '90%',
              }}
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
              key={item.id}
              drag
              dragConstraints={dragConstraintsRef}
              onHoverStart={() => handleActiveElement(item.id)}
            >
              <IconElement />
            </ElementView>
          );

        default:
          return null;
      }
    },
    [
      slide,
      dragConstraintsRef,
      updateElement,
      handleActiveElement,
      updateSlideElement,
    ]
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
