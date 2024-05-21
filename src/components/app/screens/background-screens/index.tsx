import React from 'react';
import dynamic from 'next/dynamic';
import useStore from '@/store';
import backgroundVariants from './variants';
import { BACKGROUND_SCREEN } from '@/typings/enums';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import SparklesIcon from '@/ui-kit/icons/SparklesIcon';
import { Chip, Select, SelectItem } from '@nextui-org/react';

const SolidBackgrounds = dynamic(() => import('./solid'));
const GradientsBackgrounds = dynamic(() => import('./gradients'));
const ImagesBackgrounds = dynamic(() => import('./images'));
const MeshBackgrounds = dynamic(() => import('./mesh'));
const PatternsBackgrounds = dynamic(() => import('./patterns'));

const BackgroundScreens = () => {
  const { background, onChangeScreen } = useStore((state) => state);

  const RenderScreen = React.useMemo(() => {
    switch (background) {
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
  }, [background]);

  return (
    <Frame title="Background">
      {/* <FrameItem label={'Background'}>
        <UIButton
          size={'sm'}
          radius={'sm'}
          variant={'flat'}
          color={'secondary'}
          startContent={<SparklesIcon />}
        >
          Random
        </UIButton>
      </FrameItem> */}
      <FrameItem>
        <Select
          placeholder="Images"
          className="max-w-xs"
          label="Select backgronds"
          items={backgroundVariants}
          selectionMode="single"
          selectedKeys={new Set([background])}
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
      {/* All Screens */}
      {RenderScreen}
    </Frame>
  );
};
export default BackgroundScreens;
