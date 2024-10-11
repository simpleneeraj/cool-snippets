import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import { ElementType } from '@/typings/editor';
import UISlider from '@/ui-kit/source/UISlider';
import { Frame, FrameItem } from '@/components/elements/frame';

type Props = {
  openAspectRatio: () => void;
  openBackgrounds: () => void;
  updateElementProperties: (updatedElement: ElementType) => void;
};

const CodeHeaderScreen: React.FC<Props> = ({ updateElementProperties }) => {
  // Handlers with debounce
  const handleDebouncedChange = useCallback(
    debounce((property: string, value: string) => {
      updateElementProperties({
        style: {
          [property]: `${value}px`,
        },
      });
    }, 500),
    []
  );

  const handlePaddingChange = (value: number | number[]) => {
    handleDebouncedChange('padding', value?.toString());
  };

  const handleRadiusChange = (value: number | number[]) => {
    handleDebouncedChange('borderRadius', value?.toString());
  };

  return (
    <Frame title="CODE HEADER">
      <FrameItem label="Padding">
        <UISlider size="sm" onChange={handlePaddingChange} />
      </FrameItem>

      <FrameItem label="Radius">
        <UISlider size="sm" onChange={handleRadiusChange} />
      </FrameItem>
    </Frame>
  );
};

export default CodeHeaderScreen;
