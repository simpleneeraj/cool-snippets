import { createSlice } from "@reduxjs/toolkit";
import { ActionType, PreferenceTypes } from "typings/store";

// ruby-blue
const initialState: PreferenceTypes = {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: false,
    autoCompletion: false,
    translucent: true,
    draggable: false,
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
        autoCompletion: (state: PreferenceTypes, action: ActionType) => {
            state.autoCompletion = action.payload
        },
        translucent: (state: PreferenceTypes, action: ActionType) => {
            state.translucent = action.payload
        },
        draggable: (state: PreferenceTypes, action: ActionType) => {
            state.draggable = action.payload
        },
    }
})

export default preference;