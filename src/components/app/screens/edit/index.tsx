import React from 'react';
import CodeScreen from './code';
import TextScreen from './text';
import CanvasScreen from './canvas';
import AspectRatioScreen from './ratio';
import LanguagesScreen from './languages';
import UIView from '@/ui-kit/source/UIView';
import UIBackButton from '@/ui-kit/components/UIBackButton';
import UIPanViewHeader from '@/ui-kit/source/UIPanView/header';
import UIPanView, { PanViewPosition } from '@/ui-kit/source/UIPanView';
import { SEGMENT_SCREEN, ELEMENTS, ASIDE_SCREEN } from '@/typings/enums';
import useSlideEditor from '@/store/hooks/use-editor';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '@/constants/framer-transition';
import { useScreen } from '@/store/screen';
import { useSegment } from '@/store/segment';
import HeaderScreen from './header';

const EditingScreens = () => {
  const { onChangeSegment } = useSegment((state) => state);
  const { screen, onChangeScreen } = useScreen((state) => state);
  const { currentElement, onChangeSlideElement } = useSlideEditor();

  const onSelectSegmentTab = React.useCallback(
    (value: SEGMENT_SCREEN) => {
      onChangeSegment('screen', value);
    },
    [onChangeSegment]
  );

  const openAspectRatio = React.useCallback(() => {
    onChangeScreen('aside', ASIDE_SCREEN.ASPECT_RATIO_SCREEN);
  }, [onChangeScreen]);
  const openBackgrounds = React.useCallback(() => {
    onSelectSegmentTab(SEGMENT_SCREEN.BACKGROUNDS);
  }, [onSelectSegmentTab]);
  const openLanguages = React.useCallback(() => {
    onChangeScreen('aside', ASIDE_SCREEN.PROGRAMMING_LANGUAGE_SCREEN);
  }, [onChangeScreen]);

  const RenderComponents = React.useMemo(() => {
    switch (currentElement?.type) {
      case ELEMENTS.CODE:
        return (
          <motion.div key={currentElement?.type} {...fadeIn}>
            <CodeScreen openLanguages={openLanguages} />
          </motion.div>
        );
      case ELEMENTS.TEXT:
        return (
          <motion.div key={currentElement?.type} {...fadeIn}>
            <TextScreen />
          </motion.div>
        );
      default:
        return null;
    }
  }, [currentElement?.type]);

  return (
    <AnimatePresence mode="sync">
      <UIView className="relative">
        <HeaderScreen />
        <CanvasScreen
          openAspectRatio={openAspectRatio}
          openBackgrounds={openBackgrounds}
          updateElementProperties={() => {}}
        />
        {RenderComponents}
      </UIView>
      {/* SLIDE PAN */}
      <UIPanView
        show={screen.aside === ASIDE_SCREEN.ASPECT_RATIO_SCREEN}
        position={PanViewPosition.RIGHT_TO_LEFT}
      >
        <UIPanViewHeader
          title="Dimentions"
          startContent={
            <UIBackButton
              onPress={() => onChangeScreen('aside', ASIDE_SCREEN.EMPTY_SCREEN)}
            />
          }
        />
        <AspectRatioScreen />
      </UIPanView>
      <UIPanView
        show={screen.aside === ASIDE_SCREEN.PROGRAMMING_LANGUAGE_SCREEN}
        position={PanViewPosition.RIGHT_TO_LEFT}
      >
        <UIPanViewHeader
          title="Languages"
          startContent={
            <UIBackButton
              onPress={() => onChangeScreen('aside', ASIDE_SCREEN.EMPTY_SCREEN)}
            />
          }
        />
        <LanguagesScreen
          value={currentElement?.properties?.language}
          onSelect={(language) => {
            onChangeSlideElement({
              properties: {
                language,
              },
            });
          }}
        />
      </UIPanView>
    </AnimatePresence>
  );
};
export default EditingScreens;
