import useCallMemo from 'hooks/usecallmemo';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';

import preference from 'store/slices/preference';
import _preference from 'store/selector/_preference';


const usePreference = () => {
    const { lineNumbers, mode, theme, autoCompletion } = useAppSelector(_preference)
    const dispatch = useAppDispatch()
    // Select Mode Handler
    const onSelectMode = useCallMemo((payload: string) => {
        dispatch(preference.actions.selectMode(payload))
    }, [mode])
    // Select Theme Handler
    const onSelectTheme = useCallMemo((payload: string) => {
        dispatch(preference.actions.selectTheme(payload))
    }, [theme])
    // Linenumbers Handler
    const linenumberHandler = useCallMemo((payload: boolean) => {
        dispatch(preference.actions.isLinenumbers(payload))
    }, [lineNumbers])

    // autocompletion
    const autoCompletionHandler = useCallMemo((payload: boolean) => {
        dispatch(preference.actions.autoCompletion(payload))
    }, [lineNumbers])
    // Return Values
    return {
        mode,
        theme,
        lineNumbers,
        autoCompletion,
        onSelectMode,
        onSelectTheme,
        linenumberHandler,
        autoCompletionHandler
    }
}
export default usePreference;


