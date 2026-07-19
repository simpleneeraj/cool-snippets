import React from 'react';
import UIView from '@shared/uikit/UIView';
import { Frame, FrameItem } from '@/components/elements/frame';

const MoreFeatures = () => {
  return (
    <Frame title="More Features">
      <FrameItem divider={false} className="p-2">
        <UIView className="grid grid-cols-4 gap-1 flex-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <UIView
              key={i}
              className="bg-muted p-1 rounded-xl h-16 flex items-center justify-center"
            >
              {i + 1}
            </UIView>
          ))}
        </UIView>
      </FrameItem>
    </Frame>
  );
};
export default MoreFeatures;
