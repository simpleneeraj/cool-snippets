import useSlide from '../slides';
import { merge } from 'lodash';
import { useMemo, useCallback } from 'react';
import { useActiveSlide } from '../slides/current-slide';
import { ElementType, SlideTypes } from '@features/studio/model/editor';
import { useActiveElement } from '../slides/current-element';

const useSlideEditor = () => {
  const { slide } = useActiveSlide();
  const { element } = useActiveElement();

  // Selecting the slide inside the store keeps this subscription scoped: a
  // change to another slide no longer re-renders every editor consumer.
  const currentSlide = useSlide((s) => s.slides.find((it) => it.id === slide));
  const slides = useSlide((s) => s.slides);

  const updateSlide = useSlide((s) => s.updateSlide);
  const updateSlideElement = useSlide((s) => s.updateSlideElement);
  const createSlideElement = useSlide((s) => s.createSlideElement);
  const deleteSlideElement = useSlide((s) => s.deleteSlideElement);
  const duplicateSlideElement = useSlide((s) => s.duplicateSlideElement);
  const moveSlideElement = useSlide((s) => s.moveSlideElement);
  const reorderSlideElement = useSlide((s) => s.reorderSlideElement);
  const replaceSlides = useSlide((s) => s.replaceSlides);
  const resetState = useSlide((s) => s.reset);

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

  /**
   * Replaces the whole properties bag for the current element. Deep-merging a
   * partial leaves keys from the previous value behind, which is wrong for
   * discriminated blocks like the editor options or an asset reference.
   */
  const onReplaceElementProperties = useCallback(
    (properties: ElementType['properties']) => {
      if (!currentSlide?.id || !currentElement?.id) return;

      updateSlideElement(currentSlide.id, currentElement.id, {
        ...currentElement,
        properties,
      });
    },
    [updateSlideElement, currentSlide, currentElement],
  );

  const onChangeSlide = useCallback(
    (updatedSlide: Omit<SlideTypes, 'id' | 'name' | 'elements'>) => {
      if (!currentSlide?.id) return;

      // `background` is replaced rather than merged: each background type owns
      // a different properties key, and merging leaves the previous type's
      // value behind where only `type` distinguishes which one renders.
      const { background, ...rest } = updatedSlide;

      updateSlide(currentSlide.id, {
        ...merge({}, currentSlide, rest),
        ...(background && { background }),
      });
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
    onReplaceElementProperties,
    slides,
    updateSlideElement,
    createSlideElement,
    deleteSlideElement,
    duplicateSlideElement,
    moveSlideElement,
    reorderSlideElement,
    replaceSlides,
    resetState,
  };
};

export default useSlideEditor;
