'use client';

import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Background,
  Controls,
  MiniMap,
  NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { canvasConfig, initialNodes } from '@/app/(private)/studio/flow-config';
import CodeNode from './nodes/code-node';

const nodeTypes: NodeTypes = {
  CODE_EDITOR: CodeNode,
};

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full bg-background" style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        minZoom={canvasConfig.minZoom}
        maxZoom={canvasConfig.maxZoom}
        defaultViewport={{ x: 0, y: 0, zoom: canvasConfig.defaultZoom }}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={canvasConfig.snapGrid[0]} />
        <Controls />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  );
};

export default Canvas;
