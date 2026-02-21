'use client';

import React, { memo } from 'react';
import { Handle, Position, NodeProps, Node } from '@xyflow/react';
import ContainerWidget from '@/components/app/widget/code/container';

type CodeNodeData = Node<{ label?: string }, 'code-editor'>;

const CodeNode = ({ data }: NodeProps<CodeNodeData>) => {
  return (
    <div className="relative group">
       {/* 
        We are hiding handles for now as we want a "canvas" feel not necessarily a "flow" feel initially. 
        But React Flow requires valid nodes to often have some connection logic or just be present.
        If we want to connect things later, we can uncomment or style these.
       */}
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-transparent !border-0"
        isConnectable={false}
      />
      
      <div className="w-fit">
        <ContainerWidget />
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-transparent !border-0"
        isConnectable={false}
      />
    </div>
  );
};

export default memo(CodeNode);
