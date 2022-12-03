import React from 'react';
import _tab from 'store/selector/_tab';
import tabSlice from 'store/slices/tab';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';


const useBottomTab = () => {
    const tabState = useAppSelector(_tab)
    const dispatch = useAppDispatch()
    /**************************
    Writing Code Handler
    ***************************/
    const updateBottomTab = React.useCallback((key: string, value: string) => {
        dispatch(tabSlice.actions.updateBottomTab({
            key,
            value
        }))
    }, [dispatch])
    // Return Values
    return { tabState, updateBottomTab }

}
export default useBottomTab;