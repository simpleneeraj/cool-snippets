import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    type: 'DEFAULT',

}
const headSlice = createSlice({
    name: 'CodeHead',
    initialState: initialState,
    reducers: {
        setHeaderType: (state, action) => {
            state.type = action.payload
        }
    },

})
export default headSlice;