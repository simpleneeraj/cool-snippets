import React from 'react';
import dynamic from 'next/dynamic';
import backgroundVariants from './variants';
import { BACKGROUND_SCREEN } from '@/typings/enums';
import { Frame, FrameItem } from '@/components/elements/frame';
import { Chip, Select, SelectItem } from '@nextui-org/react';
import { useScreen } from '@/store/screen';

const SolidBackgrounds = dynamic(() => import('./solid'));
const GradientsBackgrounds = dynamic(() => import('./gradients'));
const ImagesBackgrounds = dynamic(() => import('./images'));
const MeshBackgrounds = dynamic(() => import('./mesh'));
const PatternsBackgrounds = dynamic(() => import('./patterns'));

const BackgroundScreens = () => {
  const { screen, onChangeScreen } = useScreen((state) => state);

  const RenderScreen = React.useMemo(() => {
    switch (screen.background) {
      case BACKGROUND_SCREEN.SOLID:
        return <SolidBackgrounds />;
      case BACKGROUND_SCREEN.GRADIENTS:
        return <GradientsBackgrounds />;
      case BACKGROUND_SCREEN.IMAGES:
        return <ImagesBackgrounds />;
      case BACKGROUND_SCREEN.MESH:
        return <MeshBackgrounds />;
      case BACKGROUND_SCREEN.PATTERNS:
        return <PatternsBackgrounds />;
      default:
        return <ImagesBackgrounds />;
    }
  }, [screen]);

  return (
    <Frame title="Background">
      <FrameItem>
        <Select
          placeholder="Images"
          className="max-w-xs"
          label="Select backgronds"
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
                  variant="faded"
                  size="sm"
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
