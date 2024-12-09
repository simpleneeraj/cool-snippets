/* eslint-disable react-hooks/exhaustive-deps */
import useSlide from '../slides';
import { merge, throttle } from 'lodash';
import { useCallback, useMemo } from 'react';
import { useActiveSlide } from '../slides/current-slide';
import { ElementType, SlideTypes } from '@/typings/editor';
import { useActiveElement } from '../slides/current-element';

const THROTTLE_DELAY = 2000;

const useSlideEditor = () => {
  const { slide } = useActiveSlide();
  const { element } = useActiveElement();
  const slideState = useSlide((state) => state);

  const currentSlide = useMemo(() => {
    return slideState?.slides?.find((item) => item.id === slide);
  }, [slideState.slides, slide]);

  const currentElement = useMemo(() => {
    return currentSlide?.elements?.find((elm) => elm.id === element);
  }, [currentSlide, element]);

  const throttledUpdateSlideElement = useCallback(
    throttle((updatedElement: ElementType) => {
      if (currentSlide?.id && currentElement?.id) {
        slideState.updateSlideElement(
          currentSlide.id,
          currentElement.id,
          merge({}, currentElement, updatedElement)
        );
      }
    }, THROTTLE_DELAY),
    [slideState, currentSlide, currentElement]
  );

  const throttledUpdateSlide = useCallback(
    throttle((updatedSlide: Omit<SlideTypes, 'id' | 'name' | 'elements'>) => {
      if (currentSlide?.id) {
        slideState.updateSlide(
          currentSlide.id,
          merge({}, currentSlide, updatedSlide)
        );
      }
    }, THROTTLE_DELAY),
    [slideState, currentSlide]
  );

  return {
    currentSlideId: slide,
    currentElementId: element,
    currentSlide,
    currentElement,
    onChangeSlide: throttledUpdateSlide,
    onChangeSlideElement: throttledUpdateSlideElement,
    slides: useMemo(() => slideState.slides, [slideState.slides]),
    createSlideElement: slideState.createSlideElement,
    deleteSlideElement: slideState.deleteSlideElement,
    duplicateSlideElement: slideState.duplicateSlideElement,
  };
};

export default useSlideEditor;
