import { useCallback } from 'react';
import { useStore } from 'zustand';
import useSlide from '../slides';

const temporalStore = useSlide.temporal;

/**
 * Undo/redo over the slides store.
 *
 * `pause`/`resume` bracket continuous gestures (dragging, scrubbing a slider)
 * so a whole gesture lands as one history entry instead of one per frame.
 */
const useHistory = () => {
  const { undo, redo, pastStates, futureStates } = useStore(temporalStore);

  return {
    undo: useCallback(() => undo(), [undo]),
    redo: useCallback(() => redo(), [redo]),
    canUndo: pastStates.length > 0,
    canRedo: futureStates.length > 0,
  };
};

export const pauseHistory = () => temporalStore.getState().pause();
export const resumeHistory = () => temporalStore.getState().resume();

export default useHistory;
