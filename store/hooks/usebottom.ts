
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';
import tabSlice from 'store/slices/bottom/tab';
import _bottomTab from 'store/selector/_bottom';



const useBottomTab = () => {
    const { tabName } = useAppSelector(_bottomTab)
    const dispatch = useAppDispatch()
    /**************************
    Writing Code Handler
    ***************************/
    const updateTab = useCallMemo((payload: string) => {
        dispatch(tabSlice.actions.updateTab(payload))
    }, [tabName])
    // Return Values
    return { tabName, updateTab }

}
export default useBottomTab;