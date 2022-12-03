/* eslint-disable react-hooks/exhaustive-deps */

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
    const { type, background, colors, input } = useAppSelector(_codeHead)
    const dispatch = useAppDispatch()
    // 
    const setBackground = React.useCallback((value: string) => {
        dispatch(headSlice.actions.setBackground(value))
    }, [background])
    // 
    const setColors = React.useCallback((value: string) => {
        dispatch(headSlice.actions.setColors(value))
    }, [colors])
    // 
    const setHeaderType = React.useCallback((value: string) => {
        dispatch(headSlice.actions.setHeaderType(value))
    }, [type])
    // 
    const setInput = React.useCallback((value: string) => {
        dispatch(headSlice.actions.setInput(value))
    }, [input])

    // Return Values
    return {
        headerType: type,
        headerInput: input,
        headerColors: colors,
        headerBackground: background,
        setInput,
        setColors,
        setBackground,
        setHeaderType,
    }

}
export default useCodeHead