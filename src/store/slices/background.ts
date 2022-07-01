import { createSlice } from '@reduxjs/toolkit';
import { ActionType, BackgroundTypes } from 'typings/store';


// const image = ` linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))`
import image from 'assets/images/windows-10.webp';

const initialState: BackgroundTypes = {
    source: image,
    aspectRatio: `16:9`,
    padding: 100
}

const background = createSlice({
    name: 'background',
    initialState: initialState,
    reducers: {
        setBackground: (state: BackgroundTypes, action: ActionType) => {
            state.source = action.payload
        },
        setRatio: (state: BackgroundTypes, action: ActionType) => {
            state.aspectRatio = action.payload
        },
        setPadding: (state: BackgroundTypes, action: ActionType) => {
            state.padding = action.payload
        },
    }
})


export default background;