import { createSlice } from "@reduxjs/toolkit";

interface State {
    type: string;
    input: string;
    colors: string[];
    background: string;
}

const initialState: State = {
    type: 'DEFAULT',
    input: "", // with icons || without icon
    colors: [], // default 3 colors
    background: '' // solid color
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