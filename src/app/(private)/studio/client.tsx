'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import Controls from '@/components/app/widget/code/controls';
import ContainerWidget from '@/components/app/widget/code/container';
import PrimaryAsideWidget from '@/components/app/widget/aside/primary';
import { canvasConfig, ComponentTypes, initialNodes } from './flow-config';
import SecondaryAsideWidget from '@/components/app/widget/aside/secondary';
import {
  ReactFlow,
  Background,
  SelectionMode,
  BackgroundVariant,
} from '@xyflow/react';

const EditorClient = () => {
  const nodeTypes = {
    [ComponentTypes.CODE_EDITOR]: ContainerWidget,
  };
  return (
    <UIView className={'flex flex-1 relative'}>
      {/* LEFT SECTION */}
      <PrimaryAsideWidget />
      {/* CENTER SECTION */}
      <UIView className="w-full flex flex-col relative">
        <ReactFlow
          fitView
          fitViewOptions={{
            maxZoom: 1,
          }}
          defaultNodes={initialNodes}
          defaultEdges={[]}
          nodes={initialNodes}
          nodeTypes={nodeTypes}
          maxZoom={canvasConfig.maxZoom}
          minZoom={canvasConfig.minZoom}
          selectionMode={SelectionMode.Partial}
          panOnDrag={canvasConfig.panOnDrag}
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
        >
          <Background variant={BackgroundVariant.Dots} gap={12} size={0.5} />
        </ReactFlow>
        <Controls />
      </UIView>
      {/* RIGHT SECTION */}
      <SecondaryAsideWidget />
    </UIView>
  );
};
export default EditorClient;

/**
 * Need to handle many things here
 * 1. User auth management
 * 2. Handle The Template data correctly
 * 3. Will giving a save button to user
 */
