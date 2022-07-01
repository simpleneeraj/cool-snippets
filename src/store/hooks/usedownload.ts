

import download from 'store/slices/download';
import _download from 'store/selector/_download';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';


const useDownload = () => {
    const { imageFormat, pixelRatio } = useAppSelector(_download)
    const dispatch = useAppDispatch()
    /**************************
    Setting Background
    ***************************/
    const setImageFormat = useCallMemo((payload: string) => {
        dispatch(download.actions.setImageFormat(payload))
    }, [imageFormat])
    const setPixelRatio = useCallMemo((payload: number) => {
        dispatch(download.actions.setPixelRatio(payload))
    }, [pixelRatio])

    // Return Values
    return {
        setImageFormat,
        setPixelRatio,
        imageFormat,
        pixelRatio

    }

}
export default useDownload;