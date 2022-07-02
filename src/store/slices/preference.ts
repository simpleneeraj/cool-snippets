import { createSlice } from "@reduxjs/toolkit";
import { ActionType, PreferenceTypes } from "typings/store";

// ruby-blue
const initialState: PreferenceTypes = {
    mode: "javascript",
    theme: "rubyblue",
    lineNumbers: false
}

/**************************
Theme Slice
***************************/
const preference = createSlice({
    name: 'Editor Preference',
    initialState: initialState,
    reducers: {
        selectMode: (state: PreferenceTypes, action: ActionType) => {
            state.mode = action.payload
        },
        selectTheme: (state: PreferenceTypes, action: ActionType) => {
            state.theme = action.payload
        },
        isLinenumbers: (state: PreferenceTypes, action: ActionType) => {
            state.lineNumbers = action.payload
        },
    }
})

export default preference;