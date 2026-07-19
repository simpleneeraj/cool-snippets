import { ElementType, SlideStateType, SlideTypes } from '@/typings/editor';

/**
 * Stacking used to live in `style.zIndex` as a string that the element toolbar
 * incremented by one. From v2 the array position is the z-order, so existing
 * slides are sorted by their old zIndex before the field is dropped.
 */
const migrateElementOrder = (elements: ElementType[] = []): ElementType[] =>
  elements
    .map((element, index) => ({ element, index }))
    .sort((a, b) => {
      const left = Number(a.element?.style?.zIndex);
      const right = Number(b.element?.style?.zIndex);
      if (Number.isNaN(left) && Number.isNaN(right)) return a.index - b.index;
      if (Number.isNaN(left)) return -1;
      if (Number.isNaN(right)) return 1;
      if (left === right) return a.index - b.index;
      return left - right;
    })
    .map(({ element }) => {
      if (!element?.style) return element;
      const { zIndex: _zIndex, ...style } = element.style;
      return { ...element, style };
    });

/** Fields that were seeded into state but never read by any component. */
const migrateSlide = (slide: SlideTypes): SlideTypes => {
  const { watermark: _watermark, ...rest } = slide;
  const background = slide.background;

  return {
    ...rest,
    elements: migrateElementOrder(slide.elements),
    ...(background && {
      background: {
        ...background,
        style: background.style && {
          width: background.style.width,
          height: background.style.height,
        },
        properties:
          background.properties &&
          Object.fromEntries(
            Object.entries(background.properties).filter(
              ([key]) => key !== 'watermark' && key !== 'aspectRatio',
            ),
          ),
      },
    }),
  };
};

const migrateSlides = (persisted: unknown, version: number): SlideStateType => {
  const state = (persisted ?? {}) as Partial<SlideStateType>;
  const slides = Array.isArray(state.slides) ? state.slides : [];

  if (version >= 2) return { ...state, slides } as SlideStateType;

  return { ...state, slides: slides.map(migrateSlide) } as SlideStateType;
};

export default migrateSlides;
