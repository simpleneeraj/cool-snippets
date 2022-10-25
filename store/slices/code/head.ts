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
        },
        setInput: (state, action) => {
            state.input = action.payload
        },
        setColors: (state, action) => {
            state.colors = action.payload
        },
        setBackground: (state, action) => {
            state.background = action.payload
        },
    },

})
export default headSlice;