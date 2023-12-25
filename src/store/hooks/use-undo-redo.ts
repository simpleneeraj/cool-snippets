import React from 'react';
import store from '@/store';

/**
 * Custom Hook for `UNDO` `REDO` of redux state
 * @returns
 */
const useDoable = () => {
  const doable = React.useCallback((type: string) => {
    store.dispatch({
      type,
    });
  }, []);
  return React.useMemo(() => doable, [doable]);
};

export default useDoable;
