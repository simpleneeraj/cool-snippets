import dock from 'store/slices/dock';
import _dock from 'store/selector/_dock';
import useAppDispatch from 'hooks/usedispatch';
import useAppSelector from 'hooks/useselector';
import useCallMemo from 'hooks/usecallmemo';


const useDock = () => {
    const { dockComponetKey, toggleDock } = useAppSelector(_dock)
    const dispatch = useAppDispatch()
    /**************************
    Dock Handler
    ***************************/
    const updateDockComponent = useCallMemo((payload: string) => {
        dispatch(dock.actions.setDockComponet(payload))
    }, [dockComponetKey])


    const updateToggleDock = useCallMemo((payload: string) => {
        dispatch(dock.actions.setToggleDock(payload))
    }, [toggleDock])
    // Return Values
    return { updateDockComponent, updateToggleDock, dockComponetKey, toggleDock }

}
export default useDock;