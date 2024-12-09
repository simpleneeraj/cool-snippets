'use client';

import React, { useCallback } from 'react';
import SlideStyle from './styles/slide';
import UIView from '@/ui-kit/source/UIView';
import EditorComponents from './elements';
import ElementStyle from './styles/element';
import useSlideEditor from '@/store/hooks/use-editor';
import { Capture as CaptureView } from '@/plugins/capture';
import Controls from './controls';
import {
  ReactFlow,
  Background,
  SelectionMode,
  BackgroundVariant,
} from '@xyflow/react';

// Canvas Configuration
const canvasConfig = {
  maxZoom: 2,
  minZoom: 0.5,
  defaultZoom: 1,
  snapGrid: [20, 20],
  panOnDrag: [1, 2],
  viewportPadding: 10,
};

enum ComponentTypes {
  CODE_EDITOR = 'CODE_EDITOR',
}

const initialNodes = [
  {
    id: ComponentTypes.CODE_EDITOR,
    type: ComponentTypes.CODE_EDITOR,
    position: { x: 0, y: 0 },
    data: {},
  },
];

const ContainerWidget = () => {
  const { currentSlide } = useSlideEditor();

  const CodeEditor = useCallback(() => {
    return (
      <UIView className={'container'}>
        <CaptureView className="center">
          {currentSlide?.elements?.map((item) => (
            <React.Fragment key={item.id}>
              <ElementStyle style={item} />
              <EditorComponents item={item} />
            </React.Fragment>
          ))}
        </CaptureView>
      </UIView>
    );
  }, [currentSlide?.elements]);

  const nodeTypes = {
    [ComponentTypes.CODE_EDITOR]: CodeEditor,
  };

  return (
    <UIView className="flex flex-col flex-1 relative">
      <ReactFlow
        fitView
        fitViewOptions={{
          maxZoom: 1,
        }}
        zoomOnScroll
        zoomOnDoubleClick
        nodes={initialNodes}
        nodeTypes={nodeTypes}
        maxZoom={canvasConfig.maxZoom}
        minZoom={canvasConfig.minZoom}
        selectionMode={SelectionMode.Partial}
        panOnDrag={canvasConfig.panOnDrag}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={0.5} />
      </ReactFlow>
      <SlideStyle style={currentSlide?.background} />
      <Controls />
    </UIView>
  );
};

export default ContainerWidget;
