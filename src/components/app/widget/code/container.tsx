'use client';

import React from 'react';
import SlideStyle from './styles/slide';
import UIView from '@/ui-kit/source/UIView';
import css from '@/styles/center.module.css';
import useSlideEditor from '@/store/hooks/use-editor';
import ElementStyle from './styles/element';
import { Capture as CaptureView } from '@/plugins/capture';
import EditorComponents from './elements';

const ContainerWidget = () => {
  const { activeSlide } = useSlideEditor();

  return (
    <UIView className={'flex flex-col flex-1'}>
      <SlideStyle style={activeSlide?.background} />
      <UIView className={css.container}>
        <UIView className={css.smooth}>
          <CaptureView className="center">
            {activeSlide?.elements?.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <ElementStyle style={item} />
                  <EditorComponents item={item} />
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
