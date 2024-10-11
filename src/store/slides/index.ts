import { create } from 'zustand';
import initialState from './initial-state';
import { immer } from 'zustand/middleware/immer';
import { generateID } from '@/utils/id-generator';
import { SlideActionType, SlideStateType } from '@/typings/editor';

const useSlide = create(
  immer<SlideStateType & SlideActionType>((set) => ({
    ...initialState,
    createSlide: (slide) => {
      set((state) => {
        state.slides.push(slide);
      });
    },

    updateSlide: (id, updatedSlide) => {
      set((state) => {
        const slide = state.slides.find((slide) => slide.id === id);
        if (slide) {
          Object.assign(slide, updatedSlide);
        }
      });
    },

    deleteSlide: (id) => {
      set((state) => {
        state.slides = state.slides.filter((slide) => slide.id !== id);
      });
    },

    duplicateSlide: (id) => {
      set((state) => {
        const slideToDuplicate = state.slides.find((slide) => slide.id === id);
        if (slideToDuplicate) {
          const duplicatedSlide = {
            ...slideToDuplicate,
            id: generateID(),
            name: `${slideToDuplicate.name} (Copy)`,
          };
          state.slides.push(duplicatedSlide);
        }
      });
    },

    createSlideElement: (slideId, element) => {
      set((state) => {
        const slide = state.slides.find((slide) => slide.id === slideId);
        if (slide) {
          slide.elements.push(element);
        }
      });
    },

    updateSlideElement: (slideId, elementId, updatedElement) => {
      set((state) => {
        const slide = state.slides.find((slide) => slide.id === slideId);
        if (slide) {
          const element = slide.elements.find((e) => e.id === elementId);
          if (element) {
            Object.assign(element, updatedElement);
          }
        }
      });
    },

    deleteSlideElement: (slideId, elementId) => {
      set((state) => {
        const slide = state.slides.find((slide) => slide.id === slideId);
        if (slide) {
          slide.elements = slide.elements.filter((e) => e.id !== elementId);
        }
      });
    },

    duplicateSlideElement: (slideId, elementId) => {
      set((state) => {
        const slide = state.slides.find((slide) => slide.id === slideId);
        if (slide) {
          const elementToDuplicate = slide.elements.find(
            (e) => e.id === elementId
          );
          if (elementToDuplicate) {
            const duplicatedElement = {
              ...elementToDuplicate,
              id: generateID(),
            };
            slide.elements.push(duplicatedElement);
          }
        }
      });
    },
  }))
);

export default useSlide;
