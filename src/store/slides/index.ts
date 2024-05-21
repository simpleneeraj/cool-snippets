import { create } from 'zustand';
import { ELEMENTS } from '@/typings/enums';
import { generateID } from '@/utils/id-generator';
import { ThemesEnum } from '@/plugins/codemirror/themes';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import {
  InitialValues,
  SlideActionType,
  SlideStateType,
} from '@/typings/editor';

const initialState = {
  slides: [
    {
      id: InitialValues.SLIDE_ID,
      name: 'Untitled Slide',
      elements: [
        {
          id: InitialValues.ELEMENT_ID,
          type: ELEMENTS.CODE,
          content: 'console.log("Hello, World!");',
          style: {},
          properties: {
            language: LanguagesEnum.TYPESCRIPT,
            theme: ThemesEnum.DRACULA,
          },
        },
      ],
    },
  ],
};

const useSlide = create<SlideStateType & SlideActionType>((set) => ({
  ...initialState,
  createSlide: (slide) =>
    set((state: SlideStateType) => ({
      slides: [...state.slides, slide],
    })),
  updateSlide: (id, updatedSlide) =>
    set((state: SlideStateType) => ({
      slides: state.slides.map((slide) =>
        slide.id === id ? { ...slide, ...updatedSlide } : slide
      ),
    })),
  deleteSlide: (id) =>
    set((state: SlideStateType) => ({
      slides: state.slides.filter((slide) => slide.id !== id),
    })),
  duplicateSlide: (id) =>
    set((state: SlideStateType) => {
      const slideToDuplicate = state.slides.find((slide) => slide.id === id);
      if (!slideToDuplicate) return state;

      const duplicatedSlide = {
        ...slideToDuplicate,
        id: generateID(),
        name: `${slideToDuplicate.name} (Copy)`,
      };
      return {
        slides: [...state.slides, duplicatedSlide],
      };
    }),
  createSlideElement: (slideId, element) =>
    set((state: SlideStateType) => ({
      slides: state.slides.map((slide) =>
        slide.id === slideId
          ? { ...slide, elements: [...slide.elements, element] }
          : slide
      ),
    })),
  updateSlideElement: (slideId, elementId, updatedElement) =>
    set((state: SlideStateType) => ({
      slides: state.slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.map((element) =>
                element.id === elementId
                  ? { ...element, ...updatedElement }
                  : element
              ),
            }
          : slide
      ),
    })),
  deleteSlideElement: (slideId, elementId) =>
    set((state: SlideStateType) => ({
      slides: state.slides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              elements: slide.elements.filter(
                (element) => element.id !== elementId
              ),
            }
          : slide
      ),
    })),
  duplicateSlideElement: (slideId, elementId) =>
    set((state: SlideStateType) => {
      const slide = state.slides.find((slide) => slide.id === slideId);
      if (!slide) return state;

      const elementToDuplicate = slide.elements.find(
        (element) => element.id === elementId
      );
      if (!elementToDuplicate) return state;

      const duplicatedElement = { ...elementToDuplicate, id: generateID() };
      const updatedElements = [...slide.elements, duplicatedElement];

      return {
        slides: state.slides.map((s) =>
          s.id === slideId ? { ...s, elements: updatedElements } : s
        ),
      };
    }),
}));

export default useSlide;
