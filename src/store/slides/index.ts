import { create } from 'zustand';
import { BACKGROUND_TYPE, ELEMENTS } from '@/typings/enums';
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
      name: 'Crystal Slide',
      background: {
        type: BACKGROUND_TYPE.IMAGE,
        style: {
          width: 450,
          height: 450,
          size: 'cover',
          position: 'center',
          repeat: 'no-repeat',
        },
        properties: {
          watermark: true,
          aspectRatio: '1:1',
          url: '/images/glow-wallpaper.jpg',
        },
      },
      header: {
        type: 'unix::terminal',
        theme: 'outline',
        input: 'nothing',
        position: 'nothing',
        style: {
          background: 'rgba(0, 0, 0, 0.75)',
        },
        properties: {
          colors: [
            {
              name: 'Red',
              hex: '#fd4539',
            },
            {
              name: 'Yellow',
              hex: '#ffd213',
            },
            {
              name: 'Green',
              hex: '#21d854',
            },
          ],
          title: {
            text: 'My Application',
            icon: 'https://raw.githubusercontent.com/simpleneeraj/vscode-material-icon-theme/main/icons/swift.svg',
          },
        },
      },
      watermark: {
        text: 'Your Watermark Here',
        image: '',
        style: {
          opacity: 0.3,
          fontSize: '12px',
          color: '#ffffff',
          // Can have custom it have custom(120px,50px) pairs
          position: 'bottom-right',
        },
      },
      elements: [
        {
          id: InitialValues.ELEMENT_ID,
          type: ELEMENTS.CODE,
          content: `import SwiftUI

          struct CircleImage: View {
              var body: some View {
                  Image("turtlerock")
                      .clipShape(Circle())
              }
          }
          `,
          style: {
            width: '90%',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: 0,
            fontFamily: 'SFMono',
            borderRadius: 15,
            background: 'rgba(0, 0, 0, 0.5)',
          },
          properties: {
            theme: ThemesEnum.DRACULA,
            language: LanguagesEnum.TYPESCRIPT,
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
