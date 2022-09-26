
import React from 'react';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import headSlice from 'store/slices/code/head';
import _codeHead from 'store/selector/_code-head';


/**
 * Custom hook for code header
 * @returns 
 */

const useCodeHead = () => {
    const { type } = useAppSelector(_codeHead)
    const dispatch = useAppDispatch()

    const setHeaderType = React.useCallback((value: string) => {
        dispatch(headSlice.actions.setHeaderType(value))
    }, [dispatch])

    // Return Values
    return { setHeaderType, headerType: type }

}
export default useCodeHead