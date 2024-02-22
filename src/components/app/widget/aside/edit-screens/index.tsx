import React from 'react';
import CodeScreen from './code';
import TextScreen from './text';
import CanvasScreen from './canvas';
import useBoundStore from '@/store';
import AspectRatioScreen from './ratio';
import LanguagesScreen from './languages';
import UIView from '@/ui-kit/source/UIView';
import UIBackButton from '@/ui-kit/components/UIBackButton';
import UIPanViewHeader from '@/ui-kit/source/UIPanView/header';
import UIPanView, { PanViewPosition } from '@/ui-kit/source/UIPanView';
import { BOTTOM_SEGMENT_TABS, SECONDRY_ASIDE_SCREEN } from '@/typings/enums';

const EditingScreens = () => {
  const { aspectRatio, languages, onChangeScreen, onChangeTab } = useBoundStore(
    (state) => state
  );
  const onSelectSegmentTab = React.useCallback(
    (value: BOTTOM_SEGMENT_TABS) => {
      onChangeTab('bottomTab', value);
    },
    [onChangeTab]
  );
  const openAspectRatio = React.useCallback(() => {
    onChangeScreen('aspectRatio', SECONDRY_ASIDE_SCREEN.ASPECT_RATIO_SCREEN);
  }, [onChangeScreen]);
  const openBackgrounds = React.useCallback(() => {
    onSelectSegmentTab(BOTTOM_SEGMENT_TABS.BACKGROUNDS);
  }, [onSelectSegmentTab]);
  const openLanguages = React.useCallback(() => {
    onChangeScreen('languages', SECONDRY_ASIDE_SCREEN.LANGUAGES_SCREEN);
  }, [onChangeScreen]);

  return (
    <React.Fragment>
      <UIView className="relative">
        <CanvasScreen
          openAspectRatio={openAspectRatio}
          openBackgrounds={openBackgrounds}
        />
        <CodeScreen openLanguages={openLanguages} />
        <TextScreen />
      </UIView>
      {/* SLIDE PAN */}
      <UIPanView
        show={aspectRatio === SECONDRY_ASIDE_SCREEN.ASPECT_RATIO_SCREEN}
        position={PanViewPosition.RIGHT_TO_LEFT}
      >
        <UIPanViewHeader
          title="Dimentions"
          startContent={
            <UIBackButton
              onPress={() =>
                onChangeScreen(
                  'aspectRatio',
                  SECONDRY_ASIDE_SCREEN.EMPTY_SCREEN
                )
              }
            />
          }
        />
        <AspectRatioScreen />
      </UIPanView>
      <UIPanView
        show={languages === SECONDRY_ASIDE_SCREEN.LANGUAGES_SCREEN}
        position={PanViewPosition.RIGHT_TO_LEFT}
      >
        <UIPanViewHeader
          title="Languages"
          startContent={
            <UIBackButton
              onPress={() =>
                onChangeScreen('languages', SECONDRY_ASIDE_SCREEN.EMPTY_SCREEN)
              }
            />
          }
        />
        <LanguagesScreen />
      </UIPanView>
    </React.Fragment>
  );
};
export default EditingScreens;
