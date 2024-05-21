import React from 'react';
import CodeScreen from './code';
import TextScreen from './text';
import CanvasScreen from './canvas';
import useStore from '@/store';
import AspectRatioScreen from './ratio';
import LanguagesScreen from './languages';
import UIView from '@/ui-kit/source/UIView';
import UIBackButton from '@/ui-kit/components/UIBackButton';
import UIPanViewHeader from '@/ui-kit/source/UIPanView/header';
import UIPanView, { PanViewPosition } from '@/ui-kit/source/UIPanView';
import {
  BOTTOM_SEGMENT_TABS,
  ELEMENTS,
  SECONDRY_ASIDE_SCREEN,
} from '@/typings/enums';
import useSlideEditor from '@/store/hooks/use-editor';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn, fadeOut, slideInBottom } from '@/constants/framer-transition';

const EditingScreens = () => {
  const { aspectRatio, languages, onChangeScreen, onChangeTab } = useStore(
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

  const { element } = useSlideEditor();

  const RenderComponents = React.useMemo(() => {
    switch (element?.type) {
      case ELEMENTS.CODE:
        return (
          <motion.div key={element?.type} {...fadeIn}>
            <CodeScreen openLanguages={openLanguages} />
          </motion.div>
        );
      case ELEMENTS.TEXT:
        return (
          <motion.div key={element?.type} {...fadeIn}>
            <TextScreen />
          </motion.div>
        );
      default:
        return null;
    }
  }, [element?.type]);

  return (
    <AnimatePresence mode="sync">
      <UIView className="relative">
        <CanvasScreen
          openAspectRatio={openAspectRatio}
          openBackgrounds={openBackgrounds}
        />
        {RenderComponents}
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
    </AnimatePresence>
  );
};
export default EditingScreens;
