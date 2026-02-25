import React from 'react';
import { ELEMENTS } from '@/typings/enums';
import UIView from '@/app-kit/source/UIView';
import useSlideEditor from '@/store/hooks/use-editor';
import { AnimatePresence, motion } from 'motion/react';
import TextToolbar from '../../screens/edit/toolbar/text-toolbar';
import HeaderToolbar from '../../screens/edit/toolbar/header-toolbar';

type ToolbarWidgetProps = {};

const ToolbarWidget: React.FC<ToolbarWidgetProps> = ({}) => {
  const { currentElementId, currentElement } = useSlideEditor();

  const content = React.useMemo(() => {
    switch (currentElement?.type) {
      case ELEMENTS.TEXT:
        return <TextToolbar />;
      default:
        return <HeaderToolbar />;
    }
  }, [currentElement]);

  return (
    <AnimatePresence>
      {currentElementId && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <UIView className="pointer-events-auto flex justify-center pt-2 absolute top-0 left-1/2 -translate-x-1/2">
            {content}
          </UIView>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToolbarWidget;
