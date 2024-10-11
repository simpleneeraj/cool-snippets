import useSlide from '../slides';
import { merge, throttle } from 'lodash';
import { useCallback, useMemo } from 'react';
import { useActiveSlide } from '../slides/current-slide';
import { ElementType, SlideTypes } from '@/typings/editor';
import { useActiveElement } from '../slides/current-element';

const THROTTLE_DELAY = 1000;

const useSlideEditor = () => {
  const { slide } = useActiveSlide();
  const { element } = useActiveElement();
  const slideState = useSlide((state) => state);

  const activeSlide = useMemo(() => {
    return slideState?.slides?.find((item) => item.id === slide);
  }, [slideState.slides, slide]);

  const activeElement = useMemo(() => {
    return activeSlide?.elements?.find((elm) => elm.id === element);
  }, [activeSlide, element]);

  const throttledUpdateSlideElement = useCallback(
    throttle((updatedElement: ElementType) => {
      if (activeSlide?.id && activeElement?.id) {
        slideState.updateSlideElement(
          activeSlide.id,
          activeElement.id,
          merge({}, activeElement, updatedElement)
        );
      }
    }, THROTTLE_DELAY),
    [activeSlide, activeElement, slideState]
  );

  const throttledUpdateSlide = useCallback(
    throttle((updatedSlide: Omit<SlideTypes, 'id' | 'name' | 'elements'>) => {
      console.log('HELLO');
      if (activeSlide?.id) {
        slideState.updateSlide(
          activeSlide.id,
          merge({}, activeSlide, updatedSlide)
        );
      }
    }, THROTTLE_DELAY),
    [activeSlide, slideState]
  );

  return {
    currentSlideId: slide,
    currentElementId: element,
    activeSlide,
    activeElement,
    onChangeSlide: throttledUpdateSlide,
    onChangeSlideElement: throttledUpdateSlideElement,
    slides: useMemo(() => slideState.slides, [slideState.slides]),
  };
};

export default useSlideEditor;
