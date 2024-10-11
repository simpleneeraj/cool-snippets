import React from 'react';
import dynamic from 'next/dynamic';
import { useScreen } from '@/store/screen';
import backgroundVariants from './variants';
import useSlideEditor from '@/store/hooks/use-editor';
import { Chip, Select, SelectItem } from '@nextui-org/react';
import { Frame, FrameItem } from '@/components/elements/frame';
import { BACKGROUND_SCREEN, BACKGROUND_TYPE } from '@/typings/enums';

const SolidBackgrounds = dynamic(() => import('./solid'));
const GradientsBackgrounds = dynamic(() => import('./gradients'));
const ImagesBackgrounds = dynamic(() => import('./images'));
const MeshBackgrounds = dynamic(() => import('./mesh'));
const PatternsBackgrounds = dynamic(() => import('./patterns'));

const BackgroundScreens = () => {
  const { activeSlide, onChangeSlide } = useSlideEditor();
  const { screen, onChangeScreen } = useScreen((state) => state);

  const onUpdateBackground = React.useCallback(
    (type: BACKGROUND_TYPE, value: string) => {
      onChangeSlide({
        background: {
          type,
          properties: {
            [type]: value,
          },
        },
      });
    },
    [activeSlide]
  );

  const RenderScreen = React.useMemo(() => {
    switch (screen.background) {
      case BACKGROUND_SCREEN.SOLID:
        return <SolidBackgrounds />;
      case BACKGROUND_SCREEN.GRADIENTS:
        return (
          <GradientsBackgrounds
            value={
              activeSlide?.background?.properties?.[BACKGROUND_TYPE.GRADIENT]
            }
            onChange={(gradient) =>
              onUpdateBackground(BACKGROUND_TYPE.GRADIENT, gradient)
            }
          />
        );
      case BACKGROUND_SCREEN.IMAGES:
        return (
          <ImagesBackgrounds
            value={activeSlide?.background?.properties?.[BACKGROUND_TYPE.IMAGE]}
            onChange={(gradient) =>
              onUpdateBackground(BACKGROUND_TYPE.IMAGE, gradient)
            }
          />
        );
      case BACKGROUND_SCREEN.MESH:
        return <MeshBackgrounds />;
      case BACKGROUND_SCREEN.PATTERNS:
        return <PatternsBackgrounds />;
      default:
        return <ImagesBackgrounds />;
    }
  }, [screen, activeSlide?.background?.properties, onUpdateBackground]);

  return (
    <Frame title="Background">
      <FrameItem>
        <Select
          placeholder="Images"
          className="max-w-xs"
          items={backgroundVariants}
          selectionMode="single"
          selectedKeys={new Set([screen.background])}
          onChange={({ target }: any) =>
            onChangeScreen('background', target.value)
          }
          size="sm"
        >
          {(item) => (
            <SelectItem aria-label={item.label} key={item.value}>
              {item.label}
              {item.new && (
                <Chip
                  size="sm"
                  variant="faded"
                  color="secondary"
                  className="ml-2"
                >
                  New
                </Chip>
              )}
            </SelectItem>
          )}
        </Select>
      </FrameItem>
      {RenderScreen}
    </Frame>
  );
};
export default BackgroundScreens;
