import React from 'react';
import CodeScreen from './code';
import UIView from '@/app-kit/source/UIView';
import { useScreen } from '@/store/screen';
import { useSegment } from '@/store/segment';
import useSlideEditor from '@/store/hooks/use-editor';
import { AnimatePresence } from 'motion/react';
import { SEGMENT_SCREEN } from '@/typings/enums';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/app-kit/ui/accordion';

const EditingScreens = () => {
  const { onChangeSegment } = useSegment((state) => state);
  const { screen, onChangeScreen } = useScreen((state) => state);
  const { currentSlide, currentElement, onChangeSlideElement, onChangeSlide } =
    useSlideEditor();

  const onSelectSegmentTab = React.useCallback(
    (value: SEGMENT_SCREEN) => {
      onChangeSegment('screen', value);
    },
    [onChangeSegment],
  );

  return (
    <AnimatePresence mode="sync">
      <UIView className="relative">
        <Accordion className="w-full">
          <AccordionItem>
            <AccordionTrigger> Customize your code block</AccordionTrigger>
            <AccordionPanel>
              <CodeScreen />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </UIView>
    </AnimatePresence>
  );
};
export default EditingScreens;

// const openAspectRatio = React.useCallback(() => {
//   onChangeScreen('aside', ASIDE_SCREEN.ASPECT_RATIO_SCREEN);
// }, [onChangeScreen]);

// const openBackgrounds = React.useCallback(() => {
//   onSelectSegmentTab(SEGMENT_SCREEN.BACKGROUNDS);
// }, [onSelectSegmentTab]);

// const openLanguages = React.useCallback(() => {
//   onChangeScreen('aside', ASIDE_SCREEN.PROGRAMMING_LANGUAGE_SCREEN);
// }, [onChangeScreen]);

// const RenderComponents = React.useMemo(() => {
//   switch (currentElement?.type) {
//     case ELEMENTS.CODE:
//       return (
//         <motion.div key={currentElement?.type} {...fadeIn}>
//           <CodeScreen />
//         </motion.div>
//       );
//     case ELEMENTS.TEXT:
//       return (
//         <motion.div key={currentElement?.type} {...fadeIn}>
//           <TextScreen />
//         </motion.div>
//       );
//     default:
//       return null;
//   }
// }, [currentElement?.type, openLanguages]);
