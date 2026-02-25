/* eslint-disable react-hooks/exhaustive-deps */
import useSlide from '../slides';
import { merge } from 'lodash';
import { useMemo, useCallback } from 'react';
import { useActiveSlide } from '../slides/current-slide';
import { ElementType, SlideTypes } from '@/typings/editor';
import { useActiveElement } from '../slides/current-element';

type UseSliderEditorProps = {};

const useSlideEditor = ({}: UseSliderEditorProps = {}) => {
  const { slide } = useActiveSlide();
  const { element } = useActiveElement();
  const slides = useSlide((s) => s.slides);
  const updateSlide = useSlide((s) => s.updateSlide);
  const updateSlideElement = useSlide((s) => s.updateSlideElement);
  const createSlideElement = useSlide((s) => s.createSlideElement);
  const deleteSlideElement = useSlide((s) => s.deleteSlideElement);
  const duplicateSlideElement = useSlide((s) => s.duplicateSlideElement);
  const resetState = useSlide((s) => s.reset);

  const currentSlide = useMemo(() => {
    return slides?.find((item) => item.id === slide);
  }, [slides, slide]);

  const currentElement = useMemo(() => {
    return currentSlide?.elements?.find((elm) => elm.id === element);
  }, [currentSlide, element]);

  const onChangeSlideElement = useCallback(
    (updatedElement: ElementType) => {
      if (!currentSlide?.id || !currentElement?.id) return;

      updateSlideElement(
        currentSlide.id,
        currentElement.id,
        merge({}, currentElement, updatedElement),
      );
    },
    [updateSlideElement, currentSlide, currentElement],
  );

  const onChangeSlide = useCallback(
    (updatedSlide: Omit<SlideTypes, 'id' | 'name' | 'elements'>) => {
      if (!currentSlide?.id) return;

      updateSlide(currentSlide.id, merge({}, currentSlide, updatedSlide));
    },
    [updateSlide, currentSlide],
  );

  return {
    currentSlideId: slide,
    currentElementId: element,
    currentSlide,
    currentElement,
    onChangeSlide,
    onChangeSlideElement,
    slides: useMemo(() => slides, [slides]),
    createSlideElement,
    deleteSlideElement,
    duplicateSlideElement,
    resetState,
  };
};

export default useSlideEditor;
