'use client';

import React from 'react';
import SlideStyle from './styles/slide';
import UIView from '@/app-kit/source/UIView';
import EditorComponents from './elements';
import ElementStyle from './styles/element';
import useSlideEditor from '@/store/hooks/use-editor';
import { Capture as CaptureView } from '@/plugins/capture';

const ContainerWidget = () => {
  const { currentSlide } = useSlideEditor();

  return (
    <React.Fragment>
      <UIView className="flex flex-col w-full h-full">
        <UIView className="container">
          <CaptureView className="center">
            {currentSlide?.elements?.map((item) => (
              <React.Fragment key={item.id}>
                <ElementStyle style={item} />
                <EditorComponents item={item} />
              </React.Fragment>
            ))}
          </CaptureView>
        </UIView>
        <SlideStyle style={currentSlide?.background} />
      </UIView>
    </React.Fragment>
  );
};

export default ContainerWidget;
