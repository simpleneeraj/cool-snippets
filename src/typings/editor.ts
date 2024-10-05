import { CSSProperties } from 'react';
import { BACKGROUND_TYPE, ELEMENTS } from './enums';
import { LanguagesEnum } from '@/plugins/codemirror/languages';
import { ThemesEnum } from '@/plugins/codemirror/themes';

export type Pairs = Record<string, any>;

export enum InitialValues {
  SLIDE_ID = 'initial_slide_id',
  ELEMENT_ID = 'initial_element_id',
}

export type PropertiesType = {
  language: LanguagesEnum;
  theme: ThemesEnum;
} & Pairs;

export type ElementType = {
  id?: string | undefined;
  type?: ELEMENTS;
  content?: any;
  style?: CSSProperties;
  properties?: PropertiesType & Pairs;
};

export type SlideBackgroundTypes = {
  type: BACKGROUND_TYPE;
  style: {
    width: number;
    height: number;
    size: string;
    position: string;
    repeat: string;
  } & Pairs;
  properties: {
    watermark: boolean;
    aspectRatio: string;
    url: string;
  } & Pairs;
};

export type SlideHeaderType = {
  type: string;
  theme: string;
  input: string;
  position: string;
  style: {
    background: string;
  } & Pairs;
  properties: {
    colors: {
      name: string;
      hex: string;
    }[];
    title: {
      text: string;
      icon: string;
    };
  } & Pairs;
};

export type SlideWatermarkType = {
  text: string;
  image: string;
  style: {
    opacity: number;
    fontSize: string;
    color: string;
    position: string;
  } & Pairs;
};

export type SlideTypes = {
  id: string;
  name: string;
  header?: SlideHeaderType;
  background?: SlideBackgroundTypes;
  watermark?: SlideWatermarkType;
  elements: ElementType[];
};

export type SlideStateType = {
  slides: SlideTypes[];
} & Pairs;

export type SlideActionType = {
  createSlide: (slide: SlideTypes) => void;
  updateSlide: (id: string, slide: SlideTypes) => void;
  deleteSlide: (id: string) => void;
  duplicateSlide: (id: string) => void;
  createSlideElement: (slideId: string, element: ElementType) => void;
  updateSlideElement: (
    slideId: string,
    elementId: string,
    element: ElementType
  ) => void;
  deleteSlideElement: (slideId: string, elementId: string) => void;
  duplicateSlideElement: (slideId: string, elementId: string) => void;
};
