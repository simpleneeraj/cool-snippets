import React from 'react';
import useSlide from '../slides';
import { ElementType } from '@/typings/editor';
import { useActiveSlide } from '../slides/current-slide';
import { useActiveElement } from '../slides/current-element';

const useSlideEditor = () => {
  // Retrieve active slide and active element
  const { slide } = useActiveSlide();
  const { element } = useActiveElement();
  // Retrieve slides and updateSlideElement function from the useSlide hook
  const slideState = useSlide((state) => state);

  // console.log(slideState.slides);
  // Get active slide
  const activeSlide = React.useMemo(() => {
    return slideState.slides.find((item) => item.id === slide);
  }, [slideState.slides, slide]); // Include slides and slide in dependencies array

  // Get active element
  const activeElement = React.useMemo(() => {
    return activeSlide?.elements.find((elm) => elm.id === element);
  }, [activeSlide, element]); // Include activeSlide and element in dependencies array

  // Update Slide Elements Properties
  const updateElementProperties = React.useCallback(
    (updatedElement: ElementType) => {
      if (activeSlide?.id && activeElement?.id) {
        // Call updateSlideElement function with updated element properties
        slideState.updateSlideElement(activeSlide.id, activeElement.id, {
          ...activeElement.style,
          ...updatedElement,
        });
      }
    },
    [activeSlide, activeElement]
  );

  // Return active slide, active element, and update function
  return {
    ...slideState,
    slide: activeSlide,
    element: activeElement,
    updateElementProperties,
  };
};

export default useSlideEditor;
