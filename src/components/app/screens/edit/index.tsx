import CodeScreen from './code';
import { AnimatePresence } from 'motion/react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/app-kit/ui/accordion';

const EditingScreens = () => {
  return (
    <AnimatePresence mode="sync">
      <Accordion className="w-full p-2" defaultValue={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionTrigger> Customize your code block</AccordionTrigger>
          <AccordionPanel>
            <CodeScreen />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> Customize your code block</AccordionTrigger>
          <AccordionPanel>Other things Here</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AnimatePresence>
  );
};
export default EditingScreens;
