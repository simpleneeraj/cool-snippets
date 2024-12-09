import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import { Frame } from '@/components/elements/frame';
import UIButton from '@/ui-kit/source/UIButton/button';
import aspectRatioArray from '@/json/aspect-ratio.json';

type Resolution = {
  height: number;
  width: number;
};

type AspectRatioScreenProps = {
  value?: Resolution;
  onSelect?: (resolution: Resolution) => void;
};

const AspectRatioScreen = (props: AspectRatioScreenProps) => {
  return (
    <React.Fragment>
      {Object.keys(aspectRatioArray).map((platform, platformIndex) => (
        <Frame
          key={platformIndex}
          title={platform.charAt(0).toUpperCase() + platform.slice(1)}
        >
          {aspectRatioArray[platform as keyof typeof aspectRatioArray].map(
            (item, index) => (
              <UIButton
                key={index}
                variant="light"
                radius="none"
                className="justify-between"
                onPress={() => props.onSelect?.(item.resolution)}
              >
                <UIView>{`${item.title} (${item.ratio})`}</UIView>
                <UIView>
                  {`${item.resolution.height} x ${item.resolution.width}`}
                </UIView>
              </UIButton>
            )
          )}
        </Frame>
      ))}
    </React.Fragment>
  );
};

export default AspectRatioScreen;
