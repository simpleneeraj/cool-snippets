import React from 'react';
import { keepSelectionProps } from '@/components/app/widget/selection-manager';
import { ELEMENTS } from '@/typings/enums';
import UIView from '@/app-kit/source/UIView';
import useSlideEditor from '@/store/hooks/use-editor';
import { AnimatePresence, motion } from 'motion/react';
import TextToolbar from '../../screens/edit/toolbar/text-toolbar';
import HeaderToolbar from '../../screens/edit/toolbar/header-toolbar';

type ToolbarWidgetProps = {};

const ToolbarWidget: React.FC<ToolbarWidgetProps> = ({}) => {
  const { currentElementId, currentElement } = useSlideEditor();

  // Each floating toolbar serves a specific element type. Anything else (image,
  // icon, QR, user-info, watermark) is edited from the right panel, so the top
  // toolbar shows nothing rather than the code block's header controls.
  const content = React.useMemo(() => {
    switch (currentElement?.type) {
      case ELEMENTS.TEXT:
        return <TextToolbar />;
      case ELEMENTS.CODE:
        return <HeaderToolbar />;
      default:
        return null;
    }
  }, [currentElement]);

  return (
    <AnimatePresence>
      {currentElementId && content && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <UIView
            {...keepSelectionProps}
            className="pointer-events-auto flex justify-center pt-2 absolute top-0 left-1/2 -translate-x-1/2"
          >
            {content}
          </UIView>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToolbarWidget;
