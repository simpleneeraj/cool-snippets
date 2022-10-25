
import useCallMemo from 'hooks/usecallmemo';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import text from 'store/slices/code/text';
import _text from 'store/selector/_text';


const useText = () => {
    const codeState = useAppSelector(_text)
    const { fontFace, fontSize, fontWeight, letterSpacing, lineHeight } = codeState
    const dispatch = useAppDispatch()
    /**************************
    fontFace
    ***************************/
    const fontFaceHandler = useCallMemo(
        (payload: string) => {
            dispatch(text.actions.fontFace(payload))
        },
        [fontFace])
    /**************************
    fontSize
    ***************************/
    const fontSizeHandler = useCallMemo(
        (payload: string) => {
            dispatch(text.actions.fontSize(payload))
        },
        [fontSize])
    /**************************
    fontWeight
    ***************************/
    const fontWeightHandler = useCallMemo(
        (payload: string) => {
            dispatch(text.actions.fontWeight(payload))
        },
        [fontWeight])
    /**************************
    letterSpacing
    ***************************/
    const letterSpacingHandler = useCallMemo(
        (payload: string) => {
            dispatch(text.actions.letterSpacing(payload))
        },
        [letterSpacing])
    /**************************
    lineHeight
    ***************************/
    const lineHeightHandler = useCallMemo(
        (payload: string) => {
            dispatch(text.actions.lineHeight(payload))
        },
        [lineHeight])

    // Return Values
    return {
        fontFace,
        fontSize,
        fontWeight,
        letterSpacing,
        lineHeight,

        fontFaceHandler,
        fontSizeHandler,
        fontWeightHandler,
        letterSpacingHandler,
        lineHeightHandler,
    }

}
export default useText;