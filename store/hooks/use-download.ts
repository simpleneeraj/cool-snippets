

import download from 'store/slices/download';
import _download from 'store/selector/_download';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';


const useDownload = () => {
    const { imageFormat, pixelRatio, fileName } = useAppSelector(_download)
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
    const setFileName = useCallMemo((payload: number) => {
        dispatch(download.actions.setFileName(payload))
    }, [fileName])

    // Return Values
    return {
        setFileName,
        setImageFormat,
        setPixelRatio,
        imageFormat,
        pixelRatio,
        fileName

    }

}
export default useDownload;