import background from 'store/slices/background';
import _background from 'store/selector/_background';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';


const useBackground = () => {
    const { source, aspectRatio } = useAppSelector(_background)
    const dispatch = useAppDispatch()
    /**************************
    Setting Background
    ***************************/
    const setBackground = useCallMemo((payload: string) => {
        dispatch(background.actions.setBackground(payload))
    }, [source])
    const setRatio = useCallMemo((payload: string) => {
        dispatch(background.actions.setRatio(payload))
    }, [aspectRatio])

    // Return Values
    return { setBackground, source, aspectRatio, setRatio }

}
export default useBackground;