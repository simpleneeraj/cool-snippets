import { CSSProperties } from 'react';
import { ELEMENTS } from './enums';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { ThemesEnum } from '@/plugins/codemirror/themes';

export enum InitialValues {
  SLIDE_ID = 'initial_slide_id',
  ELEMENT_ID = 'initial_element_id',
}

export type PropertiesType = {
  language: LanguagesEnum;
  theme: ThemesEnum;
} & Record<string, any>;

export type ElementType = {
  id?: string | undefined;
  type?: ELEMENTS;
  content?: any;
  style?: CSSProperties;
  properties?: PropertiesType;
};

export type SlideTypes = {
  id: string;
  name: string;
  elements: ElementType[];
};

export type SlideStateType = {
  slides: SlideTypes[];
};

export type SlideActionType = {
  /**
   * Create Slide
   */
  createSlide: (slide: SlideTypes) => void;
  updateSlide: (id: string, slide: SlideTypes) => void;
  deleteSlide: (id: string) => void;
  duplicateSlide: (id: string) => void;
  /**
   * Create Slide Element
   */
  createSlideElement: (slideId: string, element: ElementType) => void;
  updateSlideElement: (
    slideId: string,
    elementId: string,
    element: ElementType
  ) => void;
  deleteSlideElement: (slideId: string, elementId: string) => void;
  duplicateSlideElement: (slideId: string, elementId: string) => void;
};
