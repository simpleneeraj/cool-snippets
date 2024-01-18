import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UIDivider from '@/ui-kit/source/UIDivider';
import { Frame } from '@/components/elements/frame';
import UIButton from '@/ui-kit/source/UIButton/button';

{
  /* SLIDE PAN */
}
const AspectRatioScreen = () => {
  return (
    <React.Fragment>
      <UIDivider className="bg-default-200 bg-opacity-50" />
      <Frame title="Horizontal">
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>

        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
      </Frame>
      <Frame title="Vertical">
        {/* Active Case */}
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
          color={'success'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
        <UIButton
          variant={'light'}
          radius={'none'}
          className={'justify-between'}
        >
          <UIView>2:1</UIView>
          <UIView>900 x 450</UIView>
        </UIButton>
      </Frame>
    </React.Fragment>
  );
};
export default AspectRatioScreen;
