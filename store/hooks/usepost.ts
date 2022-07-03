import post from 'store/slices/post';
import _post from 'store/selector/_post';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';


const usePost = () => {
    const { alpha, cornerRadius, blurRadius } = useAppSelector(_post)
    const dispatch = useAppDispatch()
    /**************************
    Writing Code Handler
    ***************************/
    const alphaHandler = useCallMemo((payload: number) => {
        dispatch(post.actions.alpha(payload))
    }, [])
    const cornerRadiusHandler = useCallMemo((payload: number) => {
        dispatch(post.actions.cornerRadius(payload))
    }, [])
    const blurRadiusHandler = useCallMemo((payload: number) => {
        dispatch(post.actions.blurRadius(payload))
    }, [])
    // Return Values
    return {
        alpha, cornerRadius, blurRadius, alphaHandler,
        cornerRadiusHandler,
        blurRadiusHandler
    }

}
export default usePost;