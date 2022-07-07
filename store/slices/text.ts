import { createSlice } from '@reduxjs/toolkit';
import { ActionType, TextTypes } from 'typings/store';

const initialState: TextTypes = {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0.05,
    fontFace: 'MonoLisa',
}

const text = createSlice({
    name: 'Text Slice',
    initialState: initialState,
    reducers: {
        fontSize: (state: TextTypes, action: ActionType) => {
            state.fontSize = action.payload
        },
        fontWeight: (state: TextTypes, action: ActionType) => {
            state.fontWeight = action.payload
        },
        fontFace: (state: TextTypes, action: ActionType) => {
            state.fontFace = action.payload
        },
        lineHeight: (state: TextTypes, action: ActionType) => {
            state.lineHeight = action.payload
        },
        letterSpacing: (state: TextTypes, action: ActionType) => {
            state.letterSpacing = action.payload
        },
    }
})


export default text;