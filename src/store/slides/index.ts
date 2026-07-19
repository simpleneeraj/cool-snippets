import { create } from 'zustand';
import { temporal } from 'zundo';
import initialState from './state';
import migrateSlides from './migrations';
import { assign, merge, isEqual, debounce } from 'lodash';
import { persist } from 'zustand/middleware';
import { generateID } from '@/utils/id-generator';
import { LAYER_DIRECTION } from '@/typings/enums';
import {
  SlideActionType,
  SlideStateType,
  StorageEnum,
  STORE_VERSION,
} from '@/typings/editor';

const HISTORY_LIMIT = 50;

/**
 * Continuous edits — dragging a slider, typing in the editor — fire a write per
 * tick. Recording on the leading edge only collapses each burst into a single
 * undo step that restores the state from before the burst began.
 */
const HISTORY_GROUPING_MS = 400;

const resolveTargetIndex = (
  currentIndex: number,
  length: number,
  direction: LAYER_DIRECTION,
) => {
  switch (direction) {
    case LAYER_DIRECTION.UP:
      return Math.min(currentIndex + 1, length - 1);
    case LAYER_DIRECTION.DOWN:
      return Math.max(currentIndex - 1, 0);
    case LAYER_DIRECTION.TOP:
      return length - 1;
    case LAYER_DIRECTION.BOTTOM:
      return 0;
  }
};

const moveWithinArray = <T>(items: T[], from: number, to: number): T[] => {
  const next = [...items];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
};

const useSlide = create<SlideStateType & SlideActionType>()(
  persist(
    temporal(
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

        moveSlideElement: (slideId, elementId, direction) => {
          set((state) => ({
            slides: state.slides.map((slide) => {
              if (slide.id !== slideId) return slide;

              const index = slide.elements.findIndex((e) => e.id === elementId);
              if (index === -1) return slide;

              const target = resolveTargetIndex(
                index,
                slide.elements.length,
                direction,
              );
              if (target === index) return slide;

              return {
                ...slide,
                elements: moveWithinArray(slide.elements, index, target),
              };
            }),
          }));
        },

        reorderSlideElement: (slideId, elementId, toIndex) => {
          set((state) => ({
            slides: state.slides.map((slide) => {
              if (slide.id !== slideId) return slide;

              const index = slide.elements.findIndex((e) => e.id === elementId);
              const target = Math.max(
                0,
                Math.min(toIndex, slide.elements.length - 1),
              );
              if (index === -1 || index === target) return slide;

              return {
                ...slide,
                elements: moveWithinArray(slide.elements, index, target),
              };
            }),
          }));
        },

        replaceSlides: (slides) => set({ slides }),

        reset: () => set(initialState),
      }),
      {
        limit: HISTORY_LIMIT,
        partialize: (state) => ({ slides: state.slides }),
        equality: (past, current) => isEqual(past.slides, current.slides),
        handleSet: (handleSet) =>
          debounce(handleSet, HISTORY_GROUPING_MS, {
            leading: true,
            trailing: false,
          }),
      },
    ),
    {
      name: StorageEnum.NAME,
      version: STORE_VERSION,
      migrate: migrateSlides,
      partialize: (state) => ({ slides: state.slides }) as SlideStateType,
    },
  ),
);

export default useSlide;
