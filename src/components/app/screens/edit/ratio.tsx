import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UIDivider from '@/ui-kit/source/UIDivider';
import { Frame } from '@/components/elements/frame';
import UIButton from '@/ui-kit/source/UIButton/button';
import aspectRatioArray from '@/json/aspect-ratio.json';

const AspectRatioScreen = () => {
  return (
    <React.Fragment>
      <UIDivider className="bg-default-200 bg-opacity-50" />
      <Frame title="Instagram">
        {aspectRatioArray.instagram.map((item, index) => (
          <UIButton
            key={index}
            variant={'light'}
            radius={'none'}
            className={'justify-between'}
            disableRipple
          >
            <UIView>{`${item.title} (${item.ratio})`}</UIView>
            <UIView>
              {`${item.resolution.height} x ${item.resolution.width}`}
            </UIView>
          </UIButton>
        ))}
      </Frame>
      <Frame title="LinkedIn">
        {aspectRatioArray.linkedIn.map((item, index) => (
          <UIButton
            key={index}
            variant={'light'}
            radius={'none'}
            className={'justify-between'}
          >
            <UIView>{item.ratio}</UIView>
            <UIView>
              {`${item.resolution.height} x ${item.resolution.width}`}
            </UIView>
          </UIButton>
        ))}
      </Frame>
    </React.Fragment>
  );
};
export default AspectRatioScreen;
