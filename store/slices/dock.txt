

import { createSlice } from '@reduxjs/toolkit';
import { ActionType, DockTypes } from 'typings/store';

const initialState: DockTypes = {
    dockComponetKey: `Photos`,
    toggleDock: false
}

const dock = createSlice({
    name: 'Dock Slice',
    initialState: initialState,
    reducers: {
        setDockComponet: (_state: DockTypes, action: ActionType) => {
            _state.dockComponetKey = action.payload
        },
        setToggleDock: (_state: DockTypes, action: ActionType) => {
            _state.toggleDock = action.payload
        }
    }
})


export default dock;