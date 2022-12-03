import useAppDispatch from "hooks/usedispatch"
import useAppSelector from "hooks/useselector"
import React from "react"
import _code from "store/selector/_code"
import codeSlice from "store/slices/code"

const { actions } = codeSlice

type S = string
type N = string | number | boolean


const useCode = () => {
    const dispatch = useAppDispatch()
    const codeState = useAppSelector(_code)
    /**
     * Update Canvas 
     * `key` `value`
     */
    const updateCanvas = React.useCallback((key: S, value: N) => {
        dispatch(actions.updateCanvas({ key, value }))
    }, [dispatch])
    /**
     * Update Code 
     * `key` `value`
     */
    const updateCode = React.useCallback((key: S, value: N) => {
        dispatch(actions.updateCode({ key, value }))
    }, [dispatch])
    /**
    * Update CodeHead 
    * `key` `value`
    */
    const updateCodeHead = React.useCallback((key: S, value: N) => {
        dispatch(actions.updateCodeHead({ key, value }))
    }, [dispatch])
    /**
     * Update Text 
     * `key` `value`
     */
    const updateText = React.useCallback((key: S, value: N) => {
        dispatch(actions.updateText({ key, value }))
    }, [dispatch])

    return {
        codeState: React.useMemo(() => codeState, [codeState]),
        updateCanvas: React.useMemo(() => updateCanvas, [updateCanvas]),
        updateCode: React.useMemo(() => updateCode, [updateCode]),
        updateCodeHead: React.useMemo(() => updateCodeHead, [updateCodeHead]),
        updateText: React.useMemo(() => updateText, [updateText]),

    }


}

export default useCode