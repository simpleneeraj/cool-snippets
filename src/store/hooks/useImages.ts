import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';
import _images from 'store/selector/_images';
import imagesSlice from '../slices/images';
import { nanoid } from '@reduxjs/toolkit';


const useImages = () => {
    const imagesArray = useAppSelector(_images)
    const dispatch = useAppDispatch()
    /**************************
    Dock Handler
    ***************************/
    const addImage = useCallMemo((payload: string) => {
        const old = { id: nanoid(6), source: payload }
        dispatch(imagesSlice.actions.addImage(old))
    }, [])
    const deleteImage = useCallMemo((payload: string) => {
        dispatch(imagesSlice.actions.deleteImage(payload))
    }, [])
    // Return Values
    return { imagesArray, addImage, deleteImage }

}
export default useImages;