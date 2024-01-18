import React from 'react';
import CodeScreen from './code';
import TextScreen from './text';
import CanvasScreen from './canvas';
import AspectRatioScreen from './ratio';
import UIView from '@/ui-kit/source/UIView';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import UIPanViewHeader from '@/ui-kit/source/UIPanView/header';
import UIPanView, { PanViewPosition } from '@/ui-kit/source/UIPanView';

const EditingScreens = () => {
  return (
    <React.Fragment>
      <UIView className="relative">
        <CanvasScreen />
        <CodeScreen />
        <TextScreen />
      </UIView>
      {/* SLIDE PAN */}
      <UIPanView show={false} position={PanViewPosition.RIGHT_TO_LEFT}>
        <UIPanViewHeader
          title="Dimentions"
          startContent={
            <UIIconButton
              isIconOnly
              size={'sm'}
              radius={'sm'}
              variant={'light'}
              //   onPress={() => setState(!state)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-default-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </UIIconButton>
          }
        />
        <AspectRatioScreen />
      </UIPanView>
    </React.Fragment>
  );
};
export default EditingScreens;
