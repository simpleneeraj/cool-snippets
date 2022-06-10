import React from "react";

/**
 * A custom hook combine with useCallback and useMemo
 * @param callback 
 * @param deps 
 * @returns 
 */
const useCallMemo = (callback: Function, deps: React.DependencyList) => {

    // eslint-disable-next-line
    const _Handler = React.useCallback(callback, [deps])
    const Handler = React.useMemo(() => _Handler, [_Handler])
    // Return Values
    return Handler
}
export default useCallMemo;