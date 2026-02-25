import { create } from 'zustand';
import initialState from './state';
import { assign, merge } from 'lodash';
import { persist } from 'zustand/middleware';
import { generateID } from '@/utils/id-generator';
import { SlideActionType, SlideStateType, StorageEnum } from '@/typings/editor';

const useSlide = create(
  persist<SlideStateType & SlideActionType>(
    (set) => ({
      ...initialState,

      createSlide: (slide) => {
        set((state) => ({
          slides: [...state.slides, slide],
        }));
      },

      updateSlide: (id, updatedSlide) => {
        set((state) => ({
          slides: state.slides.map((slide) =>
            slide.id === id ? assign({}, slide, updatedSlide) : slide,
          ),
        }));
      },

      deleteSlide: (id) => {
        set((state) => ({
          slides: state.slides.filter((slide) => slide.id !== id),
        }));
      },

      duplicateSlide: (id) => {
        set((state) => {
          const slideToDuplicate = state.slides.find(
            (slide) => slide.id === id,
          );
          if (slideToDuplicate) {
            const duplicatedSlide = merge({}, slideToDuplicate, {
              id: generateID(),
              name: `${slideToDuplicate.name} (Copy)`,
            });
            return {
              slides: [...state.slides, duplicatedSlide],
            };
          }
          return state;
        });
      },

      createSlideElement: (slideId, element) => {
        set((state) => ({
          slides: state.slides.map((slide) =>
            slide.id === slideId
              ? { ...slide, elements: [...slide.elements, element] }
              : slide,
          ),
        }));
      },

      updateSlideElement: (slideId, elementId, updatedElement) => {
        set((state) => ({
          slides: state.slides.map((slide) =>
            slide.id === slideId
              ? {
                  ...slide,
                  elements: slide.elements.map((el) =>
                    el.id === elementId ? assign({}, el, updatedElement) : el,
                  ),
                }
              : slide,
          ),
        }));
      },

      deleteSlideElement: (slideId, elementId) => {
        set((state) => ({
          slides: state.slides.map((slide) =>
            slide.id === slideId
              ? {
                  ...slide,
                  elements: slide.elements.filter((e) => e.id !== elementId),
                }
              : slide,
          ),
        }));
      },
      duplicateSlideElement: (slideId, elementId) => {
        set((state) => {
          const slide = state.slides.find((slide) => slide.id === slideId);
          if (slide) {
            const elementToDuplicate = slide.elements.find(
              (e) => e.id === elementId,
            );
            if (elementToDuplicate) {
              const duplicatedElement = merge({}, elementToDuplicate, {
                id: generateID(),
              });
              return {
                slides: state.slides.map((s) =>
                  s.id === slideId
                    ? { ...s, elements: [...s.elements, duplicatedElement] }
                    : s,
                ),
              };
            }
          }
          return state;
        });
      },
      reset: () => set(initialState),
    }),
    {
      name: StorageEnum.NAME,
    },
  ),
);

export default useSlide;
