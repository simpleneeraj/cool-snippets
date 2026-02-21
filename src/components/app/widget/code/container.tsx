'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SlideStyle from './styles/slide';
import ElementStyle from './styles/element';
import UIView from '@/app-kit/source/UIView';
import { Spinner } from '@/app-kit/ui/spinner';
import useSlideEditor from '@/store/hooks/use-editor';
import { Capture as CaptureView } from '@/plugins/capture';

const EditorComponents = dynamic(() => import('./elements'), {
  ssr: false,
});

const ContainerWidget = () => {
  const { currentSlide } = useSlideEditor();


  return (
    <CaptureView className="center max-w-sm">
      {currentSlide?.elements?.map((item) => (
        <React.Fragment key={item.id}>
          {/* Should be unique for individual elements */}
          <ElementStyle style={item} />
          <React.Suspense
            fallback={
              <UIView
                className="flex-1 flex items-center justify-center"
                style={{ ...item.style, background: 'transparent' }}
              >
                <Spinner />
              </UIView>
            }
          >
            <EditorComponents item={item} />
          </React.Suspense>
        </React.Fragment>
      ))}
      <SlideStyle style={currentSlide?.background} />
    </CaptureView>
  );
};

export default ContainerWidget;
