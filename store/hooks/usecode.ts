import code from 'store/slices/code';
import _code from 'store/selector/_code';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';


const useCode = () => {
    const { codeValue } = useAppSelector(_code)
    const dispatch = useAppDispatch()
    /**************************
    Writing Code Handler
    ***************************/
    const writeCode = useCallMemo((payload: string) => {
        dispatch(code.actions.writeCode(payload))
    }, [codeValue])
    // Return Values
    return { writeCode, codeValue }

}
export default useCode;