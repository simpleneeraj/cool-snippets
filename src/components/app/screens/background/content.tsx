import React from 'react';
import { useScreen } from '@/store/screen';
import useSlideEditor from '@/store/hooks/use-editor';
import { BACKGROUND_SCREEN, BACKGROUND_TYPE } from '@shared/types/enums';
import SolidBackgrounds from './solid';
import GradientsBackgrounds from './gradients';
import ImagesBackgrounds from './images';
import MeshBackgrounds from './mesh';
import PatternsBackgrounds from './patterns';

type BackgroundContentProps = {};

const BackgroundContent: React.FC<BackgroundContentProps> = ({}) => {
  const screen = useScreen((state) => state.screen);
  const { currentSlide, onChangeSlide } = useSlideEditor();

  const onUpdateBackground = React.useCallback(
    (type: BACKGROUND_TYPE, value: string) => {
      // `onChangeSlide` replaces `background` wholesale, so carry the existing
      // `style` (which holds the frame width/height) across — otherwise picking
      // a background drops the dimensions and the artboard shrinks to minimum.
      onChangeSlide({
        background: {
          style: currentSlide?.background?.style,
          type,
          properties: {
            [type]: value,
          },
        },
      });
    },
    [onChangeSlide, currentSlide?.background?.style],
  );

  switch (screen.background) {
    case BACKGROUND_SCREEN.SOLID:
      return (
        <SolidBackgrounds
          value={currentSlide?.background?.properties?.[BACKGROUND_TYPE.COLOR]}
          onSelect={(gradient) =>
            onUpdateBackground(BACKGROUND_TYPE.COLOR, gradient)
          }
        />
      );
    case BACKGROUND_SCREEN.GRADIENTS:
      return (
        <GradientsBackgrounds
          value={
            currentSlide?.background?.properties?.[BACKGROUND_TYPE.GRADIENT]
          }
          onSelect={(gradient) =>
            onUpdateBackground(BACKGROUND_TYPE.GRADIENT, gradient)
          }
        />
      );
    case BACKGROUND_SCREEN.IMAGES:
      return (
        <ImagesBackgrounds
          value={currentSlide?.background?.properties?.[BACKGROUND_TYPE.IMAGE]}
          onSelect={(gradient) =>
            onUpdateBackground(BACKGROUND_TYPE.IMAGE, gradient)
          }
        />
      );
    case BACKGROUND_SCREEN.MESH:
      return (
        <MeshBackgrounds
          onSelect={(gradient) =>
            onUpdateBackground(BACKGROUND_TYPE.GRADIENT, gradient)
          }
        />
      );
    case BACKGROUND_SCREEN.PATTERNS:
      return (
        <PatternsBackgrounds
          value={
            currentSlide?.background?.properties?.[BACKGROUND_TYPE.PATTERN]
          }
          onSelect={(gradient) =>
            onUpdateBackground(BACKGROUND_TYPE.PATTERN, gradient)
          }
        />
      );
    default:
      return (
        <ImagesBackgrounds
          value={currentSlide?.background?.properties?.[BACKGROUND_TYPE.IMAGE]}
          onSelect={(gradient) =>
            onUpdateBackground(BACKGROUND_TYPE.IMAGE, gradient)
          }
        />
      );
  }
};

export default BackgroundContent;
