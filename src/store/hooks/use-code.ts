import React from 'react';
import _code from '@/store/selector/_code';
import codeSlice from '@/store/slices/code';
import useAppDispatch from '@/hooks/usedispatch';
import useAppSelector from '@/hooks/useselector';

type S = string;
type N = string | number | boolean;

const { actions: a } = codeSlice;

const useCode = () => {
  const d = useAppDispatch();
  const codeState = useAppSelector(_code);
  /**
   * Update Canvas
   * `key` `value`
   */
  const updateCanvas = React.useCallback(
    (key: S, value: N) => {
      d(a.updateCanvas({ key, value }));
    },
    [d]
  );
  /**
   * Update Code
   * `key` `value`
   */
  const updateCode = React.useCallback(
    (key: S, value: N) => {
      d(a.updateCode({ key, value }));
    },
    [d]
  );
  /**
   * Update CodeHead
   * `key` `value`
   */
  const updateCodeHead = React.useCallback(
    (key: S, value: N) => {
      d(a.updateCodeHead({ key, value }));
    },
    [d]
  );
  /**
   * Update Text
   * `key` `value`
   */
  const updateText = React.useCallback(
    (key: S, value: N) => {
      d(a.updateText({ key, value }));
    },
    [d]
  );
  return {
    state: React.useMemo(() => codeState, [codeState]),
    codeState: React.useMemo(() => codeState.present, [codeState.present]),
    updateCanvas: React.useMemo(() => updateCanvas, [updateCanvas]),
    updateCode: React.useMemo(() => updateCode, [updateCode]),
    updateCodeHead: React.useMemo(() => updateCodeHead, [updateCodeHead]),
    updateText: React.useMemo(() => updateText, [updateText]),
  };
};

export default useCode;
