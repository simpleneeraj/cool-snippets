import React from 'react';
import { AITypeWriterProps } from './types';
import { useInterval } from './hooks/use-interval';
import {
  traverseNodesAndCountTokens,
  traverseNodesAndInjectAIWriter,
} from './lib/utils';

const AITypewriter: React.FC<AITypeWriterProps> = ({
  children,
  delay = 25,
  onFinish,
}) => {
  const [position, setPosition] = React.useState(0);

  const tokenLengths = React.useMemo(
    () => traverseNodesAndCountTokens(children),
    [children]
  );

  const totalTokens = React.useMemo(
    () => tokenLengths.reduce((acc, curr) => acc + curr, 0),
    [tokenLengths]
  );
  const nodeIndex = React.useMemo(
    () => traverseNodesAndInjectAIWriter(children),
    [children, position, tokenLengths]
  );

  useInterval(
    () => {
      setPosition((prevPos) => {
        if (prevPos + 1 >= totalTokens) {
          onFinish?.();
        }
        return prevPos + 1;
      });
    },
    totalTokens > position ? delay : null
  );

  React.useEffect(() => {
    setPosition(0);
  }, [children]);

  return nodeIndex;
};

AITypewriter.displayName = 'AITypewriter';

export default React.memo(AITypewriter);
