import { createSlice } from '@reduxjs/toolkit';
import { ActionType, PostTypes, } from 'typings/store';

const initialState: PostTypes = {
    cornerRadius: 15,
    blurRadius: 20,
    alpha: 0.5
}

const post = createSlice({
    name: 'code',
    initialState: initialState,
    reducers: {
        cornerRadius: (state: PostTypes, action: ActionType) => {
            state.cornerRadius = action.payload
        },
        blurRadius: (state: PostTypes, action: ActionType) => {
            state.blurRadius = action.payload
        },
        alpha: (state: PostTypes, action: ActionType) => {
            state.alpha = action.payload
        },
    }
})


export default post;

