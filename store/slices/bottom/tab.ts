import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    tabName: 'CODE::EDIT'
}

const tabSlice = createSlice({
    name: 'Bottom Tab',
    initialState: initialState,
    reducers: {
        updateTab: (state, action) => {
            state.tabName = action.payload
        }
    }
})


export default tabSlice;